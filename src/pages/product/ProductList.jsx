import { Spin } from "antd";
import "./Product.css";
export default function ProductList({ products, isLoading, error }) {
  return (
    <>
      {isLoading ? (
        <Spin
          size="large"
          style={{ display: "flex", justifyContent: "center" }}
        />
      ) : error ? (
        <p>Some thing error</p>
      ) : (
        <div className="product-list-space">
          {products?.map((el) => {
            return (
              <div className="product-item" key={el.id}>
                <div className="product-information">
                  <img src={el?.image} alt={el?.productName}></img>
                  <p className="title ">{el?.productName}</p>
                  <p className="description">{el?.description}</p>
                  <p className="money">{el?.pricePerGram} vnđ </p>
                </div>
                <div className="product-action">
                  <p className="see-more">Tìm hiểu thêm</p>
                  <i className="add-to-cart ri-shopping-cart-2-line"></i>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
