import SlideShow from "./SlideShow.jsx"
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {faList} from "@fortawesome/free-solid-svg-icons";
export default function HeroSection(){
    const images = ["/images/gallery/vegetarian-indian-food.jpeg",  "/images/gallery/meal-plan.jpeg", "/images/gallery/woman-shopping.jpeg"]
    const img = "/images/gallery/thali.jpeg";
    const navigate = useNavigate();

  const routeChange = () =>{
    let path = `/recipes`;
    navigate(path);
  }
    return <div className="section hero">
        <div className="col">
            <div className="title"> <h1>Welcome to Gauri's Meal Planning Center! </h1></div>
            <div className="info"> This is your one-stop shop to discover delicious and healthy vegetarian recipes,
                create a comprehensive and nutritionally balanced meal plan for the week ahead, and easily access your
                grocery shopping list.
            </div>
            <button className="btn" onClick={routeChange}> Explore Now</button>
        </div>
        <div className="col side-image">
            <SlideShow images={images}/>
        {/*<CustomImage imgSrc={img} pt={"85%"}/>*/}
        </div>

    </div>
}