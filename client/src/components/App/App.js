import React from 'react';
import './App.css';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Tagline } from '../Tagline/Tagline';
import { InformationBoxes } from '../InformationBoxes/InformationBoxes';
import { MoreInformation } from '../MoreInformation/MoreInformation';
import { Footer } from '../Footer/Footer';
import { YourProfile } from '../YourProfile/YourProfile';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import RoommateSearchPage from '../RoommateSearchPage/RoommateSearchPage';
import {NavigationBar as NavBar} from '../RoommateSearchPage/NavigationBar/NavigationBar';

const App = () => {
    return (
    <Router>
      <Routes>
        <Route exact path='/' element={
        <div className='page'>
          <NavigationBar />
          <Tagline />
          <InformationBoxes />
          <MoreInformation />
          <Footer />
        </div>}  />
        <Route path='/profile' element={<YourProfile />} />
        <Route path='/roommate-search' element={
        <div>
          <NavBar />
          <RoommateSearchPage />
        </div>
       } />
        
      </Routes>
    </Router>
    
    
  )
}

export default App
