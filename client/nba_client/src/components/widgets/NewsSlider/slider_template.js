import React from 'react';
import { NavLink } from 'react-router-dom';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './slider.css'



const SliderTemplates = (props) => {
    
    
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}>
        <Slider>
            {/* <Slide index={0}></Slide>
            <Slide index={1}>I am the second Slide.</Slide>
            <Slide index={2}>I am the third Slide.</Slide> */}
            
            {
                props.news.map((item,i) => {
                    return(
                        <div key ={item.id}>
                            <Slide index ={i}>
                                <div className='featured_item'>
                                    <div className='featured_image'
                                    style={{background:`url(../images/articles/${item.image})`}}>
                                        <NavLink to={`articles/${item.id}`}>
                                            <div className='featured_caption'>
                                                {item.title}
                                            </div>
                                        </NavLink>
                                        <div style={{textAlign : 'center'}}
                                        className = 'button'>
                                            <ButtonBack id='button-back'>Back</ButtonBack>
                                            <ButtonNext id='button-left'>Next</ButtonNext>
                                        </div>
                                    </div>

                                </div>
                            </Slide>
                        </div>
                    )
                })
            }
            
        </Slider>
      </CarouselProvider>
        
    );
};

export default SliderTemplates;