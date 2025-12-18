import "./AboutSection.css"
import { Button } from "../Button/Button.jsx"
import DottedSquare from "../../assets/images/HeroImg/DottedSquare.png";
import GirlImg from "../../assets/images/AboutSection/GirlImg.png"
import HouseImg from "../../assets/images/AboutSection/HouseImg.png"
import MainImg from "../../assets/images/AboutSection/MainImg.png"
import ArrowRigth from "../../assets/Icons/HeaderIcons/ArrowRigth.svg?react";

export function AboutSection() {
    return (
        <section className="about">
            {/* <div className="about__container"> */}
                <div className="about__images">
                    <div className="top-images">
                        <img src={GirlImg} alt="" className="image__girl" />
                    <div className="position">
                        <img src={HouseImg} alt="" className="image__house" />
                    <img src={DottedSquare} alt="" className="dotted__square" />
                    </div>
                    
                    </div>
                   
                    <div className="experience">
                        <h2>8+</h2>
                        <p>Years Of<br />Experiences</p>
                    </div>
                    <img src={MainImg} alt="" className="image__main" />
                </div>

                <div className="about__content">
                    <span className="badge">OUR ABOUT US</span>
                    <h1>
                        Learn & Grow Your Skills <br />
                        From Anywhere
                    </h1>
                    <p className="description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris..
                    </p>

                    <div className="features">
                        <div>
                            <h4>Flexible Classnames</h4>
                            <p>
                                Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.
                            </p>
                        </div>

                        <div>
                            <h4>Flexible Classnames</h4>
                            <p>
                                Suspendisse ultrice gravida dictum
                                fusce placerat ultricies integer quis
                                auctor elit sed vulputate mi sit.
                            </p>
                        </div>

                    </div>
                    <div className="btn">
                        <Button variant="primary" size="lg" radius="rounded-md" rounded={true} suffix={<ArrowRigth />}>
                            Load 
                        </Button>
                    </div>
                </div>
            {/* </div> */}
        </section>
    )

}