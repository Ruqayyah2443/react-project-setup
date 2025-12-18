import "../../themes/Global.css";
import { PageHeader } from "../../Components/Header/PageHeader"
import { HeroSection } from "../../Components/HeroSection/HeroSection.jsx"
import {Categories} from "../../Components/Categories/Category.jsx"
import { AboutSection } from "../../Components/AboutSection/AboutSection.jsx"
import { FooterSection } from "../../Components/FooterSection/FooterSection.jsx"
import { BlogPost } from "../../Components/BlogPost/BlogPost.jsx";
import { DiscoverGain } from "../../Components/DiscoverGain/DiscoverGain.jsx";



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
        <section>
            <DiscoverGain/>
        </section>
        <section>
            <BlogPost/>
        </section>

        <footer> 
            <FooterSection/>
        </footer>

        </>
    )
}