import homeBackDesk1x from '../../images/home/homeBackDesk1x.png';
import homeBackDesk2x from '../../images/home/homeBackDesk2x.png';

import css from './HomeBackground.module.css';

export default function HomeBackground() {
  return (
    <div className={css.background}>
      <picture>
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
