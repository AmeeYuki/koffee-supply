import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import dayjs from "dayjs";
import { ConfigProvider, Table } from "antd"; // Import Ant Design Table
import OrderDetailsModal from "./OrderDetailsModel"; // Import the modal

const OrdersTable = ({ orders = [], isLoadingOrder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility
  const [selectedOrderId, setSelectedOrderId] = useState(null); // State to store selected order ID

  useEffect(() => {
    // Sort orders by 'createdAt' in descending order (newest first)
    const sortedOrders = [...orders].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
    setFilteredOrders(sortedOrders); // Update state with sorted orders
  }, [orders]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orders.filter((o) =>
      o.customerName.toLowerCase().includes(term)
    );
    setFilteredOrders(filtered);
  };

  const handleViewDetails = (orderId) => {
    setSelectedOrderId(orderId); // Set the selected order ID
    setIsModalVisible(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalVisible(false); // Close the modal
    setSelectedOrderId(null); // Reset selected order ID
  };

  const columns = [
    {
      title: "STT",
      render: (_, __, index) => index + 1, // Display the index + 1 for a 1-based index
    },
    {
      title: "Customer",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Total",
      dataIndex: "totalPrice",
      key: "totalPrice",
      render: (text) => `${text.toLocaleString("vi-VN")} vnđ`,
    },
    {
      title: "Status",
      dataIndex: "orderStatus",
      key: "orderStatus",
      render: (status) => (
        <span
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            status === 0
              ? "bg-yellow-100 text-yellow-800" // Pending
              : status === 1
              ? "bg-green-100 text-green-800" // Approved
              : status === 2
              ? "bg-blue-100 text-blue-800" // Shipped
              : status === 3
              ? "bg-purple-100 text-purple-800" // Completed
              : status === 4
              ? "bg-red-100 text-red-800" // Canceled
              : "bg-gray-100 text-gray-800" // Default for any unhandled orderStatus
          }`}
        >
          {status === 0
            ? "Pending"
            : status === 1
            ? "Approved"
            : status === 2
            ? "Shipped"
            : status === 3
            ? "Completed"
            : status === 4
            ? "Canceled"
            : "Unknown"}
          {/* Default label for unhandled status */}
        </span>
      ),
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (date) => dayjs(date).format("HH:mm DD-MM-YY"),
    },

    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <button
          className="text-indigo-400 hover:text-indigo-300"
          onClick={() => handleViewDetails(record._id)} // Pass order ID to open modal
        >
          View
        </button>
      ),
    },
  ];

  if (isLoadingOrder) {
    return <p>Loading orders...</p>; // Simple loading message, can be replaced with a spinner
  }

  return (
    <>
      <motion.div
        className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-100">Order List</h2>
          <div className="relative">
            <input
              type="text"
              placeholder="Search orders..."
              className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={handleSearch}
            />
            <Search
              className="absolute left-3 top-2.5 text-gray-400"
              size={18}
            />
          </div>
        </div>
        <ConfigProvider
          theme={{
            token: {
              colorBgContainer: "#3f567b",
              // bodySortBg: "#333",
            },
            components: {
              Table: {
                headerBg: "#3f567b  ",
                footerColor: "#fff",
                colorTextHeading: "#fff",
                colorText: "#fff",
                borderColor: "#fff",
              },
            },
          }}
        >
          <Table
            dataSource={filteredOrders}
            columns={columns}
            pagination={{ pageSize: 5 }} // You can adjust the number of items per page here
            rowKey="_id"
            style={{ color: "#fff" }}
          />
        </ConfigProvider>
      </motion.div>

      <OrderDetailsModal
        isVisible={isModalVisible}
        onClose={handleCloseModal}
        orderId={selectedOrderId} // Pass the selected order ID to the modal
      />
    </>
  );
};

export default OrdersTable;
