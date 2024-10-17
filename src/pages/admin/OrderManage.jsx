import { CheckCircle, Clock, DollarSign, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

import Header from "../../components/common/Header";
import StatCard from "../../components/common/StatCard";
import OrdersTable from "../../components/orders/OrdersTable";
import { useGetAllOrderQuery } from "../../services/orderApi";

export default function OrdersPage() {
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
    completedOrders: orders
      .filter((order) => order.orderStatus === 3)
      .length.toString(), // Completed orders
    totalRevenue:
      orders
        .filter((order) => order.orderStatus === 3) // Only include completed orders
        .reduce((total, order) => total + order.totalPrice, 0)
        .toLocaleString("vi-VN") + " vnđ", // Total revenue formatted
  };

  if (isLoadingOrder) {
    return <p>Loading orders...</p>;
  }

  if (errorOrder) {
    return <p>Error fetching orders: {errorOrder.message}</p>;
  }

  return (
    <div className="flex-1 relative z-10 overflow-auto">
      <Header title={"Orders"} />

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
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
            name="Completed Orders"
            icon={CheckCircle}
            color="#10B981"
            value={orderStats.completedOrders}
          />
          <StatCard
            name="Total Revenue"
            icon={DollarSign}
            value={orderStats.totalRevenue}
            color="#EF4444"
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* <DailyOrders /> */}
          {/* <OrderDistribution /> */}
        </div>

        <OrdersTable orders={orders} isLoadingOrder={isLoadingOrder} />
      </main>
    </div>
  );
}
