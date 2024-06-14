"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"
import "swiper/css";
import 'swiper/css/navigation';


const images = [
  {
    original: "/banner1.png"
  },
  {
    original: "/banner2.png"
  },
  {
    original: "/banner3.png"
  }
]

const Carrousel = () => {
  return (

    <ImageGallery 
    items={images}
    showPlayButton={false} 
    showFullscreenButton={false} 
    autoPlay={true}
    />
   
  );
};

export default Carrousel;
