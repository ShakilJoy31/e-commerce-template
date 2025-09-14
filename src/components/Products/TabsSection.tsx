// components/product/TabsSection.tsx (with added animations)
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Star } from "lucide-react";
import { useCustomTranslator } from "@/hooks/useCustomTranslator";
import { FaComments } from "react-icons/fa6";
import Button from "../reusable-components/Button";
import { TextareaField } from "../reusable-components/CustomTextArea";

interface Review {
    id?: string;
    name: string;
    daysAgo?: number;
    rating: number;
    content: string;
    createdAt?: string;
}

interface TabsSectionProps {
    specification?: string | null;
    description?: string | null;
    reviews?: Review[] | null;
    rating?: number;
    productName?: string;
    productId: number;
}

const Tabs = [
    "Specifications",
    "Description",
    "Reviews"
];

export default function TabsSection({
    specification,
    description,
    reviews = [],
    productName = "",
}: TabsSectionProps) {
    const { translate } = useCustomTranslator();
    const [activeTab, setActiveTab] = useState(Tabs[0]);
    const [reviewContent, setReviewContent] = useState("");
    const [reviewRating, setReviewRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleSubmitReview = async () => {
        console.log('review submitted....')
    };

    const calculateDaysAgo = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        return Math.floor(diffTime / (1000 * 60 * 60 * 24));
    };



    // Calculate rating distribution
    const ratingDistribution = [0, 0, 0, 0, 0];

    // Animation variants
    const tabContentVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
    };

    const averageRating = 4.5;

    return (
        <div className="mt-10 space-y-6 dark:text-white">
            {/* Tabs */}
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="dark:bg-black dark:text-white flex items-center gap-4 justify-between bg-cyan-50 rounded-full p-[5px] h-[56px] "
            >
                {Tabs.map((tab) => (
                    <Button
                        variant={'outline'}
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-1.5 rounded-full text-sm font-medium w-full hover:cursor-pointer h-full transition-all
              ${activeTab === tab
                                ? "bg-gradient-to-r hover:cursor-pointer from-cyan-600 to-blue-700 text-white shadow-sm dark:bg-orange-500"
                                : "text-gray-700 dark:text-gray-300 hover:text-black"
                            }`}
                    >
                        {tab}
                    </Button>
                ))}
            </motion.div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                {/* Specifications */}
                {activeTab === Tabs[0] && (
                    <motion.div
                        key="specifications"
                        variants={tabContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6 text-sm"
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {translate(`${productName} Specifications`, `${productName} Specifications`)}
                            </h2>
                            <div className="mt-4 text-gray-700 dark:text-white">
                                {specification ? (
                                    <div
                                        className="prose max-w-none dark:prose-invert"
                                        dangerouslySetInnerHTML={{ __html: specification }}
                                    />
                                ) : (
                                    <p className="text-gray-500 dark:text-white">
                                        {translate("স্পেসিফিকেশন পাওয়া যায়নি", "No specifications available")}
                                    </p>
                                )}
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Description */}
                {activeTab === Tabs[1] && (
                    <motion.div
                        key="description"
                        variants={tabContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6 text-sm text-gray-700"
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {translate("পণ্যের বিবরণ", "Product Description")}
                            </h2>
                            {description ? (
                                description.includes('<') ? (
                                    <div
                                        className="mt-3 prose max-w-none dark:prose-invert"
                                        dangerouslySetInnerHTML={{ __html: description }}
                                    />
                                ) : (
                                    <div className="mt-3 space-y-2">
                                        {description.split('\n').map((paragraph, index) => (
                                            paragraph.trim() && <p key={index}>{paragraph}</p>
                                        ))}
                                    </div>
                                )
                            ) : (
                                <p className="mt-3 text-gray-500 dark:text-white">
                                    {translate("বিবরণ পাওয়া যায়নি", "No description available")}
                                </p>
                            )}
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {translate("পণ্যের বিবরণ", "Product Details")}
                            </h2>
                            <ul className="mt-3 space-y-2">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="text-blue-500 mt-1" size={16} />
                                    <span>
                                        {translate(
                                            "পার্সোনাল প্রোটেক্টিভ ইকুইপমেন্ট হিসাবে ব্যবহারের উদ্দেশ্যে নয়",
                                            "Not intended for use as Personal Protective Equipment"
                                        )}
                                    </span>
                                </li>
                                <li className="ml-6">
                                    <span className="text-orange-600 font-semibold cursor-pointer hover:underline dark:bg-black dark:text-white">
                                        {translate("আরও দেখুন", "See More")}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                )}

                {/* Review */}
                {activeTab === Tabs[2] && (
                    <motion.div
                        key="reviews"
                        variants={tabContentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="space-y-6 text-sm text-gray-700"
                    >
                        <div>
                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
                                {translate("গ্রাহকদের প্রতিক্রিয়া", "Customers Feedback")}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 dark:bg-black dark:text-white">
                                <div className="bg-cyan-50 rounded-xl p-6 text-center dark:bg-black dark:text-white dark:border dark:border-white">
                                    <div className="text-4xl font-bold text-cyan-500">{averageRating.toFixed(1)}</div>
                                    <div className="flex justify-center mt-2">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`${i < Math.floor(averageRating) ? 'text-cyan-400' : 'text-gray-300'}`}
                                                size={18}
                                                fill={i < averageRating ? "currentColor" : "none"}
                                            />
                                        ))}
                                    </div>
                                    <div className="mt-2 text-sm text-gray-700 dark:text-gray-300 ">
                                        {translate("পণ্য রেটিং", "Product Rating")}
                                    </div>
                                </div>

                                <div className="bg-cyan-50 rounded-xl p-6 dark:bg-black dark:text-white dark:border dark:border-white">
                                    <div className="space-y-2 dark:bg-black dark:text-white">
                                        {[5, 4, 3, 2, 1].map((star,) => {
                                            const count = ratingDistribution[5 - star] || 0;
                                            const totalReviews = 12;
                                            const width = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                                            return (
                                                <div key={star} className="flex items-center gap-2">
                                                    <span className="text-xs w-4">{star}</span>
                                                    <Star className="text-cyan-400" size={20} fill="currentColor" />
                                                    <div className="flex-1 bg-gray-200 rounded h-2">
                                                        <div
                                                            className="bg-orange-400 h-2 rounded"
                                                            style={{ width: `${width}%` }}
                                                        ></div>
                                                    </div>
                                                    <span className="text-xs w-4">{count}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Reviews List */}
                        <div className="space-y-6 dark:text-white">
                            {reviews && reviews.length > 0 ? (
                                <>
                                    {reviews.map((review, index) => (
                                        <ReviewCard
                                            key={review.id || index}
                                            name={review.name}
                                            daysAgo={review.createdAt ? calculateDaysAgo(review.createdAt) : 0}
                                            rating={review.rating}
                                            content={review.content}
                                        />
                                    ))}
                                    <div className="text-right">
                                        <Button variant={'outline'} className="text-cyan-600 hover:cursor-pointer font-semibold hover:underline">
                                            {translate("সমস্ত রিভিউ দেখুন", "View All Review")}
                                        </Button>
                                    </div>
                                </>
                            ) : (
                                <p className="text-gray-500 dark:text-white">
                                    {translate("কোন রিভিউ পাওয়া যায়নি", "No reviews available")}
                                </p>
                            )}
                        </div>

                        {/* Write a Review */}
                        <div className="pt-4 dark:text-white">
                            <h3 className="text-base font-semibold text-gray-800 dark:text-white">
                                {translate("একটি রিভিউ লিখুন", "Write a Review")}
                            </h3>
                            <p className="mt-1 dark:text-white">
                                {translate("পণ্যটি কেমন?", `What is it like to ${productName}?`)}
                            </p>
                            <div className="flex gap-1 mt-2 dark:text-white">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`cursor-pointer ${(hoverRating || reviewRating) > i
                                            ? 'text-yellow-400'
                                            : 'text-gray-300'
                                            }`}
                                        size={20}
                                        fill={(hoverRating || reviewRating) > i ? "currentColor" : "none"}
                                        onMouseEnter={() => setHoverRating(i + 1)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        onClick={() => setReviewRating(i + 1)}
                                    />
                                ))}
                            </div>

                            <div className="mt-[30px] dark:text-white">
                                <TextareaField
                                    label="Review Content"
                                    name="review"
                                    placeholder="What's on your mind?"
                                    icon={<FaComments className="h-5 w-5 text-gray-400" />}
                                    className="border border-cyan-500 rounded pl-10 pr-3 py-1.5 w-full focus:outline-none"
                                    value={reviewContent}
                                    onChange={(e) => setReviewContent(e.target.value)}
                                />
                            </div>

                            <Button
                                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all bg-gradient-to-r hover:cursor-pointer from-cyan-600 to-blue-700 text-white w-[185px] dark:bg-black dark:text-white`}
                                onClick={handleSubmitReview}>Submit
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

function ReviewCard({
    name,
    daysAgo,
    rating,
    content,
}: {
    name: string;
    daysAgo?: number;
    rating: number;
    content: string;
}) {
    const { translate } = useCustomTranslator();

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-50 p-4 rounded-md border border-gray-300 space-y-2 dark:bg-black dark:text-white"
        >
            <div className="dark:bg-black dark:text-white flex items-center gap-3">
                <div className="dark:bg-black dark:border-cyan-600 dark:text-white w-8 h-8 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-full flex items-center justify-center text-white font-semibold">
                    {name.charAt(0)}
                </div>
                <div className="dark:bg-black dark:text-white">
                    <div className="font-semibold text-gray-800 dark:bg-black dark:text-white">{name}</div>
                    {daysAgo !== undefined && (
                        <div className="text-xs text-gray-500 dark:bg-black dark:text-white">
                            {translate(`${daysAgo} দিন আগে`, `${daysAgo} days ago`)}
                        </div>
                    )}
                </div>
            </div>
            <div className="flex gap-1 dark:bg-black dark:text-white">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={`${i < rating ? 'text-cyan-400' : 'text-gray-300'}`}
                        size={20}
                        fill={i < rating ? "currentColor" : "none"}
                    />
                ))}
            </div>
            <p className="text-gray-600 dark:bg-black dark:text-white">{content}</p>
            <div className="flex gap-4 mt-2 text-sm text-blue-600 font-medium cursor-pointer dark:bg-black dark:text-white">
                <span>{translate("👍 পছন্দ", "👍 Like")}</span>
                <span>{translate("💬 উত্তর", "💬 Reply")}</span>
            </div>
        </motion.div>
    );
}