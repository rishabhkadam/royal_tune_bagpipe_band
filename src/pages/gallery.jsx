import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import imgbagpipe01 from "../assests/bagpipe01.jpeg";
import imgbagpipe02 from "../assests/bagpipe02.jpeg";
import imgbagpipe03 from "../assests/bagpipe03.jpeg";
import imgbagpipe04 from "../assests/bagpipe04.jpeg";
import imgbagpipe05 from "../assests/bagpipe05.jpeg";
import imgbagpipe06 from "../assests/bagpipe06.jpeg";
import imgbagpipe07 from "../assests/bagpipe07.jpeg";

export default function Gallery() {
  const images = [
    imgbagpipe01,
    imgbagpipe02,
    imgbagpipe03,
    imgbagpipe04,
    imgbagpipe05,
    imgbagpipe06,
    imgbagpipe07,
  ];

  return (
    <section className="py-20 bg-slate-100" id="gallery">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl gold-gradient-text mb-10 text-center">
          Performance Gallery
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          speed={1000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={item}
                  alt="Gallery"
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
