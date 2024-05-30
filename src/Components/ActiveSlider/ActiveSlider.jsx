import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import { FreeMode, Pagination } from "swiper/modules";
import { ServiceData } from ".";




const ActiveSlider = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <Swiper
        breakpoints={{
          340: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          700: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="md:w-10/12 w-96"
      >
        {ServiceData.map((item) => (
          <SwiperSlide key={item.title}>
            <div className=" mb-10 group relative shadow-lg text-gray-800 rounded-3xl font-normal text-lg p-5 w-[420] gap-20  bg-white overflow-hidden ">
              <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-40" />
              <div className="relative ">
                <img src={item.image} alt="" className="w-6"/>
                <p className="mt-4 mb-7">{item.content} </p>

                <h1 className="font-semibold text-xl">{item.title} </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ActiveSlider;