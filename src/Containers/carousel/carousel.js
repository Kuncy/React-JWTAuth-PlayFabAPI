import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs={false} dynamicHeight={true} emulateTouch={true}>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/hs/HS7YMTAAZ9IR1513120597066.jpg" />
                </div>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/page_media/6r/6RM2X0ZS3UIA1509731407458.jpg" />
                </div>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/pt/PTRQ0098SJYL1509731760219.jpg" />
                </div>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/hx/HX2DDEH7HPIK1513114843146.jpg" />
                </div>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/hx/HX2DDEH7HPIK1513114843146.jpg" />
                </div>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/d0/D0J2EC7FJPKO1509663137542.jpg" />
                </div>
                <div className="img">
                    <img src="https://bnetcmsus-a.akamaihd.net/cms/gallery/pk/PKFLFRA89VUR1509662979573.jpg" />
                </div>
            </Carousel>
        </div>
    );
}