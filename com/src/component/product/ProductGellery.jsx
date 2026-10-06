import React, { useEffect, useState } from 'react';
import Mobile1 from '../../assets/mobile1.png';
import Mobile2 from '../../assets/mobile2.png';
import Leftimg from '../../component/product/LeftButton';
import Rightimg from '../../component/product/RightButton';


import ImageGallery from "react-image-gallery";

const ProductGellery = ({item}) => {
  const[image,setimage]=useState([]);
  console.log("abi");
  console.log(item.images)
    useEffect(()=>{
      if(item.images){
        const imggallery=item.images.map((itemimage)=>({
          original:itemimage
        }));
        setimage(imggallery)
      }
    },[item])

  return (
    <div  style={{background:'white',boxShadow:'0 5px 5px rgb(0,23,23,0.5)', padding:'4px',borderRadius:'5px',height:'400px'}}>
       <ImageGallery
    //   ref={galleryRef}
    defaultImage={Mobile1}
    
      items={image}
      showFullscreenButton={false}
      isRTL={false}
      showPlayButton={false}
      showThumbnails={false}
      renderRightNav={Leftimg}
      renderLeftNav={Rightimg}
    //   onSlide={(index) => console.log("Slid to", index)}
    />
    </div>
  )
}

export default ProductGellery
