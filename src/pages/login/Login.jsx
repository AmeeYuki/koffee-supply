import React from "react";
import { Form, Input, Button, Typography, message, Row, Col, Flex } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import ara1 from "../../assets/images/ara1.png";
import "./Login.css";

const { Title } = Typography;

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    message.success("Login successful!");
    // Thực hiện đăng nhập tại đây, ví dụ: gọi API
  };

  return (
    <div className="login-container">
      <Row>
        <Col lg={12} md={12} sm={0} xs={0}>
          <img width={"100%"} src={ara1} alt="background"></img>
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <Flex vertical align="center" justify="space-around">
            <Title level={2}>Đăng Nhập</Title>
            <Form
              name="login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  { required: true, message: "Vui lòng nhập tên đăng nhập!" },
                ]}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Tên đăng nhập"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
              >
                <Input.Password
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  placeholder="Mật khẩu"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ backgroundColor: "#1b392d" }}
                >
                  Đăng Nhập
                </Button>
              </Form.Item>
            </Form>
          </Flex>
        </Col>
      </Row>
    </div>
  );
};

export default Login;
