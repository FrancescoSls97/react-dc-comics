export default function Header () {
    return (
    <header className="bg-white">
       <div className="container">
         <nav className="navbar navbar-expand-lg p-3 ">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="../../public/img/dc-logo.png" alt="DC_logo" width="120" height="120"/>
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
        </nav>
       </div>
    </header>        
    )
}