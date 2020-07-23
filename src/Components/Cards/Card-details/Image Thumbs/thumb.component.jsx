import React,{useContext} from 'react';
import ImageGallery from 'react-image-gallery';
import './thumbs.styles.css'
import {CartContext} from '../../../../Context/context'
function MyGallery () {
  const CartCtx = useContext(CartContext);

 
   return (

    <ImageGallery 
    items={CartCtx.items.image}
    lazyLoad="true"
    thumbnailPosition="left"


    />
    );
  }

export default MyGallery;