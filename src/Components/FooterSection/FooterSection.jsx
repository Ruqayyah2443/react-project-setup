import "./FooterSection.css"
import image1 from "../../assets/images/FooterSection/image1.png"
import image2 from "../../assets/images/FooterSection/image2.png"
import image3 from "../../assets/images/FooterSection/image3.png"
import image4 from "../../assets/images/FooterSection/image4.png"
import image5 from "../../assets/images/FooterSection/image5.png"
import image6 from "../../assets/images/FooterSection/image6.png"
import Brand from "../../assets/images/FooterSection/Brand.png"
import Facebook from "../../assets/images/FooterSection/Facebook.svg?react"
import Instagram from "../../assets/images/FooterSection/Instagram.svg?react"
import PinInterest from "../../assets/images/FooterSection/PinInterest.svg?react"
import Twitter from "../../assets/images/FooterSection/Twitter.svg?react"
import ArrowShort from "../../assets/images/FooterSection/ArrowShort.svg?react"


const services = [
  "Web Development",
  "UI/UX Design",
  "Management",
  "Digital Marketing",
  "Blog News",
];

const quickLinks = [
  "Templates",
  "Blog and Article",
  "Integrations",
  "Webinars",
  "Privacy & Policy",
];
const gallery = [
   image1,
  image2,
  image3,
  image4,
  image5,
  image6,
];
export function FooterSection() {
  return (
    <>
      <footer className="footer">
        {/* <div className="page__container"> */}
          <div className="footer__brand">
              <img src={Brand} alt="" />
            <p>
                Interdum velit laoreet id donec ultrices
                tincidunt arcu. Tincidunt tortor aliquam nulla
                facilisi cras fermentum odio eu.
            </p>
            <div className="footer__socials">
                <span><Facebook/></span>
                <span><Instagram/></span>
                <span><PinInterest/></span>
                <span><Twitter/></span>
            </div>
          </div>
            

            <div className="footer__column">
                <h4>Our Services</h4>
                <ul>
                    {services.map((item, index) =>(
                      <li key={index}><ArrowShort/>{item}</li>  
                    ))}
                </ul>
            </div>
            <div className="footer__column">
                <h4>Quick Links</h4>
                <ul>
                    {quickLinks.map((item, index) =>(
                      <li key={index}><ArrowShort/>{item}</li>  
                    ))}
                </ul>
            </div>
            <div className="footer__gallery">
                <h4>Gallary</h4>
                <ul>
                  {gallery.map((src, index) => (
                    <li key={index}>
                      <img src={src} alt="" />
                    </li>
                  ))}
                </ul>

                {/* <ul>
                    {gallery.map((item, index) =>(
                      <li key={index}>{item}</li>  
                    ))}
                </ul> */}
            </div>
            

        {/* </div> */}
      </footer>
      <div className="footer__bottom">
        <p>Copyright © 2024 <span>edunity</span>|| All Rights Reserved</p>
      </div>
      
    </>
  );
}
