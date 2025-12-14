import './PageHeader.css'
import {Button} from "../Button/Button.jsx"
import ArrowRigth from "../../assets/Icons/HeaderIcons/ArrowRigth.svg?react"
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
            {/* <div className="nav__action">
                <Button variant="primary" size="sm" rounded="rounded" suffix={<ArrowRigth/>} radius="rounded-md">{"Create Account"}</Button>
            </div> */}

            <div className="nav__action">
                <Button
                    variant="primary"       
                    size="lg"               
                    radius="rounded-md"     
                    rounded={true}          
                    suffix={<ArrowRigth />}
                >
                    Create Account
                </Button>
            </div>


            
        </nav>
    )
}