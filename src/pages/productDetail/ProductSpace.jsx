import "./ProductDetail.css";
import { Col, Row } from "antd";
import CarouselImage from "./components/CarouselImage";
import ProductInformation from "./components/ProductInformation";
import DescriptionMore from "./components/DescriptionMore";

export default function ProductSpace({ onAddToCart, product }) {
  return (
    <div className="product-space">
      <Row>
        <Col style={{}} md={10} sm={24}>
          <div className="image">
            <CarouselImage product={product} />
          </div>
          <div style={{}}>
            <DescriptionMore product={product} />
          </div>
        </Col>
        <Col md={12} sm={24} offset={2}>
          <ProductInformation onAddToCart={onAddToCart} product={product} />
        </Col>
      </Row>
    </div>
  );
}
