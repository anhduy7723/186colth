// components/SwiperCarousel.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";

SwiperCore.use([Navigation, Pagination]);

const SwiperCarousel = () => {
  const products = [
    {
      price: 100,
      name: "Sample Product 1",
      id: 1,
      pic:
        "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649687/samples/ecommerce/leather-bag-gray.jpg",
    },
    {
      price: 200,
      name: "Sample Product 2",
      id: 2,
      pic:
        "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649677/samples/ecommerce/analog-classic.jpg",
    },
    {
      price: 300,
      name: "Sample Product 3",
      id: 3,
      pic:
        "https://res.cloudinary.com/dirs6avbc/image/upload/v1689649706/samples/outdoor-woman.jpg",
    },
  ];

  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <div className="product-card">
            <div className="product-info">
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
            </div>
            <div className="product-image">
              <img
                src={product.pic}
                alt={product.name}
                style={{ height: 200, width: 200 }}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperCarousel;
