import { useSelector } from 'react-redux';
import CamperItem from '../CamperItem/CamperItem';
import css from './CampersList.module.css';
import { selectFilteredCampers } from '../../redux/campers/selectors';

export default function CamperList() {
  const campers = useSelector(selectFilteredCampers);

  if (!campers || !campers.length) {
    return <p>No campers available.</p>;
  }
  return (
    <>
      <ul className={css.container}>
        {campers.map(camperItem => (
          <li className={css.item} key={camperItem.id}>
            <CamperItem camper={camperItem} />
          </li>
        ))}
      </ul>
    </>
  );
}
