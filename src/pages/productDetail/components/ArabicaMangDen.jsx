import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Collapse, ConfigProvider, Flex, Row, theme } from "antd";
import React, { useState } from "react";
import ara1 from "../../../assets/images/ara1.png";
import ara2 from "../../../assets/images/ara2.png";
import ara3 from "../../../assets/images/ara3.png";

export default function ArabicaMangDen() {
  const [activeKey, setActiveKey] = useState("1"); // State to track the active panel

  const headerStyle = {
    fontSize: "18px",
    fontFamily: "MyCustomFont",
    color: "#1b392d",
    borderRadius: "20px",
  };

  const bodyStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#ffffff",
    padding: "30px",
    border: "1px dashed #fff",
    borderRadius: "20px",
  };

  const items = [
    {
      key: "1",
      label: <span style={headerStyle}>Vùng Nguyên Liệu Gốc</span>,
      children: (
        <ul style={bodyStyle}>
          <li>
            Kon Tum, nổi tiếng với điều kiện tự nhiên lý tưởng để trồng cà phê
            Arabica. Với độ cao từ 600 đến 1.000 mét, khí hậu mát mẻ, đất bazan
            màu mỡ và lượng mưa dồi dào, Kon Tum là nơi hoàn hảo để sản xuất cà
            phê Arabica chất lượng cao. Hạt cà phê Arabica từ Kon Tum mang hương
            vị phong phú, mịn màng và hương thơm tinh tế, đáp ứng nhu cầu của
            những người yêu cà phê khó tính nhất.
          </li>
          <li>
            Cà phê Arabica, hay còn gọi là "cà phê núi", nổi tiếng với hương vị
            phong phú, mịn màng và hương thơm tinh tế. Được trồng ở độ cao từ
            600 đến 2.000 mét, Arabica hấp thụ đầy đủ khí hậu mát mẻ, đất đai
            màu mỡ và lượng mưa dồi dào.
          </li>
        </ul>
      ),
      // style: panelStyle,
    },
    {
      key: "2",
      label: <span style={headerStyle}>Quy Trình Chế Biến</span>,
      children: (
        <ul style={bodyStyle}>
          <li>
            Ko-Fee sẽ lựa chọn những hạt chín đều, căng mọng, phơi dưới ánh nắng
            mặt trời hoặc máy sấy để giảm độ ẩm từ 60-70% xuống 10-12%. Sau đó
            sẽ phơi trong thời gian từ 15-30 ngày.
          </li>
          <li>
            Sau đó Ko-Fee sẽ đem hạt cà phê đi xay xát để loại bỏ vỏ trấu và vỏ
            lụa, lấy nhân cà phê, sàng để loại bỏ tạp chất. Và phân loại cà phê
            theo kích thước và trọng lượng.
          </li>
          <li>
            Cuối cùng Ko-Fee sẽ rang cà phê ở mức độ mong muốn để tạo hương vị
            và màu sắc đặc trưng.
          </li>
        </ul>
      ),
    },
    {
      key: "3",
      label: <span style={headerStyle}>Kỹ Thuật Rang Thuần Mộc</span>,
      children: (
        <ul style={bodyStyle}>
          <li>
            Cà phê Robusta từ Đồi Ba Chấm với kỹ thuật rang tinh tế. Quá trình
            rang được thực hiện cẩn thận để đảm bảo mỗi hạt cà phê đạt đến mức
            hoàn hảo, giữ nguyên hương vị mạnh mẽ và đậm đà. Kỹ thuật rang của
            chúng tôi tập trung vào việc điều chỉnh nhiệt độ và thời gian rang
            chính xác, giúp hạt cà phê Robusta từ Đồi Ba Chấm phát huy hết tiềm
            năng về hương thơm và vị ngon, mang đến trải nghiệm cà phê đặc biệt
            cho người thưởng thức.
          </li>
        </ul>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);

    setActiveKey(key); // Update the active key when a panel is clicked
  };

  return (
    <div className="container">
      <Flex justify="space-around" wrap="wrap">
        <div style={{ width: "40%" }}>
          <ConfigProvider
            theme={{
              token: {
                colorBorder: "#00000",
                lineWidth: "100%",
              },
              components: {
                Collapse: {
                  lineWidth: 30,
                  contentBg: "#1b392d",
                  headerBg: "#ddeee3",
                },
              },
            }}
          >
            <Collapse
              style={{ width: "100%" }}
              items={items}
              accordion
              defaultActiveKey={["1"]}
              onChange={onChange}
              expandIconPosition="end"
            />
          </ConfigProvider>
        </div>
        <div style={{}}>
          {activeKey == "1" ? (
            <img
              className="image-bean-to-brew"
              src={ara1}
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : activeKey == "2" ? (
            <img
              className="image-bean-to-brew"
              src={ara2}
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : activeKey == "3" ? (
            <img
              className="image-bean-to-brew"
              src={ara3}
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : (
            <img
              className="image-bean-to-brew"
              src={ara1}
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          )}
        </div>
      </Flex>
    </div>
  );
}
