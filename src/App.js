import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';
import { useEffect, useState } from 'react';
import { useCountdown } from './hooks/UseCountdown';
import CountdownTimer from './components/timer/CountdownTimer';

function App() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;
  return (
    <div className="App">
      <section className='schedule-container'>
        <h3>schedule</h3>

        <ul className='schedule'>
          <li className='schedule-item '>
            <span className='schedule-item-in achieved'>aug 24 - getting devs ready</span>
            <span className='schedule-item-silenced'>in archive</span>

          </li>
          <li className='schedule-item'>
            <span className='schedule-item-in'>sept 07 - get submissions ready</span>
            <span className='schedule-item-silenced'>in records</span>

          </li>
          <li className='schedule-item'>
            <span className='schedule-item-in'>sept 16 - Submit</span>
            <span className='schedule-item-silenced'>in africa</span>

          </li>
        </ul>

        <a href='https://calendar.app.google/1MxNhzUkniZnM3788' className='seasons-link'>add season calender</a>
      </section>

      <CountdownTimer targetDate={dateTimeAfterThreeDays}/>

      <section className='folders'>
          <Folder name={"recordings"} type={"record"}/>
          <Folder name={"archive"} type={"archive"}/>
      </section>
    </div>
  );
}

export default App;
