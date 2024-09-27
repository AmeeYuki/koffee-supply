import { Col, Collapse, ConfigProvider, Row } from "antd";
import React from "react";

export default function DescriptionMore() {
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
  const items = [
    // {
    //   key: "1",
    //   label: "Hương vị",
    //   children: <p>{text}</p>,
    // },
    {
      key: "2",
      label: "Mô tả sản phẩm",
      children: (
        <div>
          <p>Thôn Cầu Đất, Thành Phố Đà Lạt, Tỉnh Lâm Đồng</p>
          <Row>
            <Col span={4}>
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
              <p>ame</p>
              <p>ame</p>
              <p>ame</p>
            </Col>
          </Row>
        </div>
      ),
    },
    // {
    //   key: "3",
    //   label: "Vùng nguyên liệu",
    //   children: (
    //     <div>
    //       <p>Thôn Cầu Đất, Thành Phố Đà Lạt, Tỉnh Lâm Đồng</p>
    //       <Row>
    //         <Col span={4}>
    //           <p>
    //             <b>Độ cao:</b>
    //           </p>
    //           <p>
    //             <b>Giống:</b>
    //           </p>
    //           <p>
    //             <b>PP canh tác:</b>
    //           </p>
    //         </Col>
    //         <Col>
    //           <p>ame</p>
    //           <p>ame</p>
    //           <p>ame</p>
    //         </Col>
    //       </Row>
    //     </div>
    //   ),
    // },
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
            headerBg: "#ffffff",
          },
        },
      }}
    >
      <Collapse
        expandIconPosition="end"
        items={items}
        defaultActiveKey={["1"]}
        onChange={onChange}
      />
    </ConfigProvider>
  );
}
