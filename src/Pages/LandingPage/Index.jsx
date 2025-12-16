import { PageHeader } from "../../Components/Header/PageHeader"
import { HeroSection } from "../../Components/HeroSection/HeroSection.jsx"
import {Categories} from "../../Components/Categories/Category.jsx"
import { AboutSection } from "../../Components/AboutSection/AboutSection.jsx"


export default function LandingPage(){
    return(
        <>
        <section>
            <PageHeader/>
        </section>
        <section>
            <HeroSection/>
        </section>
        <section>
            <Categories/>
        </section>
        <section>
            <AboutSection/>
        </section>

        </>
    )
}