import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from '../../assets/ChatGPT Image 26 juil. 2026, 18_59_15.png';

 
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item   className='slider-background' interval={2000}>
        {/* <ExampleCarouselImage text="First slide" /> */}
                  <img src={Image} alt="" style={{width:'200px',position:'absolute',right:'300px',top:'30px',borderRadius:'10px'}}/>

        <Carousel.Caption>
          <h3  className='text'>هناك  خصم كبير </h3>
          <p  className='text'>خصم يصل الي  50% عند  شراؤك</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='slider-background' interval={2000}>
        {/* <ExampleCarouselImage text="Second slide" /> */}
                  <img src={Image} alt=""   style={{width:'200px',position:'absolute',right:'300px',top:'30px',borderRadius:'10px'}}/>

        <Carousel.Caption>
          <h3  className='text'>Second slide label</h3>
          <p  className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='slider-background' interval={2000}>
        {/* <ExampleCarouselImage text="Third slide" /> */}
                  <img src={Image} alt="" style={{width:'200px',position:'absolute',right:'300px',top:'30px',borderRadius:'10px'}}/>

        <Carousel.Caption>
          <h3  className='text'>Third slide label</h3>
          <p  className='text'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;