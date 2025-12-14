import "./HeroSection.css";
import { Button } from "../Button/Button";
import Book from "../../assets/images/HeroImg/Book.png";
import DashLine from "../../assets/images/HeroImg/DashLine.png";
import CirclePeople from "../../assets/images/HeroImg/CirclePeople.png";
import DottedSquare from "../../assets/images/HeroImg/DottedSquare.png";
import RightImage from "../../assets/images/HeroImg/RightImage.png";
import ArrowRigth from "../../assets/Icons/HeaderIcons/ArrowRigth.svg?react";


export function HeroSection() {
    return (
       <section className="Hero">
        <div className="Hero__container">
            <div className="Hero-left">
                <span className="Hero__subtitle"> WELCOME EDUNITY ONLINE COURSES</span>
                <h1 className="hero__title">
                    Achieving Your Dreams <br/> Through Education
                </h1>
                <p className="Hero__description">We are experienced in Education plartform and skilled strategies for the sucess of online learning</p>

                <div className="hero__btn">
                    <Button variant="primary" size="lg" radius="rounded-md"     rounded={true} suffix={<ArrowRigth />}>
                        Find courses
                    </Button>
                </div>

                <div className="hero-avater">
                    <img src={Book} alt="" className="avater__book" />
                    <img src={DashLine} alt="" className="avater__dash" />

                </div>

            </div>
            <div className="hero-right">
                <img
                    src={DottedSquare}
                    alt=""
                    className="dotted-square"
                />
                <img
                    src={RightImage}
                    alt="Students learning"
                    className="hero__image"
                />

                <div className="hero__badge">
                    <div className="badge__text">
                        <p>
                            <strong>200+</strong>
                            <span>Instructor</span>
                        </p>
                    </div>
                    <div className="avatar-group">
                        <img src={CirclePeople} alt="" className="group__ppl" />
                    </div>

                </div>
            </div>
            

        </div>
       </section>
    )
}
