"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Button from "../reusable-components/Button";

export default function AuthForm() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    const [showSignupPassword, setShowSignupPassword] = useState(false);

    const toggleMode = () => setIsLogin((prev) => !prev);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(isLogin ? "Login Submitted" : "Signup Submitted");
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-cyan-600 to-blue-700 px-4">
            <div className="w-full max-w-md rounded-2xl bg-white dark:bg-black p-8 shadow-lg">
                {/* Title */}
                <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 dark:text-white">
                    {isLogin ? "Login Form" : "Signup Form"}
                </h2>

                {/* Toggle Buttons */}
                <div className="mb-6 flex rounded-lg border border-gray-200 bg-gray-100 p-1">
                    <Button
                        onClick={() => setIsLogin(true)}
                        className={`flex-1 rounded-md px-4 py-2 font-medium transition-colors ${isLogin
                                ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:cursor-pointer text-white shadow"
                                : "text-gray-700 hover:text-blue-500"
                            }`}
                    >
                        Login
                    </Button>

                    <Button
                        onClick={() => setIsLogin(false)}
                        className={`flex-1 rounded-md px-4 py-2 font-medium transition-colors ${!isLogin
                                ? "bg-gradient-to-r from-cyan-600 to-blue-700 hover:cursor-pointer text-white shadow"
                                : "text-gray-700 hover:text-blue-500"
                            }`}
                    >
                        Signup
                    </Button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    <AnimatePresence mode="wait">
                        {isLogin ? (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 40 }}
                                transition={{ duration: 0.35 }}
                                className="space-y-4"
                            >
                                {/* Email */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                    />
                                </div>

                                {/* Password with toggle */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
                                            type={showPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                        />
                                        <Button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                        >
                                            {showPassword ? <FiEyeOff /> : <FiEye />}
                                        </Button>
                                    </div>
                                </div>

                                {/* Forgot Password */}
                                <div className="text-right">
                                    <a
                                        href="#"
                                        className="text-sm font-medium text-blue-600 hover:underline"
                                    >
                                        Forgot password?
                                    </a>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 hover:cursor-pointer px-4 py-2 font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-blue-600"
                                >
                                    Login
                                </button>

                                <p className="text-center text-sm text-gray-700 dark:text-gray-300 ">
                                    Not a member?{" "}
                                    <button
                                        type="button"
                                        onClick={toggleMode}
                                        className="font-semibold text-blue-600 hover:underline"
                                    >
                                        Signup now
                                    </button>
                                </p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="signup"
                                initial={{ opacity: 0, x: 40 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -40 }}
                                transition={{ duration: 0.35 }}
                                className="space-y-4"
                            >
                                {/* First + Last Name */}
                                <div className="flex gap-4">
                                    <div className="flex-1 space-y-2">
                                        <label
                                            htmlFor="firstname"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
                                        >
                                            First Name
                                        </label>
                                        <input
                                            id="firstname"
                                            type="text"
                                            placeholder="John"
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                        />
                                    </div>
                                    <div className="flex-1 space-y-2">
                                        <label
                                            htmlFor="lastname"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            id="lastname"
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="signup-email"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="signup-email"
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                    />
                                </div>

                                {/* Password with toggle */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="signup-password"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 "
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="signup-password"
                                            type={showSignupPassword ? "text" : "password"}
                                            placeholder="••••••••"
                                            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:outline-none"
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowSignupPassword(!showSignupPassword)
                                            }
                                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                                        >
                                            {showSignupPassword ? <FiEyeOff /> : <FiEye />}
                                        </button>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full mt-4 rounded-lg bg-gradient-to-r from-cyan-600 to-blue-700 hover:cursor-pointer px-4 py-2 font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-blue-600"
                                >
                                    Signup
                                </button>

                                <p className="text-center text-sm text-gray-600 dark:text-gray-300 ">
                                    Already a member?{" "}
                                    <button
                                        type="button"
                                        onClick={toggleMode}
                                        className="font-semibold text-blue-600 hover:underline"
                                    >
                                        Login now
                                    </button>
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
}
