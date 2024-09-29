import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../redux/favorites/slice';
import { selectFavorites } from '../../redux/favorites/selectors';
import { Link } from 'react-router-dom';
import css from './CamperItem.module.css';
import StarIcon from '../../images/icons/Rating.svg';
import MapIcon from '../../images/icons/map.svg';
import TransmitionIcon from '../../images/icons/transmition.svg';

export default function CamperItem({ camper }) {
  const {
    id,
    gallery,
    name,
    price,
    rating,
    reviews,
    location,
    description,
    transmission,
    engine,
    AC,
    bathroom,
    kitchen,
    radio,
    TV,
    refrigerator,
    microwave,
    gas,
    water,
    form,
  } = camper;
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const isFavorite = favorites.includes(camper.id);

  const handleFavoriteToggle = () => {
    dispatch(toggleFavorite(camper.id));
  };
  const maxLength = 75; // Максимальна кількість символів для одного рядка
  const trimmedDescription =
    description.length > maxLength
      ? description.slice(0, maxLength) + '...'
      : description;

  return (
    <div className={css.container}>
      <img
        src={gallery[0]?.thumb}
        height={320}
        alt={name}
        className={css.img}
      />
      <div>
        <div className={css.header}>
          <p className={css.textHeader}>{name}</p>
          <p className={css.textHeader}>
            €
            {price
              .toLocaleString('uk-UA', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
              .replace(/\s/g, '')}
          </p>
          <button
            onClick={handleFavoriteToggle}
            className={isFavorite ? css.activeHeart : css.inactiveHeart}
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
        <div className={css.ratingContainer}>
          <p className={css.textRating}>
            <img
              src={StarIcon}
              alt="Star Icon"
              width={16}
              height={16}
              className={css.icon}
            />
            {rating}({reviews.length} Reviews)
          </p>
          <p className={css.textRating}>
            <img
              src={MapIcon}
              alt="Map Icon"
              width={16}
              height={16}
              className={css.icon}
            />
            {location}
          </p>
        </div>
        <p className={css.description}>{trimmedDescription}</p>
        <ul className={css.equipmentList}>
          <li>
            <p className={css.equipmentItem}>
              <img
                src={TransmitionIcon}
                alt="Transmition Icon"
                width={20}
                height={20}
                className={css.icon}
              />
              {transmission}
            </p>
          </li>

          <li>
            <p className={css.equipmentItem}>{engine}</p>
          </li>
          <li>{AC && <p className={css.equipmentItem}>AC</p>}</li>
          <li>{bathroom && <p className={css.equipmentItem}>bathroom</p>}</li>
          <li>{kitchen && <p className={css.equipmentItem}>kitchen</p>}</li>
          <li>{TV && <p className={css.equipmentItem}>TV</p>}</li>
          <li>{radio && <p className={css.equipmentItem}>radio</p>}</li>
          <li>
            {refrigerator && <p className={css.equipmentItem}>refrigerator</p>}
          </li>
          <li>{microwave && <p className={css.equipmentItem}>microwave</p>}</li>
          <li>{gas && <p className={css.equipmentItem}>gas</p>}</li>
          <li>{water && <p className={css.equipmentItem}>water</p>}</li>
        </ul>
        <Link to={`/catalog/${id}`}>
          <button className={css.button}>Show more</button>
        </Link>
      </div>
    </div>
  );
}
