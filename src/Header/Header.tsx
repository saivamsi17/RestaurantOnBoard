import React, { FC } from 'react';
import styles from './Header.module.scss';


const Header: FC = () => {
    return (
        <>
            <div className={`${styles.headerContainer} w-100`}>
                <div className={`${styles.heading}`}>FoodEX</div>
            </div>
        </>
    )
};

export default Header;