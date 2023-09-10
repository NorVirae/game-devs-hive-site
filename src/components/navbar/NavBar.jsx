import * as  Scroll from 'react-scroll'

export default function Navbar(){

    const scroller = Scroll.scroller

    return (
        <section className="navbar">
            <a className="nav-brand" href="/">
                <img src="/images/main/logo.png" className="nav-brand-img" alt="brand"/>
            </a>

            <ul className="nav">
                <Scroll.Link duration={500} smooth={true} offset={50} to = "home">
                    <li className="nav-item nav-active"><span className="nav-link">Home</span>
                    </li>
                </Scroll.Link>

                <Scroll.Link duration={500} smooth={true} offset={50} to = "about">
                    <li className="nav-item "><span className="nav-link">About</span>
                    </li>
                </Scroll.Link>

                <Scroll.Link duration={500} smooth={true} offset={50} to = "partner">
                    <li className="nav-item "><span className="nav-link">Partnership</span>
                    </li>
                </Scroll.Link>
                
                <li className="nav-item btn-join">
                    <span className="nav-link">Join Community</span>
                </li>

            </ul>
        </section>
    )
}