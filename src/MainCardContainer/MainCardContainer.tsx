import React, { FC, useState } from 'react';
import ChangesSavedModal from '../ChangesSavedModal/ChangesSavedModal';
import Loader from '../Loader/Loader';
import styles from './MainCardContainer.module.scss';

const MainCardContainer: FC = () => {
  const [customerData, setCustomerData] = useState({
    restaurantName: '',
    ContactName: '',
    pincode: '',
    location: '',
    website: '',
    phone: '',
    transactions: ''
  })

  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = (e:boolean) => setShow(e);
 

  const handleSubmit = (event: any) => {
    event.preventDefault();
    setLoading(true);
    fetch('http://localhost:4000/api/my-endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customerData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setLoading(false);
        setLoaded(true);
        setShow(true)
        return response.json();
      })
      .catch(error => {
        setLoading(false);
        console.error('There was an error making the POST request:', error);
      });
  };


  return (
    <>
    <div className={`${styles.mainCard}`}>
      <div className={`${styles.leftDiv}`}></div>
      <div className={`${styles.formData}`}>
      {loading ? <Loader /> : 
      <>
      <div className={` d-flex flex-row ${styles.heading}`}><b>Join our team</b></div>
      <div className={`${styles.formDetails}`}>
        <div className={`${styles.formInput}`}>
          Restaurant Name
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            restaurantName: e.target.value
          })}></input>
        </div>
        <div className={`${styles.formInput}`}>
          Contact Name
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            ContactName: e.target.value
          })}></input>
        </div>
        <div className={`${styles.formInput}`}>
          Pincode
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            pincode: e.target.value
          })}></input>
        </div>
        <div className={`${styles.formInput}`}>
          Location
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            location: e.target.value
          })}></input>
        </div>
        <div className={`${styles.formInput}`}>
          Website
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            website: e.target.value
          })}></input>
        </div>
        <div className={`${styles.formInput}`}>
          Phone number
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            phone: e.target.value
          })}></input>
        </div>
        <div className={`${styles.formInput}`}>
          Average Daily Transactions
          <input type='text' onChange={(e) => setCustomerData({
            ...customerData,
            transactions: e.target.value
          })}></input>
        </div>
      </div>
      <div className={`${styles.submitButton}`}>
        <button type="button" className={`btn btn-primary`} onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
      </>
    }
      </div>
    </div>
    {loaded && <ChangesSavedModal show={show} handleShow={handleShow} />}
    </>
  );
};

export default MainCardContainer;
