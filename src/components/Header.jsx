const navlinks = [
    { name: 'CHARACTERS', href: '#' },
    { name: 'COMICS', href: '#', active: true },
    { name: 'MOVIES', href: '#' },
    { name: 'TV', href: '#' },
    { name: 'GAMES', href: '#' },
    { name: 'COLLECTIBLES', href: '#' },
    { name: 'VIDEOS', href: '#' },
    { name: 'FANS', href: '#' },
    { name: 'NEWS', href: '#' },
    { name: 'SHOP', href: '#' }
];

export default function Header () {
    return (
    <header className="bg-white">
        <div className="container">
            <nav className="navbar navbar-expand-lg p-3 d-flex justify-content-between">
                <a className="navbar-brand" href="#">
                    <img className="logo" src="../../public/img/dc-logo.png" alt="DC_logo" width="120" height="120"/>
                </a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {navlinks.map((link, index) => (
                            <li className={`nav-item ${link.active ? 'active' : ''}`} key={index}>
                                <a className="nav-link text-dark" href={link.href}>{link.name}</a>
                            </li>
                        ))}
                        </ul>
                </div>
            </nav>
        </div>     
    </header>        
    )
}