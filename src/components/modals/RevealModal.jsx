import {LiaTimesSolid} from 'react-icons/lia';
import React, { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { AppContext } from '../../utils/context/AppContext';


export default function RevealModal(){
    const [rightPosition, setRightPosition] = useState({rightPosition:0, x: 10, y: 10, backdrop: 5, playbtn: 0})
    const {setIsModalOpen} = useContext(AppContext);

    useEffect(() => {
          gsap.to(".hive-container", {
              x: rightPosition.rightPosition+"%",
              duration: 0.4
            });

        gsap.to(".backdrop-image", {
            y: rightPosition.backdrop+"%",
            duration: 0.4
            });

        gsap.to(".play-text", {
            x: rightPosition.playbtn+"%",
            duration: 0.4
            });
      }, [rightPosition]);

    return (
        <section className="mother-modal">

            <section style={{backgroundPosition: `${rightPosition.x}% ${rightPosition.y}%`}} className="reveal-modal">

                <div className="hive-container">
                    <h3 className="hive-container-header">GAMEDEV HIVE</h3>
                    {/* <div className="hive-container-header-img-cont">
                        <img alt="" src="/images/main/write-up.png" />
                    </div> */}
                    <p className="hive-container-desc">"THE HIVE WHERE GAMES COME ALIVE"</p>
                    <img src="/images/main/gideon-pic.png" alt="" className="hive-container-image"/>
                </div>

                <section className="play-container">
                    
                    <div className="play-text">
                        <span className="presso">PRESS</span>
                        <span onClick={
                            () => {
                                var snd = new Audio("/sound/mouse-click.wav");
                                snd.play();
                                snd.currentTime=0;

                                setRightPosition({rightPosition:-100, x: 900, y: 600, backdrop: 300, playbtn:1000})
                                setTimeout(() => {
                                    setIsModalOpen((old) => ({...old, mother: false}))
                                    
                                }, 500)

                            }
                        } className="x-close"><LiaTimesSolid/></span>
                    </div>
                </section>
            </section>

            <div className="back-drop">
                <div className="backdrop-overlay"></div>
                <div className="backdrop-image-container">
                    <img src="/images/main/close-two.png" alt="" className="backdrop-image"/>
                </div>

            </div>
        </section>
    )
}