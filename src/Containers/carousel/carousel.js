import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Carousel } from 'react-bootstrap';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bnetcmsus-a.akamaihd.net/cms/page_media/6r/6RM2X0ZS3UIA1509731407458.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bnetcmsus-a.akamaihd.net/cms/gallery/hs/HS7YMTAAZ9IR1513120597066.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bnetcmsus-a.akamaihd.net/cms/gallery/hx/HX2DDEH7HPIK1513114843146.jpg"
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bnetcmsus-a.akamaihd.net/cms/gallery/d0/D0J2EC7FJPKO1509663137542.jpg"
                    alt="Fourth slide"
                    />

                    <Carousel.Caption>
                    <h3 >Foruth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://bnetcmsus-a.akamaihd.net/cms/gallery/pk/PKFLFRA89VUR1509662979573.jpg"
                    alt="Fifth slide"
                    />

                    <Carousel.Caption>
                    <h3>Fifth slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}