"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Icons } from "../../utils/constants.js";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};


const ArrowAlt = ({ direction, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`text-white z-20 top-[95%] transform p-2 swiper-button-${direction} bg-[#fff] w-[2.6rem] h-[2.6rem] flex justify-center items-center rounded-full cursor-pointer p-1`}
    >
      {direction === "left" ? (
        <Icons.leftSideArrow color="black" className="w-[70%] h-[70%]" />
      ) : (
        <Icons.rightSideArrow color="black" className="w-[70%] h-[70%]" />
      )}
    </div>
  );
};

const BrandCarousel = ({ data }) => {
  return (
    <div className="brand-carousel max-w-[100%] relative">
      {data && data.length > 3 && (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={3}
          initialSlide={0}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-right",
            prevEl: ".swiper-button-left",
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
          }}
        >
          {data &&
            data.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col gap-[1.2rem] mt-5 md:p-2 carousel-slider"
              >
                <div className="relative">
                  <div className="group overflow-hidden cursor-pointer  rounded-lg border-[3px] border-white-300 carousel-image">
                    <img
                      // unoptimized="true"
                      width={600}
                      height={400}
                      src={`${item.attributes?.feature_image?.data?.attributes.url}`}
                      alt="img"
                      className="w-full h-full ease-in-out object-cover transition-transform duration-300 transform hover:scale-105 "
                      // loading="lazy"
                    />
                  </div>
                  <div className=" bg-white  w-[160px] h-[40px] px-[10px] absolute bottom-[14px]  text-center shadow-lg rounded-r-md left-[-10px] drop-shadow-lg z-30 brand-image">
                    <img
                      // loading="lazy"
                      src={`${item?.attributes.client.data?.attributes.logo.data?.attributes.url}`}
                      alt="img"
                      width={160}
                      height={40}
                      className="w-full h-full transition ease-in-out object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col pt-3">
                  <a href={`/case-studies/${item?.attributes.slug}`}>
                    <h3 className="text-white text-[18px] font-[700] leading-[30px] capitalize">
                      {item?.attributes.title}
                    </h3>
                  </a>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      )}
      <div className="w-full items-center justify-center flex gap-[10px] py-10   md:pb-0 md:pt-14">
        <ArrowAlt direction="left" />
        <ArrowAlt direction="right" />
      </div>
    </div>
  );
};

const ClientsCarousel = ({ data }) => {
  const chunks = chunkArray(data, 3);
  return (
    <div className="relative client-carousel">
      {chunks && chunks.length > 1 && (
        <Swiper
          modules={[Navigation]}
          slidesPerView={2}
          autoHeight={true}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-down",
            prevEl: ".swiper-button-up",
            disabledClass: "swiper-button-disabled",
          }}
          breakpoints={{
            560: {
              slidesPerView: 1,
              direction: "horizontal",
            },
            668: {
              slidesPerView: 2,
              direction: "vertical",
            },
          }}
          className="min-h-[300px]  "
        >
          {chunks.map((chunk, i) => (
            <SwiperSlide key={i}>
              <div
                className={`grid   h-full grid-cols-1  grid-rows-1 md:grid-cols-3`}
              >
                {chunk.map(({ attributes }, j) => (
                  <div
                    key={j}
                    className="carousel-item flex items-center justify-center w-full bg-white border-[1px]   h-[100px] md:h-full"
                  >
                    <img
                      src={attributes.logo.data?.attributes.url}
                      width={140}
                      height={60}
                      loading="lazy"
                      alt="logo"
                      className="bg-white w-[110px] md:w-[140px]"
                    />
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}

      <div
        className="md:hidden text-white absolute z-20 top-1/2 -translate-y-1/2 transform p-1 -left-4 swiper-button-up bg-white border border-gray-200 w-10 h-10 flex justify-center items-center 
      rounded-full cursor-pointer"
      >
        <Icons.leftSideArrow
          color="black"
          className="w-[40px] h-[40px] text-center"
        />
      </div>
      <div className="md:hidden text-white absolute z-20 top-1/2 -translate-y-1/2 transform p-1 -right-4 swiper-button-down bg-white border border-gray-200 w-10 h-10 flex justify-center items-center rounded-full cursor-pointer">
        <Icons.rightSideArrow
          color="black"
          className="w-[40px] h-[40px] text-center"
        />
      </div>

      {/* Desktop View Arrows */}

      <div className="hidden md:flex text-white absolute z-20 top-[-8%] lg:top-[-4%] p-1 lg:p-2 left-[50%] transform -translate-x-1/2 swiper-button-up bg-white border border-gray-200 md:w-12  lg:w-8 lg:h-8 justify-center items-center rounded-full cursor-pointer">
        <Icons.upArrow color="black" />
      </div>

      <div className="hidden md:flex text-white absolute z-20 bottom-[-8%] lg:bottom-[-4%] p-1 lg:p-2 left-[50%] transform -translate-x-1/2 swiper-button-down bg-white border border-gray-200 md:w-12  lg:w-8 lg:h-8 justify-center items-center rounded-full cursor-pointer lg:active:bg-[#F0F0F0]">
        <Icons.downArrow color="black" className="active:text-blue-500" />
      </div>
    </div>
  );
};

export { BrandCarousel, ClientsCarousel };
