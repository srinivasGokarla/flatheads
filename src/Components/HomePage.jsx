import React from 'react'
import '../Style/home.css'
import itemData from './img'

  import ImageList from '@mui/material/ImageList';
  import ImageListItem from '@mui/material/ImageListItem';
  import Slideshow from './Slideshow'

  function srcset(image, size, rows = 1, cols = 1) {
	return {
	  src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
	  srcSet: `${image}?w=${size * cols}&h=${
		size * rows
	  }&fit=crop&auto=format&dpr=2 2x`,
	};
  }
  
  export  function HomePage() {
	return (

		<>
		<Slideshow />
	
		<h1>What’s special about Flatheads shoes?</h1>
		<div className="sho">
            
            <img src ="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/All_day_wear_b70577c1-68ef-4455-a743-16ff7dd2d101.png?v=1652002980" alt="" />
            <img src ="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/Extremely_Lightweight_9cdf870e-e419-44ce-b496-349031c315fc.png?v=1652002946" alt="" />
            <img src ="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/10x_Breathable_60135c07-70a9-4c14-8643-5203c9f8ac82.png?v=1652002946" alt="" />
          
          
            <button>View All </button>
			
		</div>
        <br/>
        <br/>
        <br/>
        <br/>
	<div className="float">
        <img src="https://cdn.shopify.com/s/files/1/0258/2485/4100/files/KoolTex_1080x_800x800_crop_center_800x800_crop_center_bfc724a2-40e8-42b2-bc2f-8b8b8097f693_800x800_crop_center.webp?v=1652030032" alt="" />
        <div className="rig">
            <h1>KOOLTEX TRAINERS</h1>
            <p>DryFit sneakers that keep your feet cool and dry all through the day. Ideal for warm, tropical climates and all day wear that’s stylish!</p>
            <button>Shop Now</button>
        </div>
    </div>
    <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
    <div className="w-full h-full p-28">

		
	  <ImageList
		sx={{ width: 'full', height: 'full'  }}
		variant="quilted"
		cols={4}
		
		rowHeight={400}
		gap={12}
	  >
		{itemData.map((item) => (
		  <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
			<img
			  {...srcset(item.img, 121, item.rows, item.cols)}
			  alt={item.title}
			  loading="lazy"
			/>
			<div>
			<h1 className="ml-5 -mt-5 text-white">{}</h1>
			</div>
			
		  </ImageListItem>
		))}
	  </ImageList>
	  </div>
	  </>
	);
  }

  
 
  