import React, { useState } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Typography,
  Divider,
  Row,
  Col,
  Flex,
  Image,
} from "antd";

import { VietNamAddress } from "../../data/vietnamAddress"; // Adjust the path as needed
const { Title, Text } = Typography;
const { Option } = Select;

export default function OrderForm() {
  const [form] = Form.useForm();
  const [selectedProvince, setSelectedProvince] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
    const province = VietNamAddress.find((p) => p.Id === value);
    setDistricts(province ? province.Districts : []);
    setWards([]); // Reset wards when province changes
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    const district = districts.find((d) => d.Id === value);
    setWards(district ? district.Wards : []);
  };
  const handleSubmit = (values) => {
    console.log("Form values: ", values);
  };

  return (
    <Row className="container" style={{ padding: "20px" }}>
      <Col lg={11} md={11} sm={24} xs={24}>
        <Title level={3}>Liên hệ</Title>
        <Form form={form} onFinish={handleSubmit}>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Title level={4}>Thông tin giao hàng</Title>

          <Form.Item
            name="fullName"
            rules={[
              { required: true, message: "Please input your last name!" },
            ]}
          >
            <Input placeholder="Họ và Tên" />
          </Form.Item>

          {/* thanh pho */}
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Select
              placeholder="Chọn Tỉnh/Thành phố"
              onChange={handleProvinceChange}
            >
              {VietNamAddress.map((province) => (
                <Select.Option key={province.Id} value={province.Id}>
                  {province.Name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          {/* District selection */}
          <Form.Item
            name="district"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Select
              placeholder="Chọn Quận/Huyện"
              onChange={handleDistrictChange}
              disabled={!districts.length} // Disable if no province is selected
            >
              {districts.map((district) => (
                <Select.Option key={district.Id} value={district.Id}>
                  {district.Name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          {/* Ward selection */}
          <Form.Item
            name="ward"
            rules={[{ required: true, message: "Please input your city!" }]}
          >
            <Select placeholder="Chọn Phường/Xã" disabled={!wards.length}>
              {wards.map((ward) => (
                <Select.Option key={ward.Id} value={ward.Id}>
                  {ward.Name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            name="address"
            rules={[{ required: true, message: "Please input your address!" }]}
          >
            <Input placeholder="Địa chỉ" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              { required: true, message: "Please input your phone number!" },
            ]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>

          <Divider />

          <Title level={4}>Phương thức giao hàng</Title>
          <Text>GHTK - 30,000 VND</Text>
          <div
            style={{
              color: "#8e2626",
              backgroundColor: "#fbe5e5",
              textAlign: "center",
              padding: "10px",
              marginTop: 10,
              border: "1px dashed, #8e2626",
              borderRadius: 10,
            }}
          >
            <b>MIỄN PHÍ GIAO HÀNG</b> CHO ĐƠN TRÊN 500.000 VND
          </div>
          <Divider />

          <Title level={4}>Phương thức thanh toán</Title>

          <Flex justify="space-between">
            <Title level={5}>Phương thức thanh toán</Title>
            <Text value="cod">Thanh toán khi nhận hàng</Text>
          </Flex>

          <Button
            style={{
              backgroundColor: "#1b392d",
              padding: "20px",
              marginTop: 10,
            }}
            type="primary"
            htmlType="submit"
            block
          >
            Thanh Toán
          </Button>
        </Form>
      </Col>

      <Col
        lg={11}
        md={11}
        sm={24}
        xs={24}
        offset={1}
        style={{ paddingLeft: "20px", borderLeft: "1px solid #e0e0e0" }}
      >
        <Title level={3}>Giỏ hàng</Title>
        <Flex align="center" justify="space-between">
          <div>
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/kofee_red.png?alt=media&token=408dd306-8bd7-478d-92c2-4c025644fd6e"
              alt="ima"
              width={50}
            ></Image>
            <Text style={{ marginLeft: 10 }}>Arabica Măng Đen x 1</Text>
          </div>
          <Text>300,000 VND</Text>
        </Flex>
        <Divider />
        <div>
          <Text>Tổng phụ</Text>
          <Text style={{ float: "right" }}>300,000 VND</Text>
        </div>
        <div>
          <Text>Vận chuyển</Text>
          <Text style={{ float: "right" }}>30,000 VND</Text>
        </div>
        <Divider />
        <div>
          <Text strong>Tổng</Text>
          <Text strong style={{ float: "right" }}>
            330,000 VND
          </Text>
        </div>
      </Col>
    </Row>
  );
}
