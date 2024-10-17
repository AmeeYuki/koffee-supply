import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import { useGetAllOrderQuery } from "../../services/orderApi";

export default function Dashboard() {
  const {
    data: orders = [],
    errorOrder,
    isLoadingOrder,
  } = useGetAllOrderQuery();

  const orderStats = {
    totalOrders: orders.length.toString(), // Total orders
    pendingOrders: orders
      .filter((order) => order.orderStatus === 0)
      .length.toString(), // Pending orders
    approvedOrders: orders
      .filter((order) => order.orderStatus === 1)
      .length.toString(), // Approved orders
    completedOrders: orders
      .filter((order) => order.orderStatus === 3)
      .length.toString(), // Completed orders
    canceledOrders: orders
      .filter((order) => order.orderStatus === 4)
      .length.toString(), // Canceled orders
    totalRevenue:
      orders
        .filter((order) => order.orderStatus === 3) // Only include completed orders
        .reduce((total, order) => total + order.totalPrice, 0)
        .toLocaleString("vi-VN") + " vnđ", // Total revenue formatted
    pendingRevenue:
      orders
        .filter((order) => order.orderStatus === 0 || order.orderStatus === 1) // Pending and approved orders
        .reduce((total, order) => total + order.totalPrice, 0)
        .toLocaleString("vi-VN") + " vnđ", // Pending revenue formatted
  };

  // Handle loading and error states
  if (isLoadingOrder) {
    return <p>Loading orders...</p>;
  }

  if (errorOrder) {
    return <p>Error fetching orders: {errorOrder.message}</p>;
  }

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview" />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/* STATS */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatCard
            name="Total Orders"
            icon={ShoppingBag}
            value={orderStats.totalOrders}
            color="#6366F1"
          />
          <StatCard
            name="Pending Orders"
            icon={Clock}
            value={orderStats.pendingOrders}
            color="#F59E0B"
          />
          <StatCard
            name="Approved Orders"
            icon={CheckCircle}
            value={orderStats.approvedOrders}
            color="#1D4ED8" // Change color as needed
          />
          <StatCard
            name="Completed Orders"
            icon={CheckCircle}
            color="#10B981"
            value={orderStats.completedOrders}
          />
          <StatCard
            name="Canceled Orders"
            icon={CheckCircle} // You can change this icon if needed
            color="#EF4444" // Change color as needed
            value={orderStats.canceledOrders}
          />
          <StatCard
            name="Pending Revenue"
            icon={DollarSign} // You can change this icon if needed
            color="#F59E0B" // Change color as needed
            value={orderStats.pendingRevenue}
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#EF4444"
          />
        </motion.div>

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* <SalesOverviewChart /> */}
          {/* <CategoryDistributionChart /> */}
          {/* <SalesChannelChart /> */}
        </div>
      </main>
    </div>
  );
}
