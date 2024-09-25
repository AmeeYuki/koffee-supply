import React from "react";
import "./ProductDetail.css";
import { Col, Flex, Row } from "antd";
import CarouselImage from "./components/CarouselImage";
import ProductInformation from "./components/ProductInformation";

export default function ProductSpace() {
  return (
    <div className="product-space">
      <Row>
        <Col md={10} sm={24}>
          <div className="image">
            <CarouselImage />
          </div>
        </Col>
        <Col md={12} sm={24} offset={2}>
          <ProductInformation />
        </Col>
      </Row>
    </div>
  );
}
