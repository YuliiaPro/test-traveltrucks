import React from 'react';
import css from './StarRating.module.css'; // Імпортуйте стилі для зірок

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span
      key={index}
      className={index < rating ? css.filledStar : css.emptyStar}
    >
      ★
    </span>
  ));

  return <div>{stars}</div>;
};

export default StarRating;
