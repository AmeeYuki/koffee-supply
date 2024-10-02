import React, { useState, useEffect } from "react";
import "./Header.css";
import { Flex, Drawer, Badge } from "antd";
import { SearchOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";

export default function Header() {
  const navigate = useNavigate();
  const [isCartDrawerVisible, setCartDrawerVisible] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const fetchCartCount = () => {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        const cart = JSON.parse(cartData);
        setCarts(cart);
        setCartCount(cart.length);
      } else {
        setCarts([]);
        setCartCount(0);
      }
    };

    fetchCartCount(); // Fetch initial cart count

    const handleCartUpdate = () => {
      fetchCartCount(); // Refresh cart count when updated
    };

    const handleCartCleared = () => {
      setCarts([]); // Clear cart on cartCleared event
      setCartCount(0); // Reset cart count
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    window.addEventListener("cartCleared", handleCartCleared);

    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      window.removeEventListener("cartCleared", handleCartCleared);
    };
  }, []);

  // Show the cart drawer
  const showCartDrawer = () => {
    setCartDrawerVisible(true);
  };

  // Close the cart drawer
  const closeCartDrawer = () => {
    setCartDrawerVisible(false);
  };

  return (
    <>
      <header>
        <Flex
          style={{ padding: "0 20px", height: 96 }}
          justify="space-between"
          align="center"
        >
          <div>
            <img
              onClick={() => navigate("/")}
              src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/Ko-fee_Logo-Heder.png?alt=media&token=e818d248-d5c2-443a-834f-d352a2e6f834"
              alt="Logo"
              style={{ height: "80px" }}
            />
          </div>
          <Flex
            justify="space-around"
            style={{ gap: "40px", fontWeight: "500" }}
          >
            <div className="cursor" onClick={() => navigate("/")}>
              Về KO-FEE
            </div>
            <div onClick={() => navigate("/products")} className="cursor">
              Sản phẩm
            </div>
            <div className="cursor" onClick={() => navigate("/diy_Koffe")}>
              DIY cái bịch KO-FEE
            </div>
            <div className="cursor" onClick={() => navigate("/")}>
              Blog
            </div>
          </Flex>
          <div>
            <Flex
              justify="space-between"
              style={{ gap: "20px", fontWeight: "bold" }}
            >
              <div className="cursor">
                <SearchOutlined style={{ fontSize: "24px", fontWeight: 400 }} />
              </div>
              <div onClick={showCartDrawer} className="cursor">
                <Badge count={cartCount}>
                  <ShoppingCartOutlined
                    style={{ fontSize: "24px", fontWeight: 400, color: "#fff" }}
                  />
                </Badge>
              </div>
            </Flex>
          </div>
        </Flex>
      </header>

      <Cart
        cartData={carts}
        cartCount={cartCount}
        setCartCount={setCartCount} // Pass the setter to update the count from Cart component
        setCarts={setCarts} // Pass setter to update cart data
        closeCartDrawer={closeCartDrawer}
        isCartDrawerVisible={isCartDrawerVisible}
      />
    </>
  );
}
