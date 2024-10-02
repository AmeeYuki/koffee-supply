// src/components/OrderDetailsModal.js

import React from "react";
import { Col, ConfigProvider, Flex, Modal, Row, Table, Tag } from "antd"; // Import Table from Ant Design
import dayjs from "dayjs";
import { useGetAllOrderQuery } from "../../services/orderAPI";

const OrderDetailsModal = ({ isVisible, onClose, orderId }) => {
  const { data: orders, isLoading } = useGetAllOrderQuery(); // Fetch all orders
  const order = orders?.find((o) => o._id === orderId); // Find the specific order
  console.log(order);

  if (isLoading) {
    return <p>Loading order details...</p>;
  }

  if (!order) {
    return <p>.</p>;
  }

  // Define columns for the order details table
  const columns = [
    {
      title: "Item Name",
      dataIndex: "productName",
      render: (text, record) => <span>{record.productId.productName}</span>,
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
      key: "quantity",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (_, record) =>
        `${record?.productId.price.toLocaleString("vi-VN")} vnđ`, // Format price
    },
    {
      title: "Total",
      dataIndex: "total",
      key: "total",
      render: (_, record) => `${record.finalPrice.toLocaleString("vi-VN")} vnđ`, // Calculate total
    },
  ];

  return (
    <Modal
      title="Order Details"
      visible={isVisible}
      onCancel={onClose}
      footer={null}
      width={800} // Set a width for better visibility
    >
      <Row>
        <Col span={11}>
          {" "}
          <p>
            <strong>Order ID:</strong> {order._id}
          </p>
          <p>
            <strong>Customer:</strong> {order.customerName}
          </p>
          <p>
            <strong>Phone:</strong> {order.phone}
          </p>
        </Col>
        <Col span={11} offset={1}>
          {" "}
          <p>
            <strong>Status:</strong>{" "}
            <Tag
              color={
                order.orderStatus === 0
                  ? "yellow"
                  : order.orderStatus === 1
                  ? "green"
                  : order.orderStatus === 2
                  ? "blue"
                  : order.orderStatus === 3
                  ? "purple"
                  : order.orderStatus === 4
                  ? "red"
                  : "default" // Default color for any unhandled orderStatus
              }
            >
              {order.orderStatus === 0
                ? "Pending"
                : order.orderStatus === 1
                ? "Approved"
                : order.orderStatus === 2
                ? "Shipped"
                : order.orderStatus === 3
                ? "Completed"
                : order.orderStatus === 4
                ? "Canceled"
                : "Unknown"}{" "}
              {/* Default label for unhandled status */}
            </Tag>
          </p>
          <p>
            <strong>Created At:</strong>{" "}
            {dayjs(order.createdAt).format("HH:mm DD-MM-YY")}
          </p>
          <p>
            <strong>Approved By:</strong>{" "}
            {order.approveBy ? order.approveBy : "None"}
          </p>
        </Col>
      </Row>
      <Table
        dataSource={order.orderDetail} // Use the orderDetails array from the order
        columns={columns}
        rowKey="_id" // Assuming each order detail has a unique key
        pagination={false} // Disable pagination for simplicity
      />
      <br />
      <Flex justify="space-between">
        <p>
          <strong>Price:</strong>
        </p>
        <p>{order.totalPrice.toLocaleString("vi-VN")} vnđ</p>
      </Flex>
      <Flex justify="space-between">
        <p>
          <strong>Shipping Fee:</strong>
        </p>
        <p>{order.shippingFee.toLocaleString("vi-VN")} vnđ</p>
      </Flex>
      <br />
      <hr />
      <Flex style={{ fontSize: 16, fontWeight: 800 }} justify="space-between">
        <p>
          <strong>Total:</strong>
        </p>
        <p>
          {(order.shippingFee + order.totalPrice).toLocaleString("vi-VN")} vnđ
        </p>
      </Flex>
    </Modal>
  );
};

export default OrderDetailsModal;
