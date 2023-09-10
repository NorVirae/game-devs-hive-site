import { useContext } from "react";
import AboutComp from "../components/AboutComp";
import BannerHive from "../components/BannerHive";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Partnership from "../components/Partnership";
import RevealModal from "../components/modals/RevealModal";
import Navbar from "../components/navbar/NavBar";
import { AppContext } from "../utils/context/AppContext";
import Scroll, { Element } from 'react-scroll'


export default function Home(){
    const {isModalOpen} = useContext(AppContext);
    return (
        <div name="home" className="home">
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

                    <section id="about" name="about" className="mission-ab-container">
                        <div className="mission-ab-container-inner">
                            <Element name="about">

                                <AboutComp/>
                            </Element>
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
                    <Partnership/>

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