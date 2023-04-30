import React, {FC} from 'react';
import styles from './Navbar.module.scss';

const Navbar:FC = () => {
    return (
        <div className={`${styles.navContainer} w-100`}>
            <span>Become a member</span>
            <span>View clients</span>
        </div>
    )
}

export default Navbar;