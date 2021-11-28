import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function CarouselGallery(){
    return (
        <Carousel 
        showArrows={true} 
        autoPlay={true} 
        interval={3000} 
        swipeable={true} 
        emulateTouch={true} 
        infiniteLoop={true} 
        showThumbs={false} 
        showStatus={false} >
        
        <div>
            <img src="images/pic4.jpg" />
        </div>
        <div>
            <img src="images/pic1.jpg" />
        </div>
        <div>
            <img src="images/taigu2.jpg" />
            
        </div>
        {/* <div>
            <img src="images/boss4.jpg" />
            
        </div> */}
        <div>
            <img src="images/boss2.jpg" />
        </div>
        </Carousel>
        
    );
}

export default CarouselGallery;