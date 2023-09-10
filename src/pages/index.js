import { useContext } from "react";
import { AppContext } from "../utils/context/AppContext";
import PopModal from "../components/modals/PopModal";
import CountdownTimer from "../components/timer/CountdownTimer";
import Folder from "../components/Folder";

export default function Index(){
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = new Date(2023, 11, 31).getTime() - Date.now() / 1000;

    const {isModalOpen} = useContext(AppContext);
    const {setIsModalOpen} = useContext(AppContext);
    return (
        <div className="App">
      {isModalOpen.main && 
          <PopModal/>
        }
      <section className='schedule-container'>
        <h3 style={{visibility:"hidden"}}>schedule</h3>

        <ul style={{visibility:"hidden"}} className='schedule'>
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

        <a style={{visibility:"hidden"}} href='https://calendar.app.google/1MxNhzUkniZnM3788' className='seasons-link'>add season calender</a>
      </section>

      <CountdownTimer targetDate={dateTimeAfterThreeDays}/>

      <section style={{visibility:"hidden"}} className='folders'>
          <Folder  onClick={() => {
            setIsModalOpen((old) => ({...old, main: true}))
          }} name={"recordings"} type={"record"}/>
          <Folder name={"archive"} type={"archive"}/>
      </section>
    </div>
    )
}