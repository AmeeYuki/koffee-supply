import { Checkbox, Col, ConfigProvider, Flex, Row } from "antd";
import "./Product.css";
import ProductList from "./ProductList";
import { useGetAllProductQuery } from "../../services/productApi";

export default function Product() {
  const { data: products, error, isLoading } = useGetAllProductQuery();

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="product-page" style={{ height: "100%" }}>
      <div className="header">
        <p className="title font-family-custom">BỊCH KO-FEE RANG XAY</p>
      </div>
      <Row>
        <Col span={6}>
          <div className="filter-space">
            <div className="filter-item">
              <div>
                <p className="header">
                  <i className="ri-filter-2-line"></i>Filter
                </p>
              </div>
            </div>
            <div className="filter-item">
              <p className="sub-header">Nguồn gốc</p>
              <Flex vertical>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimaryHover: "#1b392d",
                      colorPrimary: "#1b392d",
                      colorPrimaryBorder: "#1b392d",
                    },
                  }}
                >
                  <Checkbox className="check-box" onChange={onChange}>
                    KonTum
                  </Checkbox>
                  <Checkbox className="check-box" onChange={onChange}>
                    Măng Đen
                  </Checkbox>
                </ConfigProvider>
              </Flex>
            </div>
            <div className="filter-item">
              <p className="sub-header">Hạt KO-FEE</p>
              <Flex vertical>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimaryHover: "#1b392d",
                      colorPrimary: "#1b392d",
                      colorPrimaryBorder: "#1b392d",
                    },
                  }}
                >
                  <Checkbox className="check-box" onChange={onChange}>
                    Robusta
                  </Checkbox>
                  <Checkbox className="check-box" onChange={onChange}>
                    Arabica
                  </Checkbox>
                  <Checkbox className="check-box" onChange={onChange}>
                    Blend
                  </Checkbox>
                </ConfigProvider>
              </Flex>
            </div>
            <div className="filter-item">
              <p className="sub-header">Loại sản phẩm</p>
              <Flex vertical>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimaryHover: "#1b392d",
                      colorPrimary: "#1b392d",
                      colorPrimaryBorder: "#1b392d",
                    },
                  }}
                >
                  <Checkbox className="check-box" onChange={onChange}>
                    Cà phê
                  </Checkbox>
                  <Checkbox className="check-box" onChange={onChange}>
                    Ly
                  </Checkbox>
                </ConfigProvider>
              </Flex>
            </div>
          </div>
        </Col>
        <Col span={16} offset={1}>
          <ProductList
            error={error}
            isLoading={isLoading}
            products={products}
          />
        </Col>
      </Row>
    </div>
  );
}
