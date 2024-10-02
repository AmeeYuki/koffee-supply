import { Spin } from "antd";
import "./Product.css";
import { useNavigate } from "react-router-dom";
export default function ProductList({ products }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="product-list-space">
        {products?.map((el) => {
          return (
            <div className="product-item" key={el.id}>
              <div className="product-information">
                <img src={el?.image} alt={el?.productName}></img>
                <p className="title ">{el?.productName}</p>
                <p className="description">{el?.description}</p>
                <p className="money">
                  {el?.price?.toLocaleString("vi-VN")} vnđ
                </p>
              </div>
              <div className="product-action">
                <p
                  className="see-more"
                  onClick={() => {
                    navigate(`/product_detail/${el._id}`);
                  }}
                >
                  Tìm hiểu thêm
                </p>
                <i
                  onClick={() => {
                    navigate(`/product_detail/${el._id}`);
                  }}
                  className="add-to-cart ri-shopping-cart-2-line"
                ></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
