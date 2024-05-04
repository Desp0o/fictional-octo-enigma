import { Link } from "react-router-dom"
import "./sllider.css"

import door1 from "../../assets/door1.webp"
import door2 from "../../assets/door2.webp"
import door3 from "../../assets/door3.webp"
import door4 from "../../assets/door4.webp"
import door5 from "../../assets/door5.webp"


const Slidet = () => {
  return (
    <div className="slider_container">
        <Link to='/' className="slider_image_link">
            <img src={door1} alt="slider image" className="slider_image" />
        </Link>

        <Link to='/' className="slider_image_link">
            <img src={door2} alt="slider image" className="slider_image" />
        </Link>

        <Link to='/' className="slider_image_link">
            <img src={door3} alt="slider image" className="slider_image" />
        </Link>

        <Link to='/' className="slider_image_link">
            <img src={door4} alt="slider image" className="slider_image" />
        </Link>

        <Link to='/' className="slider_image_link">
            <img src={door5} alt="slider image" className="slider_image" />
        </Link>
    </div>
  )
}

export default Slidet