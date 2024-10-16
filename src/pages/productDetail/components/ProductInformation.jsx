import React, { useState, useEffect } from "react";
import { Col, Flex, Row, Tag, message } from "antd";
import containerIcon from "../../../assets/icon/Container.png";
import DescriptionMore from "./DescriptionMore";

export default function ProductInformation({ onAddToCart, product }) {
  const [selectedSize, setSelectedSize] = useState("Nguyên Hạt"); // Default to first value (text)
  const [selectedWeight, setSelectedWeight] = useState(100); // Default to first weight value
  const [selectedBag, setSelectedBag] = useState("Xanh"); // Default to the color "Xanh"
  const [quantity, setQuantity] = useState(1); // Default quantity value
  const [finalPrice, setFinalPrice] = useState(product?.price); // Default final price

  useEffect(() => {
    // If the product type matches a specific ID, calculate final price based on weight
    if (product?.type._id === "66eda5ab30bd8d4bcb684cd7") {
      setFinalPrice(((product?.price * selectedWeight) / 1000) * quantity);
    } else {
      // Otherwise, just set the price as it is
      setFinalPrice(product?.price * quantity);
    }
  }, [selectedWeight, quantity, product]);

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
      productId: product._id,
      product: product,
      size: selectedSize,
      weight: selectedWeight,
      bag: selectedBag,
      quantity,
      finalPrice,
    };
    onAddToCart(newItem); // Pass the new item to the parent function
  };

  return (
    <div className="product-detail">
      <p className="title">{product?.productName}</p>
      <div>
        {product?.tags.map((tag, index) => (
          <Tag
            key={index}
            color="red"
            style={{ fontWeight: "600", color: "red", marginBottom: 16 }}
          >
            {tag?.tagName}
          </Tag>
        ))}
      </div>
      <div>
        <p style={{ marginBottom: 16, color: "#1b392d", fontSize: 16 }}>
          <b>Loại sản phẩm: </b>
          {product?.type?.typeName}
        </p>
      </div>
      <p className="description">{product?.description} </p>
      {product?.type._id === "66eda5ab30bd8d4bcb684cd7" && (
        <>
          {/* Size Selection */}
          <div className="radio-group">
            <p
              style={{ marginBottom: 16, color: "#63A484", fontWeight: "700" }}
            >
              Cỡ hạt:
            </p>
            {["Nguyên Hạt", "Thô", "Vừa", "Mịn"].map((value) => (
              <button
                key={value}
                className={`radio-button ${
                  selectedSize === value ? "selected" : ""
                }`}
                onClick={() => handleSizeSelect(value)}
              >
                {value}
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
            {[100, 250, 500].map((value) => (
              <button
                key={value}
                className={`radio-button-weight ${
                  selectedWeight === value ? "selected" : ""
                }`}
                onClick={() => handleWeightSelect(value)}
              >
                <p className="style-gram">{value} Gram</p>
                <p>
                  <b>
                    {((product?.price * value) / 1000).toLocaleString() +
                      " VND"}
                  </b>{" "}
                  / Bịch
                </p>
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
            {["Xanh", "Đỏ", "Hồng"].map((color) => (
              <button
                key={color}
                className={`radio-button-bag ${
                  selectedBag === color ? "selected" : ""
                }`}
                onClick={() => handleBagSelect(color)}
              >
                <p
                  style={{
                    backgroundColor:
                      color === "Xanh"
                        ? "#1b392d"
                        : color === "Đỏ"
                        ? "#8e2626"
                        : "#e05353",
                    padding: "15px 130px 15px 10px ",
                    borderRadius: "10px",
                    color: "#fff",
                  }}
                  className="style-bag"
                >
                  {color}
                </p>
              </button>
            ))}
          </div>
        </>
      )}
      {/* Quantity Selection */}
      <div className="quantity-selection">
        <p style={{ marginBottom: 16, color: "#63A484", fontWeight: "700" }}>
          Số lượng:
        </p>
        <Flex wrap="wrap" gap={20}>
          <div className="quantity-controls" style={{ width: 170 }}>
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
        className="giao-hang "
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
      {product?.type._id === "66eda5ab30bd8d4bcb684cd7" && (
        <div style={{ width: 600 }}>
          <DescriptionMore product={product} />
        </div>
      )}
    </div>
  );
}
