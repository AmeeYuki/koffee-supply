import { Carousel } from "antd";
import React, { useRef, useState } from "react";

export default function CarouselImage({ product }) {
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index
  const carouselRef = useRef(null);

  const handleThumbnailClick = (index) => {
    carouselRef.current.goTo(index); // Navigate to the clicked image
    setCurrentIndex(index); // Update the current index when clicked
  };

  const handleSlideChange = (current) => {
    setCurrentIndex(current); // Update the current index when the slide changes
  };

  return (
    <div style={{ marginBottom: 20 }}>
      <Carousel
        className="carousel-img-pro-detail"
        arrows
        autoplay
        autoplaySpeed={3000}
        infinite={true}
        style={{ width: "500" }}
        ref={carouselRef}
        beforeChange={(current, next) => handleSlideChange(next)} // Detect slide change
      >
        {product?.imageMore.map((el, index) => (
          <img
            style={{ width: "500", objectFit: "contain", userSelect: "none" }}
            key={index}
            src={el}
            alt={`Product Image ${index + 1}`}
          />
        ))}
      </Carousel>

      {/* Thumbnails under the carousel */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 0 }}>
        {product?.imageMore.map((el, index) => (
          <img
            key={index}
            src={el}
            alt={`Thumbnail ${index + 1}`}
            style={{
              width: 60,
              height: 60,
              objectFit: "cover",
              margin: "0 5px",
              cursor: "pointer",
              border:
                currentIndex === index ? "3px solid #333" : "2px solid #ccc", // Highlight the selected thumbnail
              borderRadius: 5,
              transition: "border 0.3s ease", // Smooth transition for border
            }}
            onClick={() => handleThumbnailClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
