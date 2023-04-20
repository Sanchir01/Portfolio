import { Link } from 'react-scroll';
import styles from './nav.module.scss';
const Nav = () => {
  const nav: string[] = ['Home', 'About', 'Projects', 'Contacts'];
  return (
    <div id="home" className={styles.app}>
      <h2 className="font-bold">Sanchir</h2>
      <nav className={styles.nav}>
        <ul>
          {nav.map((text) => (
            <li>
              <Link to={text} spy={true} smooth={true} offset={50} duration={200}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
