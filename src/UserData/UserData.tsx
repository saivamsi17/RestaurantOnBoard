import React , {FC} from 'react';
import styles from '../Users/Users.module.scss';
import {FcShipped} from 'react-icons/fc'

type userDataProps = {
  restaurantName?: string;
  ContactName?: string;
  location?: String;
  phone?: string;
}

const UserData: FC<userDataProps> = ({
  restaurantName,
  ContactName,
  location,
  phone,
}) => {
  return (
    <div className={` ${styles.customer}`}>
      <span className={`${styles.data}`}>{restaurantName?.toLocaleUpperCase()}</span>
      <span className={`${styles.data}`}>{ContactName}</span>
      <span className={`${styles.data}`}>{location}</span>
      <span className={`${styles.data}`}>{phone}</span>
    </div>
  );
};

export default UserData;