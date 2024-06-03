"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import WorkSliderBtns from "../components/WorkSliderBtns";

const Carrousel = () => {
  return (
   
    <Swiper className="relative min-h-[80vh w-full] mb-8">
      <SwiperSlide>
        <Image src="/banner1.png" width={1500} height={1500} alt="banner 1" className="object-relative" object-cover={true}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/banner2.png" width={1500} height={1500} alt="banner 2" className="object-relative" object-cover={true}/>
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/banner3.png" width={1500} height={1500} alt="banner 3" className="object-relative" object-cover={true}/>
      </SwiperSlide>
      <WorkSliderBtns containerStyles="flex justify-center absolute right-0 bottom-[calc(50%_-_22px)] z-20 w-full justify-between" btnStyles="bg-red-700 p-4 text-white font-extrabold text-[22px] w-[64px] h-[64px] flex justify-center items-center transition-all" />
    </Swiper>
   
  );
};

export default Carrousel;
