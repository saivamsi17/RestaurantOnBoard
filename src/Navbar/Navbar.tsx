import React, { FC } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div className={`${styles.navContainer} w-100`}>
      <Link
        to='/'
        className={`${styles.link}`}
      >
        Become a member</Link>
      <Link
        to='/accounts'
        className={`${styles.link}`}
      >View our clients</Link>
    </div>
  )
}

export default Navbar;