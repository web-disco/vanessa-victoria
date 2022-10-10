import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper";

import { urlFor } from "../../utils/image-helper";
import { SliderProps } from "../../interfaces/SliderProps";

const Slider = ({ slider }: SliderProps) => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      loop
      effect="fade"
      autoplay={{
        delay: 4500,
      }}
    >
      {slider.map((slide, index) => (
        <SwiperSlide key={slide._key} className="relative">
          <div
            style={{
              width: "100%",
              backgroundImage: `url(${urlFor(slide).url()})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
            className="h-[600px] lg:h-screen"
          />
          <div className="hidden lg:block absolute z-[10] bottom-4 right-10">
            <div
              className="w-[1px] h-[80px] mx-auto bg-white mb-4"
              id="intro-zip"
            />
            <p className="text-white font-fira font-light">Scroll</p>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
