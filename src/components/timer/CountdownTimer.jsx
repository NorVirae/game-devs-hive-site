import { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/UseCountdown";
import Folder from "../Folder";
const CountdownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);
    const [daysRaw, setDaysRaws] = useState("22.34565767688")
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const days = countDown / (1000 * 60 * 60 * 24);
        setDaysRaws(days)
    },[])
    return (
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
            <span>gdh update due in</span> <div>{days}d {hours}h {minutes}m {seconds}s</div>
          </div>
        </div>

        <div className='updates-container'>
          <Folder name={"Week 3"} type={"week"}/>
          <Folder name={"gdh update"} type={"update"}/>

        </div>
      </section>
    )
}

export default CountdownTimer;