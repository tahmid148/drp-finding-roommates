import React from 'react';
import './App.css';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Tagline } from '../Tagline/Tagline';
import { Buttons } from '../Buttons/Buttons';
import { InformationBoxes } from '../InformationBoxes/InformationBoxes';
import { MoreInformation } from '../MoreInformation/MoreInformation';

export class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <NavigationBar />
        <Tagline />
        <Buttons />
        <InformationBoxes />
        <MoreInformation />
      </div>
    );
  }
}
