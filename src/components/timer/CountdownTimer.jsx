import { useEffect, useState } from "react";
import { useCountdown } from "../../hooks/UseCountdown";
import Folder from "../Folder";
import ExpiredNotice from "../expired/ExpiredNotice";
const CountdownTimer = ({targetDate}) => {
    const [days, hours, minutes, seconds, milliSeconds] = useCountdown(targetDate);
    const [daysRaw, setDaysRaws] = useState("22.34565767688")
    const countDownDate = new Date(targetDate).getTime();

    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    );

    useEffect(() => {
        const days = countDown / (1000 * 60 * 60 * 24);
        setDaysRaws(days.toString())
    },[countDownDate])

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } 
    else {
        return (
            <section className='demo-count-down'>
                <div className='general-time-bar-container'>
                    <div className='days-countdown'>
                        <span className='days-span'>
                            {days}
                        </span>.
                        <span className="days-span-mini">
                            <span>{hours}</span>
                            <span>{minutes< 10? "0"+minutes: minutes}</span>
                            <span>{seconds< 10? "0"+seconds: seconds}</span>
                            <span>{milliSeconds< 10 ?"0"+milliSeconds.toString().slice(0,2):milliSeconds.toString().slice(0,2)}</span>
                        </span>
                    </div>
                    <div className='demo-desc'>
                        days till demo day
                    </div>
                    <div className='demo-desc-timer'>
                        <span>gdh update due in</span> <div>{days}d {hours}h {minutes}m {seconds< 10? "0"+seconds: seconds}s</div>
                    </div>
                </div>
        
                {/* <div style={{visibility:"hidden"}} className='updates-container'>
                    <Folder name={"Week 3"} type={"week"}/>
                    <Folder name={"gdh update"} type={"update"}/>
        
                </div> */}
            </section>
        );
    }
        
}

export default CountdownTimer;