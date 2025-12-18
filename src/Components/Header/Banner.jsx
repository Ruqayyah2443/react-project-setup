import './PageHeader.css'
import FacebookIcon from "../../assets/Icons/HeaderIcons/FacebookIcon.svg?react"
import InstagramIcon from "../../assets/Icons/HeaderIcons/InstagramIcon.svg?react"
import LinkdinIcon from "../../assets/Icons/HeaderIcons/LinkdinIcon.svg?react"
import YoutubeIcon from "../../assets/Icons/HeaderIcons/YoutubeIcon.svg?react"
import PhoneContact from "../../assets/Icons/HeaderIcons/PhoneContact.svg?react"
import MailContact from "../../assets/Icons/HeaderIcons/MailContact.svg?react"
import AddressIcon from "../../assets/Icons/HeaderIcons/AddressIcon.svg?react"
export const PageBanner = () => {
    return (
        <section className="banner ">
            {/* <div className="page__container"> */}
                <ul className="banner__contact">
                    <li>
                        <PhoneContact/>
                        <span>(00) 875 784 5682</span>
                    </li>
                    <li>
                        <MailContact/>
                        <span>pacargoinfo@gmail.com</span>
                    </li>
                    <li>
                        
                        <AddressIcon/>
                        <span>238, Arimantab, Moska - USA.</span>
                    </li>
                </ul>

                <ul className="banner__social">
                    <li>
                        <FacebookIcon/>
                    </li>
                    <li>
                        <InstagramIcon/>
                    </li>
                    <li>
                        <LinkdinIcon/>
                    </li>
                    <li>
                        <YoutubeIcon/>
                    </li>
                    
                </ul>
            {/* </div> */}
            
               
        </section>
    )
}