import React, { useState } from "react";
import "./Footer.css";
import { Button, Col, Flex, Input, notification, Row } from "antd";
import { RightSquareOutlined, SendOutlined } from "@ant-design/icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);

  const validateEmail = (value) => {
    // Simple regex for validating email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSendClick = () => {
    if (!email) {
      notification.error({
        message: "Error",
        description: "Email không được để trống, vui lòng nhập email.",
      });
    } else if (!isValid) {
      notification.error({
        message: "Error",
        description: "Email không hợp lệ, vui lòng thử lại.",
      });
    } else {
      notification.success({
        message: "Success",
        description: "Email hợp lệ và thông tin đã được gửi",
      });
    }
  };

  return (
    <footer>
      <Row
        style={{
          padding: "5% 10%",
        }}
      >
        <Col span={12}>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/LogoKofee_Footer.png?alt=media&token=8eeffc5b-65ee-4d1d-bbc9-37cedc99398c"
            alt="Logo"
            // style={{ height: "80px" }}
          />{" "}
        </Col>
        <Col span={12}>
          <h1 style={{ marginBottom: 20 }}>
            ĐĂNG KÝ ĐỂ NHẬN THÔNG BÁO TỪ KOFFEE NHÉ!
          </h1>
          <Flex gap="20px">
            <Input
              style={{ padding: 20, borderColor: isValid ? "" : "red" }}
              placeholder="Điền email của bạn tại đây"
              value={email}
              onChange={handleEmailChange}
            />
            <SendOutlined
              className="btn-send-information-customer"
              onClick={handleSendClick}
            />
          </Flex>
          <Flex style={{ marginTop: 20 }}>
            <div style={{ width: "100%" }}>
              <p className="link-item">Liên hệ</p>
              <p className="link-item">Blog</p>
              <p className="link-item">Dịch vụ</p>
              <Flex justify="space-between">
                <div>
                  <p className="link-item">Chính sách bảo mật</p>
                </div>
                <div className="icon-contact">
                  <img
                    className="icon"
                    height={40}
                    src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/facebook%20icon.png?alt=media&token=39a0a3ad-55ae-4115-bab7-444777b835ce"
                  ></img>
                  <img
                    className="icon"
                    height={40}
                    src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/instagram%20icon.png?alt=media&token=dc1b95f0-1f36-40dd-9ce7-7c08c878df87"
                  ></img>
                  <img
                    className="icon"
                    height={40}
                    src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/twitterx%20icon.png?alt=media&token=f13bbb1c-748c-4f41-8a26-04e34290ce11"
                  ></img>
                </div>
              </Flex>
            </div>
          </Flex>
        </Col>
      </Row>
    </footer>
  );
}
