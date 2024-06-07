"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

const Carrousel = () => {
  return (
   
    <Swiper pagination={{
      type: 'fraction',
    }}
    navigation={true}
    modules={[Pagination, Navigation]}
    className="mySwiper">
      <SwiperSlide>
        <Image src="/banner1.png" width={1500} height={1500} alt="banner 1"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/banner2.png" width={1500} height={1500} alt="banner 2"/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/banner3.png" width={1500} height={1500} alt="banner 3"/>
      </SwiperSlide>
    </Swiper>
   
  );
};

export default Carrousel;
