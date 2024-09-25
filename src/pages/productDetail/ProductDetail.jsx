import React from "react";
import "./ProductDetail.css";
import { Breadcrumb } from "antd";
import ProductSpace from "./ProductSpace";
export default function ProductDetail() {
  return (
    <div className="product-detail-page">
      <div className="header-breadcrumb">
        <p className="breadcrumb-item">Sản phẩm</p>
        <i className="icon-breadcrumb ri-arrow-right-s-line"></i>
        <p className="breadcrumb-item">Arabica Măng Đen</p>
      </div>
      <div>
        <ProductSpace />
      </div>
    </div>
  );
}
