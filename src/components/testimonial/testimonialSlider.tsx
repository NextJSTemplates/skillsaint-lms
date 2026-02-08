"use client";
import { Play, QuoteLeft } from "@/lib/icons";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { testimonialData } from "./testimonialData";
import { Navigation } from "swiper/modules";

const TestimonialSlider = () => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={2.999}
      breakpoints={{
        0: {
          slidesPerView: 1.1,
        },
        450: {
          slidesPerView: 1.3,
        },
        768: {
          slidesPerView: 1.9,
        },
        1024: {
          slidesPerView: 2.5,
        },
        1280: {
          slidesPerView: 2.999,
        },
      }}
      navigation={{
        nextEl: ".testimonial-next-arrow",
        prevEl: ".testimonial-prev-arrow",
      }}
      modules={[Navigation]}
      className="!overflow-visible"
    >
      {testimonialData.map((item) => {
        if (item.isVideoReview) {
          return (
            <SwiperSlide>
              <div className="relative aspect-[392/362] rounded-2xl">
                <Image
                  width={392}
                  height={362}
                  sizes="100vw"
                  src={item.videoThumb || ""}
                  alt="img"
                  className="h-full w-full rounded-2xl object-cover"
                />
                {/* video button */}
                <a
                  href={item.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-1/2 left-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#3C393966] text-primary backdrop-blur-[5.333333492279053px] sm:size-20"
                >
                  <span className="ml-2 block">
                    <Play />
                  </span>
                </a>
                {/* user info */}
                <div className="absolute bottom-0 left-0 flex items-center gap-4 px-4 pt-4 pb-7">
                  <Image
                    width={40}
                    height={40}
                    sizes="100vw"
                    src={item.user.image}
                    alt="img"
                    className="h-10 w-10 rounded-full border-[1.5px] border-primary object-cover"
                  />
                  <div>
                    <h6 className="leading-6 font-medium tracking-base text-primary">
                      {item.user.name}
                    </h6>
                    <small className="text-sm leading-5 tracking-sm text-gray-300">
                      {item.user.position}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        } else {
          return (
            <SwiperSlide>
              <div className="flex aspect-[392/362] flex-col justify-between rounded-2xl bg-primary px-7 pt-4 pb-7">
                <div className="flex-1 overflow-y-auto">
                  <span className="text-gray-400">
                    <QuoteLeft />
                  </span>
                  <p className="pt-7 text-lg leading-7 text-secondary">
                    {item.review}
                  </p>
                </div>
                {/* user info */}
                <div className="flex items-center gap-4 pt-7 md:pt-14">
                  <Image
                    width={40}
                    height={40}
                    sizes="100vw"
                    src={item.user.image}
                    alt="img"
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <h6 className="leading-6 font-medium tracking-base">
                      {item.user.name}
                    </h6>
                    <small className="text-sm leading-5 tracking-sm text-secondary">
                      {item.user.position}
                    </small>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        }
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
