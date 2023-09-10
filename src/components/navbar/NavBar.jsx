import * as  Scroll from 'react-scroll'

export default function Navbar(){

    const scroller = Scroll.scroller

    return (
        <section className="navbar">
            <a className="nav-brand" href="/">
                <img src="/images/main/logo.png" className="nav-brand-img" alt="brand"/>
            </a>

            <ul className="nav">
                <li onClick={()=> {
                    scroller.scrollTo("#home",
                    {
                        duration: 1500,
                        delay: 100,
                        smooth: true,
                        containerId: 'about',
                        offset: 50, // Scrolls to element + 50 pixels down the page
                    } )
                }} className="nav-item nav-active"><span className="nav-link">Home</span></li>
                <li className="nav-item"><span className="nav-link">About</span></li>
                <li className="nav-item"><span className="nav-link">Membership</span></li>
                <li className="nav-item btn-join">
                    <span className="nav-link">Join Community</span>
                </li>

            </ul>
        </section>
    )
}