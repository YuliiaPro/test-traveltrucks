import { useSelector } from 'react-redux';
import css from './CampersRewiews.module.css';
import { selectCampersById } from '../../redux/campers/selectors';
import StarRating from '../StarRating/StarRating';

export default function CampersRewiews() {
  const camper = useSelector(selectCampersById);

  if (!camper) {
    return <p>No camper data available.</p>;
  }
  const { reviews } = camper;

  return (
    <div className={css.container}>
      <ul className={css.list}>
        {reviews.map((review, index) => {
          const firstLetter = review.reviewer_name.charAt(0);
          return (
            <li key={index} className={css.reviewItem}>
              <div className={css.titleContainer}>
                <div className={css.initialCircle}>
                  <h2 className={css.initialLetter}>{firstLetter}</h2>
                </div>
                <div>
                  <p>{review.reviewer_name}</p>
                  <StarRating rating={review.reviewer_rating} />
                </div>
              </div>
              <p>{review.comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
