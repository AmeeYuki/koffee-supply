import React, { useState, useEffect } from "react";
import { Col, Flex, Row, Tag, message } from "antd";
import containerIcon from "../../../assets/icon/Container.png";
import DescriptionMore from "./DescriptionMore";

export default function ProductInformation({ onAddToCart }) {
  const [selectedSize, setSelectedSize] = useState(1); // Default to first value
  const [selectedWeight, setSelectedWeight] = useState(1); // Default to first weight value
  const [selectedBag, setSelectedBag] = useState(1); // Default to first bag value
  const [quantity, setQuantity] = useState(1); // Default quantity value

  const handleSizeSelect = (value) => {
    setSelectedSize(value);
  };

  const handleWeightSelect = (value) => {
    setSelectedWeight(value);
  };

  const handleBagSelect = (value) => {
    setSelectedBag(value);
  };

  const handleQuantityChange = (type) => {
    if (type === "increment") {
      setQuantity(quantity + 1);
    } else if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const newItem = {
      productId: "66e46da62a8b9f173ec66fb9", // Replace this with the actual product ID
      size: selectedSize,
      weight: selectedWeight,
      bag: selectedBag,
      quantity,
    };
    onAddToCart(newItem); // Pass the new item to the parent function
  };

  return (
    <div className="product-detail">
      <p className="title">Arabica Cầu dất</p>
      <div>
        <Tag color="red" style={{ fontWeight: "600", color: "red" }}>
          Ngon
        </Tag>
        <Tag color="red" style={{ fontWeight: "600", color: "red" }}>
          Ngon
        </Tag>
        <Tag color="red" style={{ fontWeight: "600", color: "red" }}>
          Ngon
        </Tag>
      </div>
      <p className="description">
        Dark, bold, and intensely energizing black coffee with extra strength.
      </p>

      {/* Size Selection */}
      <div className="radio-group">
        <p style={{ marginBottom: 16, color: "#63A484", fontWeight: "700" }}>
          Cỡ hạt:
        </p>
        {[1, 2, 3, 4].map((value) => (
          <button
            key={value}
            className={`radio-button ${
              selectedSize === value ? "selected" : ""
            }`}
            onClick={() => handleSizeSelect(value)}
          >
            {value === 1
              ? "Nguyên Hạt"
              : value === 2
              ? "Thô"
              : value === 3
              ? "Vừa"
              : "Mịn"}
          </button>
        ))}
      </div>

      {/* Weight Selection */}
      <div className="radio-group">
        <p
          style={{
            marginTop: 16,
            marginBottom: 16,
            color: "#63A484",
            fontWeight: "700",
          }}
        >
          Khối lượng:
        </p>
        {[1, 2, 3].map((value) => (
          <button
            key={value}
            className={`radio-button-weight ${
              selectedWeight === value ? "selected" : ""
            }`}
            onClick={() => handleWeightSelect(value)}
          >
            {value === 1 && (
              <>
                <p className="style-gram">100 Gram</p>
                <p>
                  <b>100.000</b> / Bịch
                </p>
              </>
            )}
            {value === 2 && (
              <>
                <p className="style-gram">200 Gram</p>
                <p>
                  <b>200.000</b> / Bịch
                </p>
              </>
            )}
            {value === 3 && (
              <>
                <p className="style-gram">500 Gram</p>
                <p>
                  <b>500.000</b> / Bịch
                </p>
              </>
            )}
          </button>
        ))}
      </div>

      {/* Bag Selection */}
      <div className="radio-group">
        <p
          style={{
            marginTop: 16,
            marginBottom: 16,
            color: "#63A484",
            fontWeight: "700",
          }}
        >
          Túi đựng KOFEE:
        </p>
        {[1, 2, 3].map((value) => (
          <button
            key={value}
            className={`radio-button-bag ${
              selectedBag === value ? "selected" : ""
            }`}
            onClick={() => handleBagSelect(value)}
          >
            {value === 1 && (
              <p
                style={{
                  backgroundColor: "#1b392d",
                  padding: "15px 80px 15px 10px ",
                  borderRadius: "10px",
                }}
                className="style-bag"
              >
                Xanh
              </p>
            )}
            {value === 2 && (
              <p
                style={{
                  backgroundColor: "#8e2626",
                  padding: "15px 80px 15px 10px ",
                  borderRadius: "10px",
                }}
                className="style-bag"
              >
                Đỏ
              </p>
            )}
            {value === 3 && (
              <p
                style={{
                  backgroundColor: "#e05353",
                  padding: "15px 80px 15px 10px ",
                  borderRadius: "10px",
                }}
                className="style-bag"
              >
                Hồng
              </p>
            )}
          </button>
        ))}
      </div>

      {/* Quantity Selection */}
      <div className="quantity-selection">
        <p style={{ marginBottom: 16, color: "#63A484", fontWeight: "700" }}>
          Số lượng:
        </p>
        <Flex wrap="wrap" gap={20}>
          <div className="quantity-controls">
            <button
              className="decrement"
              onClick={() => handleQuantityChange("decrement")}
            >
              -
            </button>
            <span className="quantity-value">{quantity}</span>
            <button
              className="increment"
              onClick={() => handleQuantityChange("increment")}
            >
              +
            </button>
          </div>
          <div>
            <div className="add-to-cart" onClick={handleAddToCart}>
              Thêm vào giỏ hàng
            </div>
          </div>
        </Flex>
      </div>
      <Flex
        justify="space-around"
        align="center"
        gap={20}
        className="giao-hang"
      >
        <img src={containerIcon} width={40}></img>
        <p
          style={{
            textAlign: "center",
            color: "#8e2626",
            fontSize: 14,
            fontWeight: 500,
          }}
        >
          <b style={{ fontWeight: 800 }}>MIỄN PHÍ GIAO HÀNG</b> CHO ĐƠN TRÊN
          500.000 VND
        </p>
      </Flex>
      <div>
        <DescriptionMore />
      </div>
    </div>
  );
}
