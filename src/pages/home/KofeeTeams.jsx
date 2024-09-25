import { Col, Flex, Row } from "antd";
import React from "react";

export default function KofeeTeams() {
  const teammates = [
    {
      name: "VAN ANH NGUYEN",
      role: "Designer | Media Team",
      description:
        "Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng vùng miền.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119",
    },
    {
      name: "JOHN DOE",
      role: "Marketing Specialist",
      description:
        "John has been exploring various marketing strategies that align with our brand's mission to bring quality coffee experiences to customers.",
      image: "https://example.com/johndoe.jpg",
    },
    {
      name: "JANE SMITH",
      role: "Barista Trainer",
      description:
        "Jane has a passion for teaching others how to brew the perfect cup of coffee, spreading her love for the craft.",
      image: "https://example.com/janesmith.jpg",
    },
  ];

  return (
    <div className="teams">
      <div className="teammate">
        <p className="title"> "KO-FEE KHÔNG CHỈ LÀ CÀ PHÊ"</p>
        <p className="description">
          Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà
          phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có
          thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng
          vùng miền.
        </p>
        <Flex gap={30} align="end">
          <div>
            <img
              className="avatar"
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119"
              alt="Van Anh"
            ></img>
          </div>
          <div>
            <p className="name">VAN ANH NGUYEN</p>
            <p className="nghe">Designer | Media Team</p>
          </div>
        </Flex>
      </div>
    </div>
  );
}
