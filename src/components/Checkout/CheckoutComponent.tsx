"use client";

import React from "react";
import InputField from "../ui/input";
import Button from "../reusable-components/Button";

export default function CheckoutForm() {
  const onCheckout = () => {
    console.log("Placing order...");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl mx-auto p-6 mt-12 ">
      {/* Billing Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Billing To</h2>

        <div className="space-y-3">
          <InputField
            label="Name *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            placeholder="Shakil joy"
          />

          <InputField
            label="Address *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            placeholder="Street address"
          />

          <InputField
            label="Town / City *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            placeholder="Town / City"
          />

          <InputField
            label="Postcode / Zip *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            placeholder="Postcode / Zip"
          />

          <InputField
            label="Email Address *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            type="email"
            placeholder="shakil@gmail.com"
          />

          <InputField
            label="Phone *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            type="tel"
            placeholder="01766556565"
          />
        </div>
      </div>

      {/* Order Section */}
      <div className="border border-gray-200 rounded-md p-6">
        <h2 className="text-xl font-bold mb-6">Your order</h2>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <div className="flex justify-between mb-2 text-sm">
            <span className="font-medium">Product</span>
            <span className="font-medium">Total</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Premium Broad bean × 1</span>
            <span>$40</span>
          </div>
          <div className="flex justify-between mb-2 text-sm">
            <span>Artisan Cold Brew Coffee Concentrate × 1</span>
            <span>$25</span>
          </div>
        </div>

        <div className="flex justify-between mb-2 text-sm">
          <span>Cart Subtotal</span>
          <span>$65</span>
        </div>
        <div className="flex justify-between font-semibold text-lg mb-6">
          <span>Order Total</span>
          <span>$65</span>
        </div>

        <h3 className="text-sm font-semibold mb-2">Payment With Card</h3>
        <div className="border border-gray-300 rounded-md px-4 py-3 mb-6">
          <InputField
            label="Card Number *"
            className="border border-cyan-500 rounded px-3 py-1.5 w-full focus:outline-none"
            type="text"
            placeholder="Card Number"
          />
        </div>

        <Button
          className="w-full bg-gradient-to-r hover:cursor-pointer from-cyan-600 to-blue-700 text-white py-2 rounded-md transition-colors font-medium"
          onClick={onCheckout}>
          Place Order
        </Button>
      </div>
    </div>
  );
}
