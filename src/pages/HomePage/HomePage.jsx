import { NavLink } from 'react-router-dom';
import homeBackDesk1x from '../../images/home/homeBackDesk1x.png';
import homeBackDesk2x from '../../images/home/homeBackDesk2x.png';

import css from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={css.container}>
      <div className={css.content}>
        <h1>Campers of your dreams</h1>
        <p>You can find everything you want in our catalog</p>
        <NavLink to="/catalog">
          <button className={css.button}>View Now</button>
        </NavLink>
      </div>
      <picture className={css.background}>
        <source
          srcSet={`${homeBackDesk1x} 1x, ${homeBackDesk2x} 2x`}
          media="(min-width:1440px)"
          height="696"
          width="1440"
        />

        <img
          src={homeBackDesk1x}
          alt="bottle of water"
          height="696"
          width="1440"
        />
      </picture>
    </div>
  );
}
