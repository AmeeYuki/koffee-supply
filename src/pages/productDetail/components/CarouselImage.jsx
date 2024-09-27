import { Carousel, Image } from "antd";
import React from "react";

export default function CarouselImage() {
  return (
    <div>
      <Carousel
        arrows
        infinite={false}
        // showArrows={true}
        // autoPlay={true}
        // dynamicHeight={false}
        // centerMode={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <Image
          width={"100%"}
          height={400}
          src="https://doctormuoi.vn/wp-content/uploads/2021/01/cac-loai-cafe-duoc-yeu-thich.jpg"
        />
        <Image
          width={"100%"}
          src="https://i0.wp.com/www.theengineeringchoice.com/wp-content/uploads/2024/06/Parts-of-A-Car-Wheel-Diagram.webp?resize=840%2C473&ssl=1"
        />
        <Image
          width={"100%"}
          src="https://doctormuoi.vn/wp-content/uploads/2021/01/cac-loai-cafe-duoc-yeu-thich.jpg"
        />
      </Carousel>
    </div>
  );
}
