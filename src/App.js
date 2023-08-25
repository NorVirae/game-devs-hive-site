import logo from './logo.svg';
import './App.css';
import Folder from './components/Folder';
import { useState } from 'react';

function App() {
  const [daysRaw, setDaysRaws] = useState("22.34565767688")
  return (
    <div className="App">
      <section className='schedule-container'>
        <h3>schedule</h3>

        <ul className='schedule'>
          <li className='schedule-item'>aug 24 - getting devs ready</li>
          <li className='schedule-item'>aug 24 - getting devs ready</li>
          <li className='schedule-item'>aug 24 - getting devs ready</li>
        </ul>

        <a href='#' className='seasons-link'>add season calender</a>
      </section>

      <section className='demo-count-down'>
        <div className='general-time-bar-container'>
          <div className='days-countdown'>
            <span className='days-span'>
              {daysRaw.split(".")[0]}
            </span>.
            <span>
              {daysRaw.split(".")[1].slice(0,6)}
            </span>
          </div>
          <div className='demo-desc'>
            days till demo day
          </div>
          <div className='demo-desc-timer'>
            <span>gdh update due in</span> <div>4d 1h 59m 29s</div>
          </div>
        </div>

        <div className='updates-container'>
          <Folder name={"Week 3"} type={"week"}/>
          <Folder name={"gdh update"} type={"update"}/>

        </div>
      </section>

      <section className='folders'>
          <Folder name={"recordings"} type={"record"}/>
          <Folder name={"archive"} type={"archive"}/>
      </section>
    </div>
  );
}

export default App;
