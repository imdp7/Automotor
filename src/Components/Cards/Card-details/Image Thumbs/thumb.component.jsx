import React from 'react';
import ImageGallery from 'react-image-gallery';
import './thumbs.styles.css'

function MyGallery (props) {


 
   return (

    <ImageGallery 
    items={props}
    lazyLoad="true"
    thumbnailPosition="left"


    />
    );
  }

export default MyGallery;