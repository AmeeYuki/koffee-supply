import { Tag } from "antd";
import React, { useState } from "react";

export default function ProductInformation() {
  const [selectedSize, setSelectedSize] = useState(1); // Default to first value
  const [selectedWeight, setSelectedWeight] = useState(1); // Default to first weight value
  const [selectedBag, setSelectedBag] = useState(1); // Default to first weight value

  const handleSizeSelect = (value) => {
    setSelectedSize(value);
    console.log("Selected size:", value);
  };

  const handleWeightSelect = (value) => {
    setSelectedWeight(value);
    console.log("Selected weight:", value);
  };
  const handleBagSelect = (value) => {
    setSelectedBag(value);
    console.log("Selected bag:", value);
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
                  <b>200.000 </b>/ Bịch
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
              <>
                <p
                  style={{
                    backgroundColor: "#1b392d",
                    padding: "10px 40px 10px 10px ",
                  }}
                  className="style-bag"
                >
                  Xanh
                </p>
              </>
            )}
            {value === 2 && (
              <>
                <p style={{ backgroundColor: "#8e2626" }} className="style-bag">
                  Đỏ
                </p>
              </>
            )}
            {value === 3 && (
              <>
                <p style={{ backgroundColor: "#e05353" }} className="style-bag">
                  Hồng
                </p>
              </>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
