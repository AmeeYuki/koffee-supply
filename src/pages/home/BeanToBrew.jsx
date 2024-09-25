import { CaretRightOutlined } from "@ant-design/icons";
import { Col, Collapse, ConfigProvider, Flex, Row, theme } from "antd";
import React, { useState } from "react";

export default function BeanToBrew() {
  const [activeKey, setActiveKey] = useState("1"); // State to track the active panel

  const headerStyle = {
    fontSize: "18px",
    fontFamily: "MyCustomFont",
    color: "#1b392d",
  };

  const bodyStyle = {
    fontSize: "14px",
    fontWeight: "bold",
    color: "#1b392d",
    paddingLeft: "30px",
  };

  const items = [
    {
      key: "1",
      label: <span style={headerStyle}>Hành trình từ nhà vườn</span>,
      children: (
        <p style={bodyStyle}>
          Koffee đi đến những vườn cà phê trên cao nguyên Kon Tum, chọn lọc
          những hạt cà phê hoàn hảo để mang đến ly cà phê thơm ngon, đậm đà cho
          khách hàng.
        </p>
      ),
      // style: panelStyle,
    },
    {
      key: "2",
      label: <span style={headerStyle}>Đến giai đoạn sơ chế</span>,
      children: (
        <p style={bodyStyle}>
          Sơ chế cà phê là một giai đoạn quan trọng quyết định chất lượng cuối
          cùng của hạt cà phê. Quá trình bắt đầu với việc thu hoạch quả cà phê
          chín đỏ, sau đó được lựa chọn kỹ càng để loại bỏ những quả không đạt
          chất lượng. Tiếp theo, quả cà phê được rửa sạch để loại bỏ bụi bẩn và
          tạp chất. Trong sơ chế, quả cà phê được tách vỏ, lên men trong nước để
          loại bỏ lớp nhầy, sau đó rửa sạch và phơi khô. Đối với sơ chế khô, quả
          cà phê được phơi trực tiếp dưới nắng trong khoảng 2-4 tuần. Sau khi
          khô, hạt cà phê được tách vỏ, phân loại theo kích thước và chất lượng,
          rồi bảo quản ở nơi khô ráo để duy trì hương vị tốt nhất.
        </p>
      ),
    },
    {
      key: "3",
      label: <span style={headerStyle}>Bắt đầu rang rang</span>,
      children: (
        <p style={bodyStyle}>
          Rang cà phê là một quá trình biến những hạt cà phê xanh thành những
          hạt cà phê thơm ngon. Trước tiên, bạn cần chọn loại hạt cà phê xanh
          đảm bảo chất lượng để cho ra một mẻ rang với hương vi chuẩn nhất. Sau
          đó, chuẩn bị dụng cụ rang như máy rang cà phê, chảo rang, hoặc máy nổ
          bỏng ngô. Đặt hạt cà phê vào dụng cụ rang và bắt đầu quá trình rang.
          Quan sát và điều chỉnh nhiệt độ, thời gian rang tùy thuộc vào loại cà
          phê và hương vị mong muốn. Khi hạt cà phê đạt đến độ rang mong muốn,
          nhanh chóng làm nguội hạt cà phê để ngăn chặn quá trình rang tiếp tục.
          Cuối cùng, để hạt cà phê nghỉ một thời gian trước khi xay và pha chế.
        </p>
      ),
    },
    {
      key: "4",
      label: <span style={headerStyle}>Bịch KO-FEE của bạn đây</span>,
      children: (
        <p style={bodyStyle}>
          Koffee xin cảm ơn ! Những điều tuyệt với nhất sẽ đến với bạn !
        </p>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);

    setActiveKey(key); // Update the active key when a panel is clicked
  };

  return (
    <div>
      <Row>
        <Col span={11}>
          {activeKey == "1" ? (
            <img
              className="image-bean-to-brew"
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/bean-to-brew1.png?alt=media&token=b7062fab-166a-4221-b640-5d71e5d2831d"
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : activeKey == "2" ? (
            <img
              className="image-bean-to-brew"
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/bean-to-brew2.png?alt=media&token=e43a12a2-deed-435f-b3ec-87ac7e419edf" // Dynamically display the image based on active panel
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : activeKey == "3" ? (
            <img
              className="image-bean-to-brew"
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/bean-to-brew3.png?alt=media&token=81e0847a-e129-4e37-a4a1-be361ebab30e" // Dynamically display the image based on active panel
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : activeKey == "4" ? (
            <img
              className="image-bean-to-brew"
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/kofee_red.png?alt=media&token=408dd306-8bd7-478d-92c2-4c025644fd6e"
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          ) : (
            <img
              className="image-bean-to-brew"
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/bean-to-brew1.png?alt=media&token=b7062fab-166a-4221-b640-5d71e5d2831d"
              alt="bean to brew"
              style={{ width: "100%" }}
            />
          )}
        </Col>
        <Col span={11} offset={2}>
          <ConfigProvider
            theme={{
              token: {
                colorBorder: "#00000",
                lineWidth: "100%",
              },
              components: {
                Collapse: {
                  contentBg: "#f5f5f5",
                  headerBg: "#f5f5f5",
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
              expandIcon={({ isActive, panelKey }) => (
                <div
                  style={{
                    // padding: "20px 14px",
                    backgroundColor: "#1b392d",
                    borderRadius: "100px",

                    height: 40,
                    width: 40,
                  }}
                >
                  <p
                    style={{
                      textAlign: "center",
                      color: "#ffffff",
                      fontFamily: "MyCustomFont",
                      fontSize: "20px",
                      margin: "auto",
                    }}
                  >
                    {panelKey}
                  </p>
                </div> // Show panel number
              )}
            />
          </ConfigProvider>
        </Col>
      </Row>
    </div>
  );
}
