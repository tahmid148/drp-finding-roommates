import React from 'react';
import './App.css';
import { NavigationBar } from '../NavigationBar/NavigationBar';

export class App extends React.Component {
  render() {
    return (
      <div className='page'>
        <NavigationBar />
      </div>
    );
  }
}
