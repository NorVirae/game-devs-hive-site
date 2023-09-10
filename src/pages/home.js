import AboutComp from "../components/AboutComp";
import BannerHive from "../components/BannerHive";
import Footer from "../components/Footer";
import Mission from "../components/Mission";
import Partnership from "../components/Partnership";
import Navbar from "../components/navbar/NavBar";


export default function Home(){
    return (
        <div className="home">
            <RevealModal />
            <header className="header">
                <div className="header-overlay"></div>
                <section className="header-inner">

                    <Navbar />
                    <BannerHive/>

                </section>
            </header>
            <main className="main">
                <div className="main-inner">

                    <section className="mission-ab-container">
                        <div className="mission-ab-container-inner">
                            <AboutComp/>
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