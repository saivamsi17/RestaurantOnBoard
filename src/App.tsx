import React, { FC } from 'react';
import styles from './App.module.scss';
import MainCardContainer from './MainCardContainer/MainCardContainer';
import Users from './Users/Users';
import {Routes , Route} from 'react-router-dom';

const App: FC = () => {
  return (
    <>
      <div className={`d-flex flex-row ${styles.bgContainer}`}>
        <Routes>
          <Route path='/' element={<MainCardContainer />} />
          <Route path='/accounts' element={<Users />} />
        </Routes>
      </div>
    </>
  ); 
} 

export default App;
