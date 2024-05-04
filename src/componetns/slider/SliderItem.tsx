import React from 'react'
import { Link } from 'react-router-dom';

interface SliderItemProp{
    title: string;
    pathName: string;
    coverImage: string;
}

const SliderItem:React.FC<SliderItemProp> = ({title, pathName, coverImage}) => {
  return (
    <Link to={pathName} className="slider_image_link">
            <div className="slider_link_overlay" />
            <img src={coverImage} alt="slider image" className="slider_image" />
        </Link>
  )
}

export default SliderItem