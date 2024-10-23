import { Col, Collapse, ConfigProvider, Row } from "antd";
import React from "react";

export default function DescriptionMore({ product }) {
  const items = [
    {
      key: "1",
      label: "Mô tả sản phẩm",
      children: (
        <div
          style={{
            padding: "0px 0px 10px",
            borderBottom: "1px solid #333",
            borderTop: "1px solid #333",
          }}
        >
          <Row>
            <Col span={5}>
              <p>
                <b>Mức rang:</b>
              </p>
              <p>
                <b>Hương vị:</b>
              </p>
              <p>
                <b>Pha chế:</b>
              </p>
            </Col>
            <Col>
              <p>{product?.descriptionMore?.roast_level}</p>
              <p>{product?.descriptionMore?.flavor}</p>
              <p>{product?.descriptionMore?.brewing}</p>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <p style={{ padding: "10px 0px", borderBottom: "1px solid #333" }}>
          Vùng nguyên liệu
        </p>
      ),
      children: (
        <div style={{ padding: "10px 0px", borderBottom: "1px solid #333" }}>
          {/* <p>Thôn Cầu Đất, Thành Phố Đà Lạt, Tỉnh Lâm Đồng</p> */}
          <Row>
            <Col span={5}>
              <p>
                <b>Độ cao:</b>
              </p>
              <p>
                <b>Giống:</b>
              </p>
              <p>
                <b>PP canh tác:</b>
              </p>
            </Col>
            <Col>
              <p>{product?.descriptionMore?.altitude}</p>
              <p>{product?.descriptionMore?.variety}</p>
              <p>{product?.descriptionMore?.cultivation}</p>
            </Col>
          </Row>
        </div>
      ),
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBorder: "#00000000",
        },
        components: {
          Collapse: {
            headerBg: "#fffcea",
            // colorBorder: "#333",
            colorBgContainer: "#fffcea",
          },
        },
      }}
    >
      <Collapse
        expandIconPosition="end"
        items={items}
        // defaultActiveKey={["1"]}
        defaultActiveKey={["1", "2"]}
        onChange={onChange}
      />
    </ConfigProvider>
  );
}
