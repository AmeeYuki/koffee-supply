import { motion } from "framer-motion";
import { X } from "lucide-react";

const ProductDetailModal = ({ product, isOpen, onClose }) => {
  if (!isOpen || !product) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-gray-800 rounded-lg shadow-lg p-6 max-w-lg w-full relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
          onClick={onClose}
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold text-gray-100 mb-4">
          {product.productName}
        </h2>
        <img
          src={product.image}
          alt={product.productName}
          style={{ objectFit: "contain" }}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
        <p className="text-gray-300 mb-2">
          <strong>Category:</strong> {product.type.typeName}
        </p>
        <p className="text-gray-300 mb-2">
          <strong>Price:</strong> {product.price.toLocaleString("vi-VN")}vnđ
        </p>
        <p className="text-gray-300">
          <strong>Description:</strong> {product.description}
        </p>
      </motion.div>
    </motion.div>
  );
};

export default ProductDetailModal;
