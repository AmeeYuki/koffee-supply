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
  Space,
  Flex,
  notification,
} from "antd";
import { VietNamAddress } from "../../data/vietnamAddress"; // Adjust the path as needed
import { useCreateOrderMutation } from "../../services/orderAPI"; // Import your createOrder mutation
import { useNavigate } from "react-router-dom";

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
  const [loading, setLoading] = useState(false); // Add loading state

  const navigate = useNavigate();

  // Using the createOrder mutation
  const [createOrder] = useCreateOrderMutation();

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
    const province = VietNamAddress.find((p) => p.Name === value); // Use Name instead of Id
    setDistricts(province ? province.Districts : []);
    setWards([]);
  };

  const handleDistrictChange = (value) => {
    setSelectedDistrict(value);
    const district = districts.find((d) => d.Name === value); // Use Name instead of Id
    setWards(district ? district.Wards : []);
  };

  const handleSubmit = async (values) => {
    // Find the corresponding names for the selected IDs
    setLoading(true); // Set loading to true when submitting

    const selectedProvinceName = VietNamAddress.find(
      (province) => province.Name === selectedProvince
    )?.Name;
    const selectedDistrictName = districts.find(
      (district) => district.Name === selectedDistrict
    )?.Name;
    const selectedWardName = wards.find(
      (ward) => ward.Name === values.ward
    )?.Name;

    // Calculate total price and shipping cost
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.finalPrice * item.quantity,
      0
    );
    const shippingCost = totalPrice >= 500000 ? 0 : 30000;

    const formData = {
      ...values,
      city: selectedProvinceName || values.city, // Set name instead of ID
      district: selectedDistrictName || values.district, // Set name instead of ID
      ward: selectedWardName || values.ward, // Set name instead of ID
      orderDetail: cartItems,
      totalPrice: totalPrice,
      shippingFee: shippingCost,
    };
    try {
      await createOrder(formData).unwrap(); // Use unwrap to handle fulfilled and rejected states
      notification.success({
        message: "Order Created",
        description: "Your order has been placed successfully!",
        placement: "topRight",
      });
      localStorage.removeItem("cart");

      window.dispatchEvent(new Event("cartCleared"));

      navigate("/");
    } catch (error) {
      console.error("Failed to create order:", error);
      notification.error({
        message: "Order Failed",
        description:
          "There was an error creating your order. Please try again.",
        placement: "topRight",
      });
    } finally {
      setLoading(false); // Reset loading state after operation
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.finalPrice * item.quantity,
    0
  );

  const shippingCost = totalPrice >= 500000 ? 0 : 30000;

  return (
    <Row style={{ margin: "5%" }}>
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
            name="customerName"
            rules={[
              { required: true, message: "Please input your full name!" },
            ]}
          >
            <Input placeholder="Họ và Tên" />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[
              { required: true, message: "Please select your province!" },
            ]}
          >
            <Select
              placeholder="Chọn Tỉnh/Thành phố"
              onChange={handleProvinceChange}
            >
              {VietNamAddress.map((province) => (
                <Option key={province.Id} value={province.Name}>
                  {province.Name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="district"
            rules={[
              { required: true, message: "Please select your district!" },
            ]}
          >
            <Select
              placeholder="Chọn Quận/Huyện"
              onChange={handleDistrictChange}
              disabled={!districts.length}
            >
              {districts.map((district) => (
                <Option key={district.Id} value={district.Name}>
                  {district.Name}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            name="ward"
            rules={[{ required: true, message: "Please select your ward!" }]}
          >
            <Select placeholder="Chọn Phường/Xã" disabled={!wards.length}>
              {wards.map((ward) => (
                <Option key={ward.Id} value={ward.Name}>
                  {ward.Name}
                </Option>
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
              border: "1px dashed #8e2626",
              borderRadius: 10,
            }}
          >
            <b>MIỄN PHÍ GIAO HÀNG</b> CHO ĐƠN TRÊN 500.000 VND
          </div>
          <Divider />
          <Title level={4}>Phương thức thanh toán</Title>
          <Space style={{ justifyContent: "space-between" }}>
            <Title level={5}>Phương thức thanh toán</Title>
            <Text>Thanh toán khi nhận hàng</Text>
          </Space>
          <Button
            style={{
              backgroundColor: "#1b392d",
              padding: "20px",
              marginTop: 10,
            }}
            type="primary"
            htmlType="submit"
            block
            loading={loading}
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
                {item?.product?.type._id === "66eda5ab30bd8d4bcb684cd7" && (
                  <p>
                    ({item.bag} - {item.size} - {item.weight}g )
                  </p>
                )}
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
