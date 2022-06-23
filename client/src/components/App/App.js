import React, { useState } from 'react';
import './App.css';
import Tagline from '../Tagline/Tagline';
import InformationBoxes from '../InformationBoxes/InformationBoxes';
import MoreInformation from '../MoreInformation/MoreInformation';
import { Footer } from '../Footer/Footer';
import { YourProfile } from '../YourProfile/YourProfile';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import RoommateSearchPage from '../RoommateSearchPage/RoommateSearchPage';
import ExampleProfile1 from '../ExampleProfile1/ExampleProfile1';
import {NavigationBar as NavBar} from '../RoommateSearchPage/NavigationBar/NavigationBar';

const App = () => {
  const [colorMode, switchMode] = useState(true)
  const backgroundColor = colorMode ? '#fff' : '#264653'

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
        <div className='page' style={{
          "backgroundColor": backgroundColor,
          "transition": "background 0.8s",
          "minHeight": "300vh"
        }}>
          <nav className='navbar'>
            <p className='homeButton'>Roomb</p>
            <p className='login'>Login</p>
            <button onClick={() => switchMode(!colorMode)} className='switch-mode'>switch light mode</button>
          </nav>
          <Tagline colorMode={colorMode} />
          <InformationBoxes colorMode={colorMode}/>
          <MoreInformation />
          <Footer />
        </div>}  />
        <Route path='/profile' element={<YourProfile />} />
        <Route path='/example-profile1' element={<ExampleProfile1 />} />
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
