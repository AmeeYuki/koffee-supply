import { Drawer, Button, Row, Image, Flex } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

export default function Cart({
  closeCartDrawer,
  isCartDrawerVisible,
  // cartData,
  cartCount,
}) {
  const navigate = useNavigate();
  const cartData = [
    {
      id: 1,
      productName: "Arabica Măng Đen",
      size: "500gr",
      texture: "Mịn",
      price: 194000,
      imageUrl: "path-to-image",
      quantity: 1, // Initial quantity
    },
    // More products...
  ];

  const header = <b>Giỏ hàng</b>;

  const navigateCartFinal = () => {
    navigate("/order-form");
    closeCartDrawer();
  };
  const footer = (
    <div>
      <hr style={{ fontWeight: 900, marginBottom: 10 }} />
      <Row justify="space-between">
        <p style={{ color: "#1b392d", fontSize: 15, fontWeight: "bold" }}>
          Tổng ({cartCount} sản phẩm)
        </p>
        <p>300,000 VND</p>
        {/* You can dynamically calculate the total */}
      </Row>
      <div onClick={navigateCartFinal} className="make-order-drawer cursor">
        Thanh toán
      </div>
    </div>
  );

  // Handle quantity change
  // const handleQuantityChange = (id, change) => {
  //   setCartData((prevData) =>
  //     prevData.map((item) =>
  //       item.id === id
  //         ? { ...item, quantity: Math.max(1, item.quantity + change) }
  //         : item
  //     )
  //   );
  // };

  // // Handle item removal
  // const handleRemoveItem = (id) => {
  //   setCartData((prevData) => prevData.filter((item) => item.id !== id));
  // };

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
          cartData.map((item) => (
            <Flex
              justify="space-between"
              className="item-in-cart"
              key={item.id}
              align="middle"
              style={{ marginBottom: 16 }}
            >
              {/* Product Image */}
              <Flex gap={30}>
                <div>
                  <Image
                    // src={item.imageUrl} // Product image URL
                    src="https://firebasestorage.googleapis.com/v0/b/kofee-a0348.appspot.com/o/kofee_red.png?alt=media&token=408dd306-8bd7-478d-92c2-4c025644fd6e"
                    alt={item.productName}
                    width={80}
                    height={80}
                    style={{ borderRadius: "8px" }}
                  />
                </div>

                {/* Product Details */}
                <div span={12}>
                  <p style={{ fontFamily: "MyCustomFont" }}>
                    {item.productName}
                  </p>
                  <p type="secondary">
                    {item.size} | {item.texture}
                  </p>
                  <br />
                  <p style={{ fontSize: "16px", color: "#194000" }}>
                    {item.price.toLocaleString()} VND
                  </p>
                </div>
              </Flex>

              {/* Quantity Controls and Delete */}
              <Flex vertical justify="space-between" align="end">
                <Button
                  icon={<DeleteOutlined style={{ color: "red" }} />}
                  type="text"
                  onClick={() => handleRemoveItem(item.id)}
                />
                <Flex
                  style={{
                    border: "1px solid #1b392d",
                    borderRadius: "16px",
                    padding: "10px 0px",
                    width: 100,
                  }}
                  justify="space-evenly"
                  align="center"
                >
                  <div
                    className="cursor"
                    onClick={() => handleQuantityChange(item.id, -1)}
                    disabled={item.quantity <= 1} // Disable if quantity is 1
                  >
                    -
                  </div>
                  <p>{item.quantity}</p>
                  <div
                    className="cursor"
                    onClick={() => handleQuantityChange(item.id, 1)}
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
