import { useDispatch, useSelector } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet } from 'react-router-dom';
import Loader from '../../components/Loader/Loader';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import CamperCard from '../../components/CamperCard/CamperCard';
import css from './CamperDetailsPage.module.css';
import {
  selectCampersById,
  selectError,
  selectLoading,
} from '../../redux/campers/selectors';
import { getCamperById } from '../../redux/campers/operation';
import BookForm from '../../components/App/BookForm/BookForm';
import clsx from 'clsx';
const getLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export default function CamperDetailPage() {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const camper = useSelector(selectCampersById);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    if (camperId) {
      dispatch(getCamperById(camperId));
    }
  }, [dispatch, camperId]);

  return (
    <div className={css.container}>
      {loading && <Loader />}
      {error && <ErrorMessage />}
      {camper && <CamperCard camper={camper} />}
      <div className={css.containerAdditional}>
        <div className={css.add}>
          <ul className={css.list}>
            <li>
              <NavLink
                to={`/catalog/${camperId}/features`}
                className={getLinkClass}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`/catalog/${camperId}/reviews`}
                className={getLinkClass}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
          <div className={css.line}></div>
        </div>
        <Suspense fallback={<div>Loading sub components...</div>}>
          <Outlet />
        </Suspense>
        <BookForm />
      </div>
    </div>
  );
}
