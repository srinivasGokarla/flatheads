import React from 'react';
import 'react-slideshow-image/dist/styles.css'
import { Fade } from 'react-slideshow-image';
import '../Style/slide.css'

  const fadeImages = [
	'https://cdn.shopify.com/s/files/1/0258/2485/4100/files/GK_Homedeskedit1_1920x889_1920x889_3_1440x889_63b49377-3f4a-4ccf-b551-42600a1deb2c_1440x889.webp?v=1652027895',
	'https://cdn.shopify.com/s/files/1/0258/2485/4100/files/1_1440x889_b016d4c7-7abb-4001-874b-2f53f482c39f_1440x889.jpg?v=1651959648',
	'https://cdn.shopify.com/s/files/1/0258/2485/4100/files/2_1440x889_e83aaf8a-b3bf-4894-9a20-0b2286923bf8_1440x889.jpg?v=1651959689',
	'https://cdn.shopify.com/s/files/1/0258/2485/4100/files/3_1440x889_d76e2a63-b5e4-44e6-8c01-2fd656f380a3_1440x889.jpg?v=1651959777',
  ];
  const properties = {
    duration: 2000,
    transitionDuration: 500,
    infinite: true,
    prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M242 180.6v-138L0 256l242 213.4V331.2h270V180.6z"/></svg></div>,
    nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="#fff"><path d="M512 256L270 42.6v138.2H0v150.6h270v138z"/></svg></div>
  };

const Slideshow = () => {
    return (
		<div>
		
		<div className="slide-container">
		  <Fade {...properties}>
			<div className="each-fade">
			  <div>
				<img src={fadeImages[0]} alt="" />
			  </div>
		
			</div>
			<div className="each-fade">
		
			  <div>
				<img src={fadeImages[1]}alt="" />
			  </div>
			</div>
			<div className="each-fade">
			  <div>
				<img src={fadeImages[2]} alt="" />
			  </div>
			
			</div>
		  </Fade>
		</div>
	  </div>
    )
}

export default Slideshow