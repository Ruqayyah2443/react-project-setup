import './PageHeader.css'
export  const PageNavigation = ()=>{
    return(
        <nav className="nav">
            <div className="nav__logo">
                <img src="/logo.png" alt="" />
            </div>
            <ul className="nav__menu">
                <li><a href=""> Home</a></li>
                <li><a href="">About Us</a></li>
                <li><a href="">Courses</a></li>
                <li><a href="">Pages</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">Contact</a></li>
            </ul>
            <div className="nav__action">
                <button>Create Account</button>
            </div>
        </nav>
    )
}