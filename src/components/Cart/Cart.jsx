import { Drawer, Button, Row, Image, Flex, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Cart({
  closeCartDrawer,
  isCartDrawerVisible,
  cartCount,
  cartData,
  setCarts, // Change this to match the Header component
}) {
  const navigate = useNavigate();

  const header = <b>Giỏ hàng</b>;

  // Navigate to order form
  const navigateCartFinal = () => {
    navigate("/order-form");
    closeCartDrawer();
  };

  // Clear cart
  const clearCart = () => {
    localStorage.removeItem("cart"); // Remove from localStorage
    const cartClearedEvent = new Event("cartCleared");
    window.dispatchEvent(cartClearedEvent);
    setCarts([]); // Reset the cart state in Header
    closeCartDrawer();
  };

  // Calculate total price
  const calculateTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + item.finalPrice * item.quantity,
      0
    );
  };

  const footer = (
    <div>
      <hr style={{ fontWeight: 900, marginBottom: 10 }} />
      <Row justify="space-between">
        <p style={{ color: "#1b392d", fontSize: 15, fontWeight: "bold" }}>
          Tổng ({cartCount} sản phẩm)
        </p>
        <p>{calculateTotalPrice().toLocaleString()} VND</p>
      </Row>
      <div
        onClick={() => {
          if (cartCount === 0) {
            message.error(
              "Giỏ hàng của bạn đang trống. Vui lòng thêm sản phẩm trước khi thanh toán."
            ); // Show error message
          } else {
            navigateCartFinal(); // Proceed to checkout if cart is not empty
          }
        }}
        className="make-order-drawer cursor"
      >
        Thanh toán
      </div>

      <Button onClick={clearCart} style={{ marginTop: 10, width: "100%" }}>
        Xóa tất cả đơn hàng
      </Button>
    </div>
  );

  // Handle item removal by index
  const handleRemoveItem = (index) => {
    const updatedCart = cartData.filter((_, i) => i !== index); // Remove item by index
    setCarts(updatedCart); // Update cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync localStorage
    window.dispatchEvent(new Event("cartUpdated")); // Dispatch update event
  };

  // Handle quantity change
  const handleQuantityChange = (index, change) => {
    const updatedCart = cartData.map((item, i) => {
      if (i === index) {
        const newQuantity = item.quantity + change;
        return {
          ...item,
          quantity: Math.max(1, newQuantity), // Ensure at least 1 item
        };
      }
      return item;
    });

    setCarts(updatedCart); // Update cart state
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Sync localStorage
    window.dispatchEvent(new Event("cartUpdated")); // Dispatch update event
  };

  return (
    <div className="drawer-cart">
      <Drawer
        title={header}
        placement="right"
        closable={true}
        size="large"
        onClose={closeCartDrawer}
        open={isCartDrawerVisible}
        footer={footer}
      >
        {cartData.length > 0 ? (
          cartData.map((item, index) => (
            <Flex
              justify="space-between"
              className="item-in-cart"
              key={index}
              align="middle"
              style={{ marginBottom: 16 }}
            >
              <Flex gap={30}>
                <div>
                  <Image
                    src={item.product.image}
                    alt={item.product.productName}
                    width={80}
                    height={80}
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                <Flex vertical justify="space-between">
                  <div>
                    <p style={{ fontFamily: "MyCustomFont", marginBottom: 5 }}>
                      {item.product.productName}
                    </p>
                    {item?.product?.type._id === "66eda5ab30bd8d4bcb684cd7" && (
                      <p type="secondary">
                        {item.weight + " gram "} | {item.size} | {item.bag}
                      </p>
                    )}
                  </div>
                  <p
                    style={{
                      fontSize: "18px",
                      fontWeight: 900,
                      color: "#194000",
                    }}
                  >
                    {item?.finalPrice.toLocaleString()} VND
                  </p>
                </Flex>
              </Flex>

              <Flex vertical justify="space-between" align="end">
                <Button
                  icon={<DeleteOutlined style={{ color: "red" }} />}
                  type="text"
                  onClick={() => handleRemoveItem(index)}
                />
                <Flex
                  style={{
                    border: "1px solid #1b392d",
                    borderRadius: "16px",
                    padding: "10px 0px",
                    width: 100,
                    userSelect: "none",
                  }}
                  justify="space-evenly"
                  align="center"
                >
                  <div
                    className="cursor"
                    onClick={() => handleQuantityChange(index, -1)}
                    style={{ opacity: item.quantity === 1 ? 0.5 : 1 }}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </div>
                  <p>{item.quantity}</p>
                  <div
                    className="cursor"
                    onClick={() => handleQuantityChange(index, 1)}
                  >
                    +
                  </div>
                </Flex>
              </Flex>
            </Flex>
          ))
        ) : (
          <p>Giỏ hàng của bạn trống.</p>
        )}
      </Drawer>
    </div>
  );
}
