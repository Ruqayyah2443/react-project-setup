import {Button} from "../Button/Button.jsx"
import "./BlogPost.css"
import {Card} from "../Card/Card.jsx"
import Img1 from "../../assets/images/BlogPost/Img1.png"
import Img2 from "../../assets/images/BlogPost/Img2.png"
import Img3 from "../../assets/images/BlogPost/Img3.png"
import Calender from "../../assets/images/BlogPost/Calender.svg?react"
import Comment from "../../assets/images/BlogPost/Comment.svg?react"
import Arrow from "../../assets/images/BlogPost/Arrow.svg?react"

const blogs = [
  {
    id: 1,
    image: Img1,
    date: "14 June 2023",
    comments: 6,
    title: "velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat",
    
    icon: <Calender/>,
    icon1: <Comment/>,
  },
  {
    id: 2,
    image: Img2,
    date: "21 April 2024",
    comments:  6,
    title: "velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat",
    icon: <Calender/>,
    icon1: <Comment/>,
  },
  {
    id: 3,
    image: Img3,
    date: "14 June 2023",
    comments: 6,
    title: "velit esse cillum dolore eu fugiat nullapariatur. Excepteur sint occaecat cupidatat",
    // icon: <Calender/>,
    // icon1: <Comment/>,
  },
];

export function BlogPost(){
    return(
        <section className="blogs">
            {/* <div className="page__container"> */}
                <div className="blog-header">
                    <div className="header-row-1">
                        <span className="blog-span">BLOG POST</span>
                    </div>
                    
                    <div className="header-row-2">
                        <div className="btn-top">
                             
                            <Button variant="primary" size="lg" radius="rounded-md" rounded={true} suffix={<Arrow/>}>
                                All Blog Post
                            </Button>
                        </div>
                       
                    </div>
                    <div className="header-row-3">
                        <h2>Most Popular Post</h2>
                    </div>
                    
                </div>
                
                
                <div className="card__flex">
                    {blogs.map((item) =>(
                        <Card key={item.id} variant="post">
                            <img src={item.image} alt={item.title}/>
                            <small className="text-small">
                                <div className="small__flex">
                                    <Calender/>{item.date}
                                </div>
                                <div className="small__flex">
                                    <Comment/> comment ({item.comments})
                                </div>
                            </small>
                            <h3 className="text-big">{item.title}</h3>
                            <div className="btn-post">
                                <Button variant="lightPurple" size="lg" radius="rounded-md" rounded={true} suffix={<Arrow/>}>
                                    Read More
                                </Button>
                            </div>



                            
                            
                        </Card>
                    ))}
                </div>
            {/* </div> */}

        </section>
    )
}