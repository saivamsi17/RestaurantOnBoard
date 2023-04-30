import React, { FC, useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import styles from './MainCardContainer.module.scss';
import Swal from 'sweetalert2'

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
  const [clicked, setClicked] = useState(false);
  const [isError, setIsError] = useState({
    restaurantName: false,
    ContactName: false,
    pincode: false,
    location: false,
    website: false,
    phone: false,
    transactions: false
  });

  //validation of data as soon users updates a field
  useEffect(() => {
    clicked && (
      setIsError({
        ...isError,
        restaurantName: customerData.restaurantName.length < 1,
        ContactName: customerData.ContactName.length < 1,
        pincode: customerData.pincode.length !== 6,
        location: customerData.location.length < 1,
        phone: customerData.phone.length !== 10,
        transactions: customerData.transactions.length < 1
      }))
  }, [customerData, clicked]);

  //validation of data and making POST call to backend on click of submit button
  const formValidation = (event: any) => {
    setClicked(true);
    if (customerData.restaurantName &&
      customerData.ContactName &&
      customerData.pincode.length === 6 &&
      customerData.location &&
      customerData.phone.length === 10 &&
      customerData.transactions) {
      handleSubmit(event);
    }
  }

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
        //when users gets added successfully we can fire the swal to UI to show user data is saved
        Swal.fire({
          title: 'Eureka!',
          text: 'you have succeesfully added as a client',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
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
        <div className={`${styles.leftDiv}`}>
          <img src='/images.png' height='200px' width='200px' />
        </div>
        <div className={`${styles.formData}`}>
          {loading ? <Loader /> :
            <>
              <div className={` d-flex flex-row ${styles.heading}`}><b>Join our team</b></div>
              <form>
                <div className={`${styles.formDetails}`}>
                  <div className={`${styles.formInput}`}>
                    Restaurant Name
                    <input type='text' onChange={(e) => setCustomerData({
                      ...customerData,
                      restaurantName: e.target.value
                    })}></input>
                    {isError.restaurantName && <div className={`${styles.errorMessage}`}>Please enter your Restaurant name</div>}
                  </div>
                  <div className={`${styles.formInput}`}>
                    Contact Name
                    <input type='text' onChange={(e) => setCustomerData({
                      ...customerData,
                      ContactName: e.target.value
                    })}></input>
                    {isError.ContactName && <div className={`${styles.errorMessage}`}>Please enter your name</div>}
                  </div>
                  <div className={`${styles.formInput}`}>
                    Pincode
                    <input type='number' onChange={(e) => setCustomerData({
                      ...customerData,
                      pincode: e.target.value
                    })}></input>
                    {isError.pincode && <div className={`${styles.errorMessage}`}>Please enter a valid pincode</div>}

                  </div>
                  <div className={`${styles.formInput}`}>
                    Location
                    <input type='text' onChange={(e) => setCustomerData({
                      ...customerData,
                      location: e.target.value
                    })}></input>
                    {isError.location && <div className={`${styles.errorMessage}`}>Please enter your location</div>}

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
                    <input type='number' onChange={(e) => setCustomerData({
                      ...customerData,
                      phone: e.target.value
                    })}></input>
                    {isError.phone && <div className={`${styles.errorMessage}`}>Please enter valid phonenumber</div>}

                  </div>
                  <div className={`${styles.formInput}`}>
                    Average Daily Transactions
                    <input type='number' onChange={(e) => setCustomerData({
                      ...customerData,
                      transactions: e.target.value
                    })}></input>
                    {isError.transactions && <div className={`${styles.errorMessage}`}>Please enter your daily transactions</div>}

                  </div>
                </div>
              </form>
              <div className={`${styles.submitButton}`}>
                <button type="button" className={`btn btn-primary`} onClick={(e) => formValidation(e)}>Submit</button>
              </div>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default MainCardContainer;
