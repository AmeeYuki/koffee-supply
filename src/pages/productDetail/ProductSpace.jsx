import React from "react";
import "./ProductDetail.css";
import { Col, Flex, Row } from "antd";
import CarouselImage from "./components/CarouselImage";
import ProductInformation from "./components/ProductInformation";

export default function ProductSpace({ onAddToCart, product }) {
  return (
    <div className="product-space">
      <Row>
        <Col md={10} sm={24}>
          <div className="image">
            <CarouselImage product={product} />
          </div>
        </Col>
        <Col md={12} sm={24} offset={2}>
          <ProductInformation onAddToCart={onAddToCart} product={product} />
        </Col>
      </Row>
    </div>
  );
}
