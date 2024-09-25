import React from "react";
import "./Header.css";
import { Flex } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const handleProductPage = () => {
    navigate("/products");
  };
  const handleHomePage = () => {
    navigate("/");
  };
  const handleDIYPage = () => {
    navigate("/diy_Koffe");
  };
  const handleCartFinalPage = () => {
    navigate("/cart_final");
  };
  const handleProductDetailPage = () => {
    navigate("/product_detail");
  };
  return (
    <>
      <header>
        <Flex
          style={{ padding: "0 20px", height: 96 }}
          justify="space-between"
          align="center"
        >
          <div>
            <img
              onClick={handleHomePage}
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/Ko-fee_Logo-Heder.png?alt=media&token=e818d248-d5c2-443a-834f-d352a2e6f834"
              alt="Logo"
              style={{ height: "80px" }}
            />
          </div>
          <Flex
            justify="space-around"
            style={{ gap: "40px", fontWeight: "500" }}
          >
            <div className="cursor" onClick={handleHomePage}>
              Về KO-FEE
            </div>
            <div onClick={handleProductPage} className="cursor">
              Sản phẩm
            </div>
            <div className="cursor" onClick={handleDIYPage}>
              DIY cái bịch KO-FEE
            </div>
            <div className="cursor" onClick={handleProductDetailPage}>
              ProductDetail
            </div>
            <div className="cursor">Blog</div>
          </Flex>
          <div>
            <Flex
              justify="space-between"
              style={{ gap: "20px", fontWeight: "bold" }}
            >
              <div className="cursor">
                <SearchOutlined style={{ fontSize: "24px", fontWeight: 400 }} />
              </div>
              <div className="cursor">
                <ShoppingCartOutlined
                  onClick={handleCartFinalPage}
                  style={{ fontSize: "24px", fontWeight: 400 }}
                />
              </div>
            </Flex>
          </div>
        </Flex>
      </header>
    </>
  );
}
