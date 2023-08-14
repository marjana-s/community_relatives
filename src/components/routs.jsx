import React from "react";
import Header from "./header"
import Partners from "./Partners"
import Support from "./support"
import AboutUs from './AboutUs'
import NewsSlider from "./TrySlider"
 function MainRout(){
    return (
        <div className="App">
            <Header></Header>
            <AboutUs></AboutUs>
            <NewsSlider></NewsSlider>
            <Partners></Partners>
            <Support></Support>
        </div>
    )
 }
 export default MainRout;