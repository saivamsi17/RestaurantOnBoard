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
  console.log(userData);


  return (
    <div className={`${styles.mainCard}`}>
      <div>
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