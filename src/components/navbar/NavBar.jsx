

export default function Navbar(){
    return (
        <section className="navbar">
            <a className="nav-brand" href="/">
                <img src="/images/main/logo.png" className="nav-brand-img" alt="brand"/>
            </a>

            <ul className="nav">
                <li className="nav-item nav-active"><a className="nav-link" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="">About</a></li>
                <li className="nav-item"><a className="nav-link" href="">Membership</a></li>
                <li className="nav-item btn-join">
                    <a className="nav-link" href="">Join Community</a>
                </li>

            </ul>
        </section>
    )
}