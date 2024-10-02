import React, { useState, useEffect } from "react";
import {
  Form,
  Input,
  Select,
  Button,
  Typography,
  Divider,
  Row,
  Col,
  Image,
  Flex,
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
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    const handleCartUpdate = () => {
      const storedCart = localStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };

    window.addEventListener("cartUpdated", handleCartUpdate);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
    };
  }, []);

  const handleProvinceChange = (value) => {
    setSelectedProvince(value);
    const province = VietNamAddress.find((p) => p.Id === value);
    setDistricts(province ? province.Districts : []);
    setWards([]);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    const district = districts.find((d) => d.Id === value);
    setWards(district ? district.Wards : []);
  };

  const handleSubmit = (values) => {
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.finalPrice * item.quantity,
      0
    );

    const shippingCost = totalPrice >= 500000 ? 0 : 30000;

    const formData = {
      ...values,
      cartItems,
      totalPrice,
      shippingCost,
    };

    console.log("Form values: ", formData);
    // Send formData to your API or handle it accordingly
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.finalPrice * item.quantity,
    0
  );

  const shippingCost = totalPrice >= 500000 ? 0 : 30000;

  return (
    <Row className="" style={{ margin: "5%" }}>
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
          <Form.Item
            name="district"
            rules={[{ required: true, message: "Please input your district!" }]}
          >
            <Select
              placeholder="Chọn Quận/Huyện"
              onChange={handleDistrictChange}
              disabled={!districts.length}
            >
              {districts.map((district) => (
                <Select.Option key={district.Id} value={district.Id}>
                  {district.Name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="ward"
            rules={[{ required: true, message: "Please input your ward!" }]}
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
          <Form.Item name="note">
            <Input.TextArea placeholder="Ghi chú" />
          </Form.Item>
          <p style={{ color: "#1b392d", fontWeight: 600 }}>
            Nếu bạn tặng ai món quà này hãy ghi lời chúc cho Kơ-fee biết nhé:
          </p>
          <Form.Item name="letterSend">
            <Input.TextArea placeholder="Lời chúc" />
          </Form.Item>
          <Divider />
          <Title level={4}>Phương thức giao hàng</Title>
          <Text>
            {shippingCost > 0
              ? `GHTK - ${shippingCost.toLocaleString()} VND`
              : "GHTK - MIỄN PHÍ"}
          </Text>
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
      <Col span={1}></Col>
      <Col
        lg={11}
        md={11}
        sm={24}
        xs={24}
        style={{ padding: "0px 20px", marginTop: 10 }}
      >
        <Title level={3}>Giỏ hàng</Title>
        {cartItems.map((item) => (
          <Flex
            key={item.productId}
            style={{ marginBottom: 20 }}
            align="center"
            justify="space-between"
          >
            <Flex align="center">
              <Image
                src={item.product.image}
                alt={item.product.productName}
                width={50}
              />
              <Text style={{ marginLeft: 10 }}>
                {item.product.productName} x {item.quantity}
              </Text>
            </Flex>
            <Text>{item.finalPrice.toLocaleString()} VND</Text>
          </Flex>
        ))}
        <Divider />
        <div>
          <Text>Tổng phụ</Text>
          <Text style={{ float: "right" }}>
            {totalPrice.toLocaleString()} VND
          </Text>
        </div>
        <div>
          <Text>Vận chuyển</Text>
          <Text style={{ float: "right" }}>
            {shippingCost.toLocaleString()} VND
          </Text>
        </div>
        <Divider />
        <div>
          <Text strong>Tổng</Text>
          <Text strong style={{ float: "right" }}>
            {(totalPrice + shippingCost).toLocaleString()} VND
          </Text>
        </div>
      </Col>
    </Row>
  );
}
