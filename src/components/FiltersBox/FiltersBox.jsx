import { useDispatch, useSelector } from 'react-redux';
import { useId } from 'react';
import css from './FiltersBox.module.css';
import MapIcon from '../../images/icons/map.svg';
import AcIcon from '../../images/icons/wind.svg';
import KitchenIcon from '../../images/icons/cup-hot.svg';
import BathroomIcon from '../../images/icons/bath.svg';
import TvIcon from '../../images/icons/tv.svg';
import RadioIcon from '../../images/icons/ui-radios.svg';
import VanIcon from '../../images/icons/bi_grid-1x2.svg';
import FullyIntegratedIcon from '../../images/icons/bi_grid.svg';
import AlcoveIcon from '../../images/icons/bi_grid-3x3-gap.svg';

import {
  changeFilter,
  changeTypeFilter,
  toggleAmenityFilter,
} from '../../redux/filters/slice';

export default function FiltersBox() {
  const id = useId();
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filters.location);
  const formFilter = useSelector(state => state.filters.form);
  const amenities = useSelector(state => state.filters.amenities);
  const handleTypeChange = form => {
    dispatch(changeTypeFilter(formFilter === form ? undefined : form));
  };

  const handleAmenityChange = amenity => {
    dispatch(toggleAmenityFilter(amenity));
  };

  return (
    <div className={css.container}>
      <label htmlFor={id} className={css.label}>
        Location
      </label>

      <div className={css.inputContainer}>
        <img
          src={MapIcon}
          alt="Map Icon"
          width={24}
          height={24}
          className={css.iconInput}
        />
        <input
          className={css.input}
          type="text"
          id={id}
          value={filter}
          placeholder="City"
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </div>
      <p className={css.paragraph}>Filters</p>
      <p className={css.categories}>Vehicle equipment</p>
      <div className={css.line}></div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <p
            className={amenities.includes('AC') ? css.active : css.inactive}
            onClick={() => handleAmenityChange('AC')}
          >
            <img
              src={AcIcon}
              alt="AC Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            AC
          </p>
        </li>
        <li className={css.listItem}>
          <p
            className={
              amenities.includes('kitchen') ? css.active : css.inactive
            }
            onClick={() => handleAmenityChange('kitchen')}
          >
            <img
              src={KitchenIcon}
              alt="Kitchen Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            Kitchen
          </p>
        </li>
        <li className={css.listItem}>
          <p
            className={amenities.includes('TV') ? css.active : css.inactive}
            onClick={() => handleAmenityChange('TV')}
          >
            <img
              src={TvIcon}
              alt="TV Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            TV
          </p>
        </li>
        <li className={css.listItem}>
          <p
            className={
              amenities.includes('bathroom') ? css.active : css.inactive
            }
            onClick={() => handleAmenityChange('bathroom')}
          >
            <img
              src={BathroomIcon}
              alt="Bathroom Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            Bathroom
          </p>
        </li>
        <li className={css.listItem}>
          <p
            className={amenities.includes('radio') ? css.active : css.inactive}
            onClick={() => handleAmenityChange('radio')}
          >
            <img
              src={RadioIcon}
              alt="Radio Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            Radio
          </p>
        </li>
      </ul>
      <p className={css.categories}>Vehicle type</p>
      <div className={css.line}></div>
      <ul className={css.list}>
        <li>
          <p
            className={formFilter === 'panelTruck' ? css.active : css.inactive}
            onClick={() => handleTypeChange('panelTruck')}
          >
            <img
              src={VanIcon}
              alt="Van Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            Van
          </p>
        </li>
        <li>
          <p
            className={
              formFilter === 'fullyIntegrated' ? css.active : css.inactive
            }
            onClick={() => handleTypeChange('fullyIntegrated')}
          >
            <img
              src={FullyIntegratedIcon}
              alt="Fully Integrated Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            Fully Integrated
          </p>
        </li>
        <li>
          <p
            className={formFilter === 'alcove' ? css.active : css.inactive}
            onClick={() => handleTypeChange('alcove')}
          >
            <img
              src={AlcoveIcon}
              alt="Alcove Icon"
              width={32}
              height={32}
              className={css.icon}
            />
            Alcove
          </p>
        </li>
      </ul>
      <button className={css.button}>Search</button>
    </div>
  );
}
