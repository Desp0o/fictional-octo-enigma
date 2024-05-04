import "./sllider.css";
import { sliderDataBase } from "./SliderDB";
import SliderItem from "./SliderItem";

const Slidet = () => {
  return (
    <div className="slider_container">
      {sliderDataBase.map((item, index) => {
        return (
          <SliderItem 
            key={index}
            title={""} 
            pathName={item.path} 
            coverImage={item.cover} 
          />
        );
      })}
    </div>
  );
};

export default Slidet;
