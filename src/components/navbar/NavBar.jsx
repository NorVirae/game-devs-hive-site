import { useMediaQuery } from 'react-responsive'
import * as  Scroll from 'react-scroll'

export default function Navbar(){

    const scroller = Scroll.scroller
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })

    return (
        <section className="navbar">
            <div className='navbar-inner'>

                <a className="nav-brand" href="/">
                    <img src="/images/main/Logo.png" className="nav-brand-img" alt="brand"/>
                </a>

                {!isTabletOrMobile && 
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
                    
                    <li onClick={() => {
                            window.open('https://discord.gg/NvDT5XXz','_blank')
                        }} className="nav-item btn-join">
                        <span className="nav-link">Join Community</span>
                    </li>

                </ul>
                }
            </div>
        </section>
    )
}