import "./InstructorSection.css"

import {Button} from "../../Components/Button/Button.jsx"
// import {Card} from "../../Components/Card/Card.jsx"
import InstructorImg1 from "../../assets/images/InstructorSector/InstructorImg1.png"
import InstructorImg2 from "../../assets/images/InstructorSector/InstructorImg2.png"
import InstructorImg3 from "../../assets/images/InstructorSector/InstructorImg3.png"
import InstructorImg4 from "../../assets/images/InstructorSector/InstructorImg4.png"
import ArrowPurple from "../../assets/images/InstructorSector/ArrowPurple.svg?react"
import Share from "../../assets/images/InstructorSector/Share.svg?react"
import ArrowRigth from "../../assets/Icons/HeaderIcons/ArrowRigth.svg?react"

// import ShareIcon from "../../assets/icons/Share.svg?react";

export const instructors = [
  {
    id: 1,
    name: "Esther Howard",
    role: "Junior Instructor",
    image: InstructorImg1,
    icon: <Share/>,
  },
  {
    id: 2,
    name: "Beverly Hathcock",
    role: "Junior Instructor",
    image: InstructorImg2,
    icon: <Share/>,
  },
  {
    id: 3,
    name: "Donald Gonzales",
    role: "Junior Instructor",
    image: InstructorImg3,
    icon: <Share/>,
  },
  {
    id: 4,
    name: "Eddie Lenz",
    role: "Junior Instructor",
    image: InstructorImg4,
    icon: <Share/>,
  },
];

export default function InstructorSection(){
    return(
        <section className="instructor">
            <div className="instructor-container">
                <div className="instructor__left">
                    <div className="purple-tag">
                        <span>Our Instructor</span>
                    </div>
                    <h2 className="left__title">Meet Our Expert <br/>Instructor</h2>
                    <p className="left__description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris..
                    </p>
                    <div className="left__btn">
                        <div className="btn-post">
                            <Button variant="primary" size="lg" radius="rounded-md" rounded={true} suffix={<ArrowRigth/>}>
                                Contact Us
                            </Button>
                        </div>
                        <div className="btn-post">
                            <Button variant="blue" size="lg" radius="rounded-md" rounded={true} suffix={<ArrowRigth/>}>
                                Find Us
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="instructor__right">
                    {instructors.map((item)=>(
                        <div key={item.id} className="instructor-card">
                            <img
                            src={item.image}
                            alt={item.name}
                            className="instructor-images"/>

                            <Share className="instructor-show" />

                            <div className="instructor-card-btn">
                                <Button variant="default" size="lg"rounded={true} suffix={<div className="rounded-transPurple"><ArrowPurple /></div>}>
                                   <div className="instructor-btn-text">
                                        <span className="instructor-btn-name">{item.name}</span>
                                        <span className="instructor-btn-role">{item.role}</span>
                                </div>
                                </Button>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
            

        </section>
    )
}