import css from './CamperCard.module.css';
import StarIcon from '../../images/icons/Rating.svg';
import MapIcon from '../../images/icons/map.svg';

export default function CamperCard({ camper }) {
  const { gallery, name, price, rating, reviews, location, description } =
    camper;

  return (
    <div className={css.container}>
      <div>
        <h1 className={css.textHeader}>{name}</h1>
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
        <p className={css.textHeader}>
          €
          {price
            .toLocaleString('uk-UA', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })
            .replace(/\s/g, '')}
        </p>
        <ul className={css.imgContainer}>
          {gallery.map((item, index) => (
            <li key={index}>
              <img
                className={css.img}
                src={item.thumb}
                width={292}
                alt={name}
              />
            </li>
          ))}
        </ul>
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
}
