import React from "react";
import { Button, Typography, Row, Col, Space } from "antd"; // Ant Design components
import { ToolOutlined } from "@ant-design/icons"; // Ant Design icons for a construction theme
import { useNavigate } from "react-router-dom"; // React Router for navigation

const { Title, Text } = Typography;

export default function DIYKoffe() {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate("/"); // Navigate back to the home page
  };

  return (
    <Row
      justify="center"
      align="middle"
      style={{ height: "100vh", textAlign: "center" }}
    >
      <Col>
        <Space direction="vertical" size="large">
          <ToolOutlined style={{ fontSize: "64px", color: "#1890ff" }} />
          <Title level={2}>DIY Koffe - Page Under Development</Title>
          <Text type="secondary">
            We're working hard to bring this page to life. Stay tuned for
            updates!
          </Text>
          <Button type="primary" onClick={handleBackToHome}>
            Back to Home
          </Button>
        </Space>
      </Col>
    </Row>
  );
}
