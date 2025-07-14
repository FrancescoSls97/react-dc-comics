export default function Header () {
    return (
    <header>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container p-2rem">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="../../public/img/dc-logo.png" alt="DC_logo" width="100" height="100"/>
                </a>
            <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link " href="#">CHARACTERS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="#">COMICS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">MOVIES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">TV</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">GAMES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">COLLECTIBLES</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">VIDEOS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">FANS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">NEWS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">SHOP</a>
                        </li>
                    </ul>
                 </div>
            </div>
        </nav>
    </header>        
    )
}