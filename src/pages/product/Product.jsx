import { Checkbox, Col, ConfigProvider, Flex, Row, Spin } from "antd";
import "./Product.css";
import ProductList from "./ProductList";
import { useGetAllProductQuery } from "../../services/productApi";
import { useGetTypesQuery } from "../../services/typeApi";
import { useState } from "react";

export default function Product() {
  const {
    data: products,
    errorProduct,
    isLoadingProduct,
  } = useGetAllProductQuery();
  const { data: types, errorType, isLoadingType } = useGetTypesQuery();

  // State to keep track of selected types
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Handle type filter change
  const handleTypeChange = (checkedValues) => {
    setSelectedTypes(checkedValues);
  };

  // Filter products based on selected types
  const filteredProducts = products?.filter(
    (product) =>
      selectedTypes.length === 0 ||
      selectedTypes.includes(product.type.typeName)
  );

  return (
    <>
      {isLoadingProduct && isLoadingType ? (
        <Spin
          size="large"
          style={{ display: "flex", justifyContent: "center" }}
        />
      ) : errorProduct || errorType ? (
        <p>Something went wrong</p>
      ) : (
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
                      <i className="ri-filter-2-line"></i> Filter
                    </p>
                  </div>
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
                      {types?.map((type) => (
                        <Checkbox
                          className="check-box"
                          key={type._id}
                          value={type.typeName}
                          onChange={(e) => {
                            const checked = e.target.checked;
                            const value = type.typeName;
                            if (checked) {
                              handleTypeChange([...selectedTypes, value]);
                            } else {
                              handleTypeChange(
                                selectedTypes.filter((t) => t !== value)
                              );
                            }
                          }}
                        >
                          {type.typeName}
                        </Checkbox>
                      ))}
                    </ConfigProvider>
                  </Flex>
                </div>
              </div>
            </Col>

            <Col span={16} offset={1}>
              <ProductList
                // Display filtered products
                products={filteredProducts}
              />
            </Col>
          </Row>
        </div>
      )}
    </>
  );
}
