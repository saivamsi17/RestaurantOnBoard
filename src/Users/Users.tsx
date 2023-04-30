import React, { FC, useEffect, useState } from 'react';
import UserData from '../UserData/UserData';
import styles from './Users.module.scss';

interface userDataType {
  restaurantName: string,
  ContactName: string,
  pincode: string,
  location: string,
  website: string,
  phone: string,
  transactions: string,
}
const Users: FC = () => {
  const [userData, setUserData] = useState<userDataType[]>([]);
  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch('http://localhost:4000/userData')
      .then(response => response.json()) 
      .then(data => {
        setUserData(data);
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div className={`${styles.mainCard}`}>
      <div>
        <div className={`${styles.headers}`}>
        <span className={`${styles.data}`}>Restaurant</span>
        <span className={`${styles.data}`}>Owner</span>
        <span className={`${styles.data}`}>Location</span>
        <span className={`${styles.data}`}>Contact</span>
        </div>
        {userData.map((ele) => (
          <UserData
            restaurantName={ele.restaurantName}
            ContactName={ele.ContactName}
            location={ele.location}
            phone={ele.phone}
          />
        ))}
      </div>
    </div>
  )
};

export default Users;