import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { Breadcrumb, message } from "antd";
import ProductSpace from "./ProductSpace";
import UnderProductDetail from "./components/UnderProductDetail";
export default function ProductDetail() {
  const [cart, setCart] = useState([]); // Cart state

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Load cart from localStorage on mount
    }
  }, []);

  const handleAddToCart = (item) => {
    const existingItemIndex = cart.findIndex(
      (cartItem) =>
        cartItem.productId === item.productId &&
        cartItem.size === item.size &&
        cartItem.weight === item.weight &&
        cartItem.bag === item.bag
    );

    let updatedCart;
    if (existingItemIndex >= 0) {
      // If the item exists, update the quantity
      updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity; // Increase the quantity
    } else {
      // If the item does not exist, add it to the cart
      updatedCart = [...cart, item];
    }

    setCart(updatedCart); // Update state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save to localStorage
    message.success("Item added to cart!"); // Show success message
  };

  return (
    <div className="product-detail-page">
      <div className="header-breadcrumb container">
        <p className="breadcrumb-item">Sản phẩm</p>
        <i className="icon-breadcrumb ri-arrow-right-s-line"></i>
        <p className="breadcrumb-item">Arabica Măng Đen</p>
      </div>
      <div className="container">
        <ProductSpace onAddToCart={handleAddToCart} />
      </div>
      <div>
        <UnderProductDetail />
      </div>
    </div>
  );
}
