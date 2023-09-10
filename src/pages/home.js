import { useContext, useEffect, useRef } from "react";
import AboutComp from "../components/AboutComp";
import BannerHive from "../components/BannerHive";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Partnership from "../components/Partnership";
import RevealModal from "../components/modals/RevealModal";
import Navbar from "../components/navbar/NavBar";
import { AppContext } from "../utils/context/AppContext";
import Scroll, { Element } from 'react-scroll'
import { gsap } from "gsap";


export default function Home(){
    const {isModalOpen} = useContext(AppContext);
    const homeRef = useRef()
    useEffect(() => {
        const handleScroll = () => {
          console.log(window.scrollY);
        };
      
        // Attach the event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
      
        // Cleanup: remove the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [homeRef]);

      useEffect(() => {
        gsap.to(".mission-ab-image-container", {
          scale: 1.3,
          duration: 2,
          ease: "bounce",
          delay: 1,
          scrollTrigger: {
            trigger: ".mission-ab-image-container",
            scrub: true,
            start: "top center",
            end: "bottom 80px",
          }
        });

        // gsap.to(".navbar", {
        //     backgroundColor: "black",
        //     duration: 2,
        //     ease: "bounce",
        //     delay: 1,
        //     scrollTrigger: {
        //       trigger: ".mission-ab-image-container",
        //       scrub: true,
        //     }
        //   });
      }, []);

    const onScroll = () => {
        console.log(homeRef.current.scrollTop)
        console.log(window.scrollY, "YAET")
    }
    return (
        <div onScroll={onScroll} ref={homeRef} id="home" className="home">

            {isModalOpen.mother && <RevealModal />}
            <header className="header">
                <div className="header-overlay"></div>
                <section className="header-inner">
                    <Navbar />

                    <BannerHive/>

                </section>
            </header>
            <main className="main">
                <div className="main-inner">

                    <section id="about"  className="mission-ab-container">
                        <div className="mission-ab-container-inner">
                            {/* <Element name="about"> */}

                                <AboutComp/>
                            {/* </Element> */}
                            <Mission/>
                        </div>
                        <div className="mission-ab-image-container">
                            <div className="mission-ab-image-cont">
                                <img src="/images/main/one.png" className="mission-ab-image one" alt=""/>
                            </div>
                            <div className="mission-ab-image-cont">
                                <img src="/images/main/two.png" className="mission-ab-image two" alt=""/>
                            </div>
                            <div className="mission-ab-image-cont">
                                <img src="/images/main/three.png" className="mission-ab-image three
                                " alt=""/>
                            </div>
                        </div>
                    </section>

                    <Partnership id="partner"/>

                </div>
                
            </main>

            <footer className="footer">
                <div className="footer-inner">

                    <Footer/>
                </div>
            </footer>
        </div>
    )
}