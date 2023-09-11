import { FaDiscord, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Footer(){

    const navigate = useNavigate()
    return (
        <div className="footer-main">
            <ul className="footer-pages">
                <li className="footer-pages-item">
                    faq
                </li>
                <li onClick={() => {
                    
                    window.open('https://discord.gg/NvDT5XXz','_blank')
                }} className="footer-pages-item">
                    Join the Community
                </li>

                <li onClick={ () => {
                    window.open('https://drive.google.com/drive/folders/1LHN0c6vyj5eYx4LmYs0UL3usBwiOZIK1','_blank')
                    // , 'rel=noopener noreferrer'
                }} className="footer-pages-item">
                    Last Event
                </li>
            </ul>

            <ul className="footer-pages">
                <li className="footer-pages-item">
                    <FaDiscord style={{color: "#6D6C74", fontSize: "3rem"}}/>
                </li>
                <li className="footer-pages-item">
                    <FaTwitter style={{color: "#6D6C74", fontSize: "3rem"}}/>
                </li> 
                <li className="footer-pages-item">
                    <FaWhatsapp style={{color: "#6D6C74", fontSize: "3rem"}}/>
                </li>              
            </ul>
        </div>
    )
}