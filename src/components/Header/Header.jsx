import Navigation from '../Navigation/Navigation';
import Logo from '../../images/logo.png';
import css from './Header.module.css';

export default function Header() {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <img
          className={css.logo}
          src={Logo}
          width="136"
          height="16"
          alt="Logo"
        />
        <Navigation />
      </div>
    </header>
  );
}
