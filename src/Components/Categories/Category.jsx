
import "./Category.css"
import BussMgn from "../../assets/Icons/Categories/BussMgn.svg?react";
import ArtsDesign from "../../assets/Icons/Categories/ArtsDesign.svg?react";
import PersonalDev from "../../assets/Icons/Categories/PersonalDev.svg?react";
import UiUx from "../../assets/Icons/Categories/UiUx.svg?react";
import Graphics from "../../assets/Icons/Categories/Graphics.svg?react";
import Digital from "../../assets/Icons/Categories/Digital.svg?react";
import Exclusive from "../../assets/Icons/Categories/Exclusive.svg?react";
import Product from "../../assets/Icons/Categories/Product.svg?react";
import Video from "../../assets/Icons/Categories/Video.svg?react";


const categories = [
  { label: "Business Management", icon: <BussMgn/>, color: "#e0f2fe" },
  { label: "Arts & Design", icon: <ArtsDesign/>, color: "#fce7f3" },
  { label: "Personal Development", icon: <PersonalDev/>, color: "#ecfeff" },
  { label: "UI/UX Design", icon: <UiUx/>, color: "#FFFAEF" },
  { label: "Graphic Design", icon: <Graphics/>, color: "#F7F3FF" },
  { label: "Digital Marketing", icon: <Digital/>, color: "#FFFAEF" },
  { label: "Exclusive Man", icon: <Exclusive/>, color: "#F3F4FE" },
  { label: "Product Design", icon: <Product/>, color: "#FFF7EF" },
  { label: "Video & Photography", icon: <Video/>, color: "#F1FBFF" },
];

export function Categories() {
  return (
    <section className="categories">
      <h2>Browse By Categories</h2>
      <div className="categories__grid">
        {categories.map((item) => (
          <div
            key={item.label}
            className="category-card"
            style={{ background: item.color }}
          >
            {item.icon}
            <span className="category-text">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}



