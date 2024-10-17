// src/components/OrderDetailsModal.js

import React, { useState } from "react";
import {
  Col,
  ConfigProvider,
  Flex,
  Modal,
  Row,
  Table,
  Tag,
  Select,
  Button,
  message,
} from "antd"; // Import necessary components
import dayjs from "dayjs";
import {
  useGetAllOrderQuery,
  useUpdateOrderStatusMutation,
} from "../../services/orderAPI"; // Import mutation for update

const OrderDetailsModal = ({ isVisible, onClose, orderId }) => {
  const { data: orders, isLoading } = useGetAllOrderQuery();
  const [updateOrder] = useUpdateOrderStatusMutation();
  const [status, setStatus] = useState(null);

  const order = orders?.find((o) => o._id === orderId);

  if (isLoading) {
    return <p>Loading order details...</p>;
  }

  if (!order) {
    return <p></p>;
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

  // Handle status change
  const handleStatusChange = (value) => {
    setStatus(value);
  };

  // Submit the status update
  const handleUpdateStatus = async () => {
    try {
      await updateOrder({ orderId: order._id, orderStatus: status }).unwrap();
      message.success("Order status updated successfully!");
      onClose(); // Close modal after successful update
    } catch (error) {
      message.error("Failed to update order status.");
    }
  };

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
          <p>
            <strong>Status: </strong>
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
                  : "default"
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
                : "Unknown"}
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
          <p>
            <strong>Update Status:</strong>{" "}
            <Select
              style={{ width: 200 }}
              placeholder="Select status"
              onChange={handleStatusChange}
              value={status}
            >
              <Select.Option value={0}>Pending</Select.Option>
              <Select.Option value={1}>Approved</Select.Option>
              <Select.Option value={2}>Shipped</Select.Option>
              <Select.Option value={3}>Completed</Select.Option>
              <Select.Option value={4}>Canceled</Select.Option>
            </Select>
          </p>
        </Col>
      </Row>
      <Table
        dataSource={order.orderDetail}
        columns={columns}
        rowKey="_id"
        pagination={false}
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
      <Flex justify="end" style={{ marginTop: 10 }}>
        <Button
          type="primary"
          onClick={handleUpdateStatus}
          disabled={status === null || status === order.orderStatus} // Disable if status is not changed
        >
          Update Status
        </Button>
      </Flex>
    </Modal>
  );
};

export default OrderDetailsModal;
