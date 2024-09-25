import { Carousel } from "antd";
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
