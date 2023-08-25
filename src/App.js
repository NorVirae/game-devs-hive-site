import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';
import { useEffect, useState } from 'react';
import { useCountdown } from './hooks/UseCountdown';

function App() {
 
  return (
    <div className="App">
      <section className='schedule-container'>
        <h3>schedule</h3>

        <ul className='schedule'>
          <li className='schedule-item'>aug 24 - getting devs ready</li>
          <li className='schedule-item'>sept 07 - get submissions ready
          </li>
          <li className='schedule-item'>sept 16 - Submit</li>
        </ul>

        <a href='#' className='seasons-link'>add season calender</a>
      </section>

      <CountdownTimer/>

      <section className='folders'>
          <Folder name={"recordings"} type={"record"}/>
          <Folder name={"archive"} type={"archive"}/>
      </section>
    </div>
  );
}

export default App;
