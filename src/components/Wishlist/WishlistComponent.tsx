"use client";

import { useWishlist } from "@/hooks/WishlistContext";
import Image from "next/image";
import React, { useState } from "react";
import productImage from "../../../public/Product1.jpg";
import Button from "../reusable-components/Button";
import { IoTrashBin, IoHeart } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";


// ---------- Confirmation Modal Component ----------
interface ConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop with blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          
          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-xl max-w-md w-full p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">{message}</p>
              
              <div className="flex justify-end gap-3">
                <Button
                  onClick={onClose}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  Cancel
                </Button>
                <Button
                  onClick={onConfirm}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Confirm
                </Button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

// ---------- Reusable Wishlist Table ----------
interface WishlistTableProps {
  onClear: () => void;
}

const WishlistTable: React.FC<WishlistTableProps> = ({ onClear }) => {
  const { items, removeFromWishlist } = useWishlist();
  // const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemToRemove, setItemToRemove] = useState<string | number | null>(null);

  const handleClearClick = () => {
    setIsModalOpen(true);
  };

  const handleConfirmClear = () => {
    onClear();
    setIsModalOpen(false);
  };

  const handleRemoveClick = (id: string | number) => {
    setItemToRemove(id);
    setIsModalOpen(true);
  };

  const handleConfirmRemove = () => {
    if (itemToRemove) {
      removeFromWishlist(itemToRemove);
    }
    setItemToRemove(null);
    setIsModalOpen(false);
  };

  // const handleAddToCart = (item: Product) => {
  //   addToCart(item);
  //   // Optional: Show success message or toast
  // };

  const getModalConfig = () => {
    if (itemToRemove) {
      const item = items.find(i => i.id === itemToRemove);
      return {
        title: "Remove Item",
        message: `Are you sure you want to remove "${item?.name}" from your wishlist?`,
        onConfirm: handleConfirmRemove
      };
    } else {
      return {
        title: "Clear Wishlist",
        message: "Are you sure you want to clear your entire wishlist? This action cannot be undone.",
        onConfirm: handleConfirmClear
      };
    }
  };

  const modalConfig = getModalConfig();

  return (
    <>
      <div className="w-full max-w-[1280px] mt-8 mx-auto px-4">
        {/* Table */}
        <div className="overflow-x-auto border rounded-lg shadow-sm bg-white dark:bg-gray-800">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-gray-100 dark:bg-gray-700 text-left">
                <th className="p-4 font-medium text-gray-700 dark:text-gray-300">Product</th>
                <th className="p-4 font-medium text-gray-700 dark:text-gray-300">Price</th>
                <th className="p-4 font-medium text-gray-700 dark:text-gray-300">Action</th>
                <th className="p-4 font-medium text-gray-700 dark:text-gray-300 text-center">Remove</th>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <tr>
                  <td colSpan={4} className="p-8 text-center text-gray-500 dark:text-gray-400">
                    <div className="flex flex-col items-center justify-center py-8">
                      <IoHeart size={48} className="text-gray-300 mb-4" />
                      <p className="text-lg font-medium mb-2">Your wishlist is empty</p>
                      <p className="text-gray-500">Start shopping to add items to your wishlist</p>
                    </div>
                  </td>
                </tr>
              ) : (
                items.map((item) => (
                  <tr key={item.id} className="border-b hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                    <td className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={item.image || productImage.src}
                            alt={item.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <span className="font-medium text-gray-900 dark:text-white">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-gray-900 dark:text-white">${item.price.toFixed(2)}</td>
                    <td className="p-4">
                      <Button
                        // onClick={() => handleAddToCart(item)}
                        className="bg-gradient-to-r hover:cursor-pointer from-cyan-600 to-blue-700 text-white px-4 py-2 rounded-md hover:from-cyan-500 hover:to-blue-600 transition-colors"
                      >
                        Add to Cart
                      </Button>
                    </td>
                    <td className="p-4">
                      <Button
                        className="text-red-500 hover:text-red-700 dark:hover:text-red-400 text-xl mx-auto flex items-center justify-center p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-colors"
                        onClick={() => handleRemoveClick(item.id)}
                        aria-label="Remove item"
                      >
                        <IoTrashBin size={20} />
                      </Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Wishlist Actions */}
        {items.length > 0 && (
          <div className="mt-8 flex justify-start">
            <Button
              className="border border-red-500 text-red-600 dark:text-red-400 px-6 py-3 rounded-md hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
              onClick={handleClearClick}
            >
              Clear Wishlist
            </Button>
          </div>
        )}
      </div>

      {/* Confirmation Modal */}
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setItemToRemove(null);
        }}
        onConfirm={modalConfig.onConfirm}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </>
  );
};

// ---------- Wishlist Page Component ----------
export default function WishlistComponent() {
  const { clearWishlist } = useWishlist();

  return (
    <section className="relative w-full min-h-screen flex items-start justify-center py-12 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center my-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Your Wishlist
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {useWishlist().items.length} items saved for later
          </p>
        </div>
        <WishlistTable onClear={clearWishlist} />
      </div>
    </section>
  );
}