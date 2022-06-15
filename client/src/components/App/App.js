import React from 'react';
import './App.css';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Tagline } from '../Tagline/Tagline';
import { Buttons } from '../Buttons/Buttons';
import { InformationBoxes } from '../InformationBoxes/InformationBoxes';
import { MoreInformation } from '../MoreInformation/MoreInformation';
import { Footer } from '../Footer/Footer';
import { YourProfile } from '../YourProfile/YourProfile';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Routes>
          <Route exact path='/' element={
          <div className='page'>
            <NavigationBar />
            <Tagline />
            <Buttons />
            <InformationBoxes />
            <MoreInformation />
            <Footer />
          </div>}  />
          <Route path='/profile' element={<YourProfile />} />
          
        </Routes>
      </Router>
      
      
    );
  }
}
