// src/components/OrdersTable.js

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import dayjs from "dayjs";
import OrderDetailsModal from "./OrderDetailsModel"; // Import the modal

const OrdersTable = ({ orders, isLoadingOrder }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredOrders, setFilteredOrders] = useState(orders);
  const [isModalVisible, setIsModalVisible] = useState(false); // State to manage modal visibility
  const [selectedOrderId, setSelectedOrderId] = useState(null); // State to store selected order ID

  useEffect(() => {
    setFilteredOrders(orders); // Ensure orders are updated when prop changes
  }, [orders]);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = orders.filter((o) => o._id.toLowerCase().includes(term));
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

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  STT
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Customer
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Phone
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Total
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Approve By
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody className="divide divide-gray-700">
              {filteredOrders?.map((o, index) => (
                <motion.tr
                  key={o._id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {index + 1}{" "}
                    {/* Display the index + 1 for a 1-based index */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {o.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {o.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                    {o.totalPrice.toLocaleString("vi-VN")} vnđ
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        o.orderStatus === 0
                          ? "bg-yellow-100 text-yellow-800" // Pending
                          : o.orderStatus === 1
                          ? "bg-green-100 text-green-800" // Approved
                          : o.orderStatus === 2
                          ? "bg-blue-100 text-blue-800" // Shipped
                          : o.orderStatus === 3
                          ? "bg-purple-100 text-purple-800" // Completed
                          : o.orderStatus === 4
                          ? "bg-red-100 text-red-800" // Canceled
                          : "bg-gray-100 text-gray-800" // Default for any unhandled orderStatus
                      }`}
                    >
                      {o.orderStatus === 0
                        ? "Pending"
                        : o.orderStatus === 1
                        ? "Approved"
                        : o.orderStatus === 2
                        ? "Shipped"
                        : o.orderStatus === 3
                        ? "Completed"
                        : o.orderStatus === 4
                        ? "Canceled"
                        : "Unknown"}
                      {/* Default label for unhandled status */}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {dayjs(o.createdAt).format("HH:mm DD-MM-YY")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    {o.approveBy ? o.approveBy : "None"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                    <button
                      className="text-indigo-400 hover:text-indigo-300 mr-2"
                      onClick={() => handleViewDetails(o._id)} // Pass order ID to open modal
                    >
                      View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
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
