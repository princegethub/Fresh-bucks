import React from "react";
import '../../../styles/merquee.css'; // Ensure CSS is properly scoped and loaded
// import second from '../../../assets/images/FreshBucksGlass.png'  

const features = [
  { text: "RICH IN NUTRITION", img: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png" },
  { text: "NATURAL FLAVOR", img: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png" },
  { text: "FRESH FRUITS", img: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png" },
  { text: "THIRST SATISFIER", img: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png" },
  { text: "RICH IN NUTRITION", img: "https://faryita.wpengine.com/wp-content/uploads/2024/03/scroll-juice-img-04.png" }
];

const BrandMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee">
        <div className="marquee-group">
          {features.concat(features).map((item, index) => (
            <div className="marquee-item" key={index}>
              <span>{item.text}</span>
              <img src={item.img} alt={item.text}  />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMarquee;
