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
      {/* <h2><FcShipped /></h2> */}
      <span className='d-flex flex-start'>{restaurantName}</span>
      <span>{ContactName}</span>
      <span>{location}</span>
      <span>{phone}</span>
    </div>
  );
};

export default UserData;