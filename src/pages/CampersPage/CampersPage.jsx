import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers, setLoadedCount } from '../../redux/campers/operation';
import CampersList from '../../components/CampersList/CampersList';
import Loader from '../../components/Loader/Loader';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {
  selectError,
  selectLoadedCount,
  selectLoading,
  selectShowBtn,
} from '../../redux/campers/selectors';
import FiltersBox from '../../components/FiltersBox/FiltersBox';
import css from './CampersPage.module.css';

export default function CampersPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const loadedCount = useSelector(selectLoadedCount);
  const showBtn = useSelector(selectShowBtn);

  useEffect(() => {
    dispatch(fetchCampers(Math.floor(loadedCount / 10)));
  }, [dispatch, loadedCount]);

  const handleLoadMore = () => {
    dispatch(setLoadedCount(loadedCount + 10));
  };

  return (
    <div className={css.container}>
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <div className={css.content}>
        <FiltersBox />
        <div>
          <CampersList />
          {showBtn && (
            <div className={css.buttonContainer}>
              <LoadMoreBtn handleLoadMore={handleLoadMore} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
