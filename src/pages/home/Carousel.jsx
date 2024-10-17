import { Carousel, ConfigProvider, Flex } from "antd";

export default function Carousele() {
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
      name: "DINH KHUONG DUY",
      role: "MC | Media Team",
      description:
        "Tôi tin rằng mỗi tách cà phê đều kể một câu chuyện riêng, và hành trình của tôi là khám phá những câu chuyện ấy.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/KDUY.jpg?alt=media&token=a68238a3-4a29-4b8d-98b6-ff644dcfef02",
    },
    {
      name: "NGUYEN LE VY KHA",
      role: "DEV | Dev Team",
      description:
        "Cà phê không chỉ là thức uống, mà là một trải nghiệm tuyệt vời mà tôi muốn chia sẻ với mọi người.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/KHA.jpg?alt=media&token=90d64f4e-a46d-4f1c-b330-fd443a8366ea",
    },
    {
      name: "HO MINH PHUONG",
      role: "MC | Media Team",
      description:
        "Mỗi lần thưởng thức cà phê là một cuộc phiêu lưu mới, và tôi luôn sẵn lòng tìm kiếm những hương vị độc đáo.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/MPHUONG.jpg?alt=media&token=c0938b18-0ad4-4b72-823f-a5fcec250a23",
    },
    {
      name: "HO MINH TRIET",
      role: "IB | Media Team",
      description:
        "Đằng sau mỗi hạt cà phê là một hành trình dài, và tôi muốn khám phá tất cả những điều thú vị đó.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/TRIET.png?alt=media&token=e8c1fa98-5843-4822-9ee2-401c7e3d9d9f",
    },
    {
      name: "PHAM NGOC HOANG ANH",
      role: "AI | Dev Team",
      description:
        "Hãy để tôi dẫn bạn đến những quán cà phê độc đáo, nơi mà nghệ thuật pha chế cà phê được tôn vinh.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/HA.png?alt=media&token=a90db798-32ad-4696-8e69-54d69224e08e",
    },
  ];
  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgContainer: "#000000",
        },
      }}
    >
      <Carousel autoplay infinite={true}>
        {teammates.map((teammate) => (
          <div key="index">
            <div className="teammate">
              <div>
                <p className="title"> "KO-FEE KHÔNG CHỈ LÀ CÀ PHÊ"</p>
                <p className="description">{teammate.description}</p>
              </div>
              <Flex gap={30} align="end" wrap="wrap" j>
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
  );
}
