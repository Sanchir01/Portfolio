import React from 'react';
import { Link } from 'react-scroll';
import styles from './nav.module.scss';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Nav = () => {
  const nav: string[] = ['Home', 'About', 'Projects', 'Contacts'];
  const [nave, setNav] = React.useState(false);
  return (
    <div id="home" className={styles.app}>
      <Link
        to={'Home'}
        spy={true}
        smooth={true}
        offset={50}
        duration={200}
        className="font-bold ms:font-lg">
        Sanchir
      </Link>
      <nav className={styles.menu}>
        <ul className={nave ? [styles.menu, styles.active].join(' ') : styles.active}>
          {nav.map((text, index) => (
            <li>
              <Link
              onClick={() => setNav(!nave)}
                className="hover:text-blue-500"
                key={index}
                to={text}
                spy={true}
                smooth={true}
                offset={50}
                duration={200}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div onClick={() => setNav(!nave)} className={styles.burger}>
        {!nave ? <AiOutlineMenu size={40} /> : <AiOutlineClose size={40} />}
      </div>
    </div>
  );
};

export default Nav;
