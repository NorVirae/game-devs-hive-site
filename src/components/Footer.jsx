import GameDevFooterIntro from "./GameDevFooterIntro";

export default function Footer(){
    return (
        <div className="footer-main">
            <GameDevFooterIntro/>
            <ul className="footer-pages">
                <li className="footer-pages-item head">
                    Pages
                </li>
                <li className="footer-pages-item">
                    Home
                </li>

                <li className="footer-pages-item">
                    About
                </li>

                <li className="footer-pages-item">
                    Membership
                </li>
            </ul>


            <ul className="footer-pages">
                <li className="footer-pages-item head">
                    Company
                </li>
                <li className="footer-pages-item">
                    About Us
                </li>

                <li className="footer-pages-item">
                    Mission
                </li>

                <li className="footer-pages-item">
                    Partnership
                </li>
            </ul>

            <ul className="footer-pages">
                <li className="footer-pages-item head">
                    Support
                </li>
                <li className="footer-pages-item">
                    FAQs
                </li>

                <li className="footer-pages-item">
                    Privacy policy
                </li>

                <li className="footer-pages-item">
                    Help
                </li>

                
            </ul>


            <ul className="footer-pages">
                <li className="footer-pages-item head">
                    Contact Us
                </li>
                <li className="footer-pages-item">
                    Email: info@gamedevhive.com
                </li>                
            </ul>
        </div>
    )
}