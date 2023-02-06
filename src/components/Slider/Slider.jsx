import React, { useState } from "react";
import "./slider.scss";
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
const Slider = () => {

    const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1557844352-761f2565b576?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    "https://images.unsplash.com/photo-1610348725531-843dff563e2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  ];

  const prevSlide = ()=>{
    setCurrentSlide(currentSlide===0 ? 2 : (prev)=>prev-1)
  }
  const nextSlide = ()=>{
    setCurrentSlide(currentSlide===2 ? 0 : (prev)=>prev+1)
  }

  return <div className="slider">
    <div className="container" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
    </div>
    <div className="icons">
        <div className="icon" onClick={prevSlide}>
            <WestOutlinedIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
            <EastOutlinedIcon/>
        </div>
    </div>
  </div>;
};

export default Slider;
