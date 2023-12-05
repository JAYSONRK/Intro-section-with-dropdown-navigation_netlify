import React from "react";
import HeroDesktop from '../images/image-hero-desktop.png';
import HeroMobile from '../images/image-hero-mobile.png';


const Picture = () => {
    return (<>
        <picture className="main-img">
            <source media="(min-width:640px)" srcSet={HeroDesktop}/>
            <img src={HeroMobile} alt="representaion"/>
        </picture>
    </>)
}

export default Picture;