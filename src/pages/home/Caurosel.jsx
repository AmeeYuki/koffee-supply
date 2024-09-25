import { Carousel, Col, ConfigProvider, Flex, Row } from "antd";
import React from "react";

export default function Carousele() {
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
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
      name: "VAN ANH NGUYEN",
      role: "Designer | Media Team",
      description:
        "Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng vùng miền.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119",
    },
    {
      name: "VAN ANH NGUYEN",
      role: "Designer | Media Team",
      description:
        "Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng vùng miền.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119",
    },
    {
      name: "VAN ANH NGUYEN",
      role: "Designer | Media Team",
      description:
        "Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng vùng miền.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119",
    },
    {
      name: "VAN ANH NGUYEN",
      role: "Designer | Media Team",
      description:
        "Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng vùng miền.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119",
    },
    {
      name: "VAN ANH NGUYEN",
      role: "Designer | Media Team",
      description:
        "Hành trình khám phá cà phê của tôi không chỉ dừng lại ở những quán cà phê nổi tiếng, mà còn len lỏi vào những góc nhỏ bình dị, nơi tôi có thể tìm thấy những hương vị cà phê mộc mạc, mang đậm dấu ấn của từng vùng miền.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/VanAnh.jpg?alt=media&token=f013ba97-309e-4be1-b6da-b71906974119",
    },
  ];
  return (
    <div style={{ width: 664, margin: "auto", height: 200 }}>
      <ConfigProvider
        theme={{
          token: {
            colorBgContainer: "#000000",
          },
        }}
      >
        <Carousel arrows infinite={true}>
          {teammates.map((teammate, index) => (
            <div key="index">
              <div className="teammate">
                <p className="title"> "KO-FEE KHÔNG CHỈ LÀ CÀ PHÊ"</p>
                <p className="description">{teammate.description}</p>
                <Flex gap={30} align="end">
                  <div>
                    <img
                      className="avatar"
                      src={teammate.image}
                      alt={teammate.name}
                    ></img>
                  </div>
                  <div>
                    <p className="name">{teammate.name}</p>
                    <p className="nghe">{teammate.role}</p>
                  </div>
                </Flex>
              </div>
            </div>
          ))}
        </Carousel>
      </ConfigProvider>
    </div>
  );
}
