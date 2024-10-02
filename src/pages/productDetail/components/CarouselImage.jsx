import { Carousel, Image } from "antd";
import React from "react";

export default function CarouselImage({ product }) {
  return (
    <div>
      <Carousel
        arrows
        autoplay // Enable auto-play
        autoplaySpeed={3000} // Auto-play speed (3 seconds per slide)
        infinite={true} // Loop through the slides infinitely
      >
        <Image width={"100%"} src={product?.image} />
        {product?.imageMore.map((el, index) => (
          <Image
            key={index}
            width={"100%"}
            height={400}
            src={el} // Use 'el' to refer to the image URL in the array
            alt={`Product Image ${index + 1}`} // Optional alt text
          />
        ))}
      </Carousel>
    </div>
  );
}
