import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Mains() {
    let settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className='main_container'>
            <Slider {...settings}>
                <div className='card_container'>
                    <h3>1</h3>
                </div>
                <div className='card_container'>
                    <h3>2</h3>
                </div>
                <div className='card_container'>
                    <h3>3</h3>
                </div>
                <div className='card_container'>
                    <h3>4</h3>
                </div>
                <div className='card_container'>
                    <h3>5</h3>
                </div>
                <div className='card_container'>
                    <h3>6</h3>
                </div>
            </Slider >
        </div>
    );
}
