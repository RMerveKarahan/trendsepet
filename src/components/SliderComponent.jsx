import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const SliderComponent = () => {
  const sliderData = [
    {
      link: "/kampanya/yeni-sezon-denim-c-23867048",
      image:
        "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/KK_editorsecimi-1-2_1747830400.jpg",
      title: "%50'ye Varan İndirim",
    },
    {
      link: "/kampanya/elbise-c-20265761",
      image:
        "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/KK_editorsecimi-5-1_1747830402.jpg",
      title: "699,99 TL'den Başlayan Fiyatlar",
    },
    {
      link: "/kampanya/yeni-sezon-t-shirt-polo-t-shirt-c-23713118",
      image:
        "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/KK_editorsecimi-6-1_1747830405.jpg",
      title: "299,99 TL'den Başlayan Fiyatlar",
    },
    {
      link: "/canta-c-647",
      image:
        "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/KK_editorsecimi-4-3_1747830409.jpg",
      title: "Sepette %60'a Varan İndirim",
    },
    {
      link: "/kampanya/yeni-sezon-sneaker-c-23713149",
      image:
        "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/KK_editorsecimi-2-3_1747830397.jpg",
      title: "%35'e Varan İndirim",
    },
    {
      link: "/kampanya/yeni-sezon-sweatshirt-c-23846467",
      image:
        "https://boyner-marketplace-ecom-cms-small-prod.mncdn.com/mnresize/492/-/wp-content/uploads/2025/05/KK_editorsecimi-3-4_1747830394.jpg",
      title: "469,99 TL'den Başlayan Fiyatlar",
    },
  ];

  return (
    <div style={{ padding: "20px 0" }}>
      <style>
        {`
        .slider-item {
          width: 231.5px !important;
        }

        .slider-item a {
          display: block;
          text-decoration: none;
          color: inherit;
        }

        .slider-item img {
          width: 100%;
          height: auto;
          border-radius: 8px;
          display: block;
        }

        .slider-item h5 {
          margin-top: 10px;
          font-size: 16px;
          text-align: center;
        }
        `}
      </style>

      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index} className="slider-item">
            <a href={item.link} target="_self">
              <img src={item.image} alt={item.title} />
              <h5>{item.title}</h5>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderComponent;
