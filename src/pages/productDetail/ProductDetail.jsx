import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { Breadcrumb, message, Spin } from "antd";
import ProductSpace from "./ProductSpace";
import UnderProductDetail from "./components/UnderProductDetail";
import { useLazyGetProductByIdQuery } from "../../services/productApi";
import { useNavigate, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); // Get the product ID from the URL
  const [cart, setCart] = useState([]); // Cart state
  const [getProductById, { data: product, isLoading, isError }] =
    useLazyGetProductByIdQuery();
  const navigate = useNavigate();

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart)); // Load cart from localStorage on mount
    }
  }, []);

  // Fetch the product by ID when component mounts or ID changes
  useEffect(() => {
    if (id) {
      getProductById(id);
    }
  }, [id, getProductById]);

  const handleAddToCart = (item) => {
    // Utility function for deep comparison of cart item properties
    const isSameItem = (cartItem, item) =>
      cartItem.productId === item.productId &&
      cartItem.size === item.size &&
      cartItem.weight === item.weight &&
      cartItem.bag === item.bag &&
      cartItem.nameSend === item.nameSend &&
      cartItem.messageSend === item.messageSend;

    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((cartItem) =>
        isSameItem(cartItem, item)
      );

      let updatedCart;
      if (existingItemIndex >= 0) {
        updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += item.quantity;
      } else {
        // If the item does not exist, add it to the cart
        updatedCart = [...prevCart, item];
      }

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Dispatch custom event to notify other components of cart change
      const cartEvent = new Event("cartUpdated");
      window.dispatchEvent(cartEvent);

      // Show success message
      message.success("Item added to cart!");

      return updatedCart; // Return updated cart for state update
    });
  };

  // Optional: Handle removing items from cart, if needed
  const handleRemoveFromCart = (itemToRemove) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((cartItem) => {
        return (
          cartItem.productId !== itemToRemove.productId ||
          cartItem.size !== itemToRemove.size ||
          cartItem.weight !== itemToRemove.weight ||
          cartItem.bag !== itemToRemove.bag
        );
      });

      // Save updated cart to localStorage
      localStorage.setItem("cart", JSON.stringify(updatedCart));

      // Dispatch custom event to notify other components of cart change
      const cartEvent = new Event("cartUpdated");
      window.dispatchEvent(cartEvent);

      // Show success message
      message.success("Item removed from cart!");

      return updatedCart; // Return updated cart for state update
    });
  };

  if (isLoading) {
    return <Spin size="large" />;
  }

  if (isError || !product) {
    return <p>Error loading product details</p>;
  }

  return (
    <div className="product-detail-page">
      <div className="header-breadcrumb ">
        <p
          className="breadcrumb-item"
          onClick={() => {
            navigate("/products");
          }}
        >
          Sản phẩm
        </p>
        <i className="icon-breadcrumb ri-arrow-right-s-line"></i>
        <p className="breadcrumb-item">{product.productName}</p>
      </div>
      <div>
        <ProductSpace product={product} onAddToCart={handleAddToCart} />
      </div>
      <div>
        <UnderProductDetail product={product} />
      </div>
    </div>
  );
}
