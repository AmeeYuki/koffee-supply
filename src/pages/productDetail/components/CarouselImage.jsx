import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function CarouselImage() {
  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        dynamicHeight={false}
        // centerMode={true}
        // onChange={onChange}
        // onClickItem={onClickItem}
        // onClickThumb={onClickThumb}
      >
        <div>
          <img src="https://doctormuoi.vn/wp-content/uploads/2021/01/cac-loai-cafe-duoc-yeu-thich.jpg" />
        </div>
        <div>
          <img src="https://www.mayphache.com/images/users/images/news/cafe-truyen-thong.jpg" />
        </div>
        <div>
          <img src="https://www.mayphache.com/images/users/images/news/cafe-truyen-thong.jpg" />
        </div>
        <div>
          <img src="https://www.mayphache.com/images/users/images/news/cafe-truyen-thong.jpg" />
        </div>
        <div>
          <img src="https://www.mayphache.com/images/users/images/news/cafe-truyen-thong.jpg" />
        </div>
      </Carousel>
    </div>
  );
}
