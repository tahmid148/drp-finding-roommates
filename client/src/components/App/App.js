import React from 'react';
import './App.css';
import { NavigationBar } from '../NavigationBar/NavigationBar';
import { Tagline } from '../Tagline/Tagline';

export class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <NavigationBar />
        <Tagline />
      </div>
    );
  }
}
