import React from 'react';
import { Carousel } from 'antd';
import './carousel.styles.scss'

const Carosel = () => {
    return (
        <div className="container" >
        <Carousel effect='fade' autoplay style={{width:'auto'}}
        la>
    <div>
      <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0063/0980/6195/files/01_General_2200x.jpg?v=1588630398" alt="1" />
    </div>
    <div>
      <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0063/0980/6195/files/03_2200x.jpg?v=1588630576" alt="2"/>
    </div>
    <div>
      <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0063/0980/6195/files/07_Candy_2200x.jpg?v=1588631032" alt="3" />
    </div>
    <div>
      <img className="carousel-img" src="https://cdn.shopify.com/s/files/1/0063/0980/6195/files/06_Baby_2200x.jpg?v=1588630781" alt="4" />
    </div>
  </Carousel>
  </div>
    );
}
export default Carosel;

