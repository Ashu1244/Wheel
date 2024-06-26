

import React from 'react';
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'


const Testinomials = () => {
    const settings= {
        dots: true,
        infinite: true,
        autoplay: true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,
        
        responsive:[
            {
               breakpoint:992,
               settings:{
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
               } ,
            },
            {
                breakpoint:576,
                settings:{
                 slidesToShow:2,
                 slidesToScroll:1,
                 infinite:true,
                 dots:true,
                } ,
             },
        ]

    }
  return (
  <Slider {...settings}>
    <div className="testinomial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. R
            ecusandae nulla, nam vero officiis
             dolorem deleniti voluptatem sint r
             eprehenderit quos, sequi nemo architecto excepturi repudiandae aliquid 
             aliquam dolor repellat, odit facilis.
        </p>
        <div className='d-flex align-items-center
        gap-4 mt-3'>
            <img src={ava01} classname='width-25 h-25 rounded-2' alt=" " />
            <div>
                <h5 className='mb-0 mt-3'>Ashutosh</h5>
                <p>Customer</p>
            </div>


        </div>
    </div>

    <div className="testinomial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. R
            ecusandae nulla, nam vero officiis
             dolorem deleniti voluptatem sint r
             eprehenderit quos, sequi nemo architecto excepturi repudiandae aliquid 
             aliquam dolor repellat, odit facilis.
        </p>
        <div className='d-flex align-items-center
        gap-4 mt-3'>
            <img src={ava02} classname="w-25 h-25 rounded-2"
            alt=""/>
            <div>
                <h5 className='mb-0 mt-3'>Daksh</h5>
                <p>Customer</p>
            </div>


        </div>
    </div>

    <div className="testinomial py-4 px-3">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. R
            ecusandae nulla, nam vero officiis
             dolorem deleniti voluptatem sint r
             eprehenderit quos, sequi nemo architecto excepturi repudiandae aliquid 
             aliquam dolor repellat, odit facilis.
        </p>
        <div className='d-flex align-items-center
        gap-4 mt-3'>
            <img src={ava03} classname="w-25 h-25 rounded-2"
            alt=""/>
            <div>
                <h5 className='mb-0 mt-3'>Piyush</h5>
                <p>Customer</p>
            </div>


        </div>
    </div>


</Slider>
  );
};

export default Testinomials;
