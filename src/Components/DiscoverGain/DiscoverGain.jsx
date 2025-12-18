import "./DiscoverGain.css"
import {Card} from "../Card/Card.jsx"
import {Button} from "../Button/Button.jsx"
import CareerWoman from "../../assets/images/DiscoverGain/CareerWoman.png"
import CareerMan from "../../assets/images/DiscoverGain/CareerMan.png"
import GianBg from "../../assets/images/DiscoverGain/GianBg.png"
import Dott from "../../assets/Icons/DiscoverGain/Dott.svg?react"
import Flower from "../../assets/Icons/DiscoverGain/Flower.svg?react"
import SemiCircl from "../../assets/Icons/DiscoverGain/SemiCircle.svg?react"
import Wave from "../../assets/Icons/DiscoverGain/Wave.svg?react"
import WaveBox from "../../assets/Icons/DiscoverGain/WaveBox.svg?react"
import ArrowRigth from "../../assets/Icons/HeaderIcons/ArrowRigth.svg?react"
const gains = [
  {
    id: 1,
    title: "Start From Today",
    textLines: [
    "Join Our Training Courses &",
    "Build Your Skill."
    ],
    image: CareerWoman,
    bg: "var(--color-primary)",
    bgImage: GianBg, 
    button: {
      label: "Join Now",
      variant: "secondary",
      suffix: <ArrowRigth />,
    },
  },
  {
    id: 2,
    title: "Start From Today",
    textLines: [
    "Join Our Training Courses &",
    "Build Your Skill."
    ],
    image: CareerMan,
    bg: "var(--color-secondary)",
    bgImage: GianBg, 
    button: {
      label: "Join Now",
      variant: "primary",
      suffix: <ArrowRigth />
    },
  },
];
export function DiscoverGain(){
    return(
        <section className="discover-gain">
            <div className="discover-gain__inner">
                <div className="foating-icon">
                    <div className="dot">
                        < Dott/>
                    </div>
                    <div className="wave">
                        <Wave/>
                    </div>
                    <div className="circle">
                        <SemiCircl/>
                    </div>
                    <div className="flower">
                        <Flower/>
                    </div>
                    <div className="wave-box">
                        <WaveBox/>
                    </div>
                </div>
                    <p className="top">Choose Your Career</p>
                    <h2 className="discover-gain__header">Discover Your Gain</h2>
                    <div className="flex-gain">
                        {gains.map((item)=>(
                            <Card key={item.id} variant="gain" className="card-gain" 
                            style={{
                            backgroundColor: item.bg,
                            backgroundImage: `url(${item.bgImage})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            }}>
                                <div className="content">
                                    <h3>{item.title}</h3>
                                    {item.textLines.map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))}
                                    
                                    <div className="btn">
                                        <Button
                                            variant={item.button.variant}
                                            size="lg"
                                            radius="rounded-md"
                                            rounded
                                            suffix={item.button.suffix}
                                            >
                                            {item.button.label}
                                        </Button>
                                    </div>
                                </div>  
                                <img src={item.image} alt={item.title} />

                            </Card>
                        ))}
                    </div>
                
            </div>
            
        </section>
    )
}