"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function HelpCenter() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const cardClass =
    "bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between";

  return (
    <div className="flex flex-col items-center relative">
      <img
        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439"
        alt="Help Center Background"
        className="absolute h-[50vh] sm:h-[65vh] object-cover blur-sm"
        style={{ zIndex: -1 }}
      />
      <div data-aos="fade-up">
        <div className="w-full h-[50vh] sm:h-[65vh] flex flex-col items-center justify-center bg-opacity-70 relative">
          <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
            HELP CENTER
          </h1>
          <p className="text-white mt-2 text-center text-sm sm:text-base">
            Let us know how we may help you?
          </p>
          <div className="flex w-full max-w-lg mt-4 sm:mt-6 px-4 sm:px-0">
            <input
              type="text"
              className="flex-grow p-3 sm:p-4 rounded-l-full outline-none text-slate-400-600 placeholder-slate-400 text-sm sm:text-base"
              placeholder="Search for answers..."
            />
            <button className="bg-black text-white px-4 sm:px-6 py-3 sm:py-4 rounded-r-full text-sm sm:text-base">
              Search
            </button>
          </div>
        </div>
      </div>
      <div data-aos="fade-up">
        <div className="w-full max-w-5xl -mt-16 sm:-mt-24 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 px-4 relative">
          <div className={cardClass}>
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573"
              alt="Icon for Order Tracking"
              className="mb-4 w-10 sm:w-12 mx-auto"
            />
            <div>
              <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2">
                Order Tracking
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                Log in to check the status of your order
              </p>
            </div>
            <button className="mt-4 bg-black text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base">
              Track your order →
            </button>
          </div>

          <div className={cardClass}>
            <img
              src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681"
              alt="Icon for Return & Exchange"
              className="mb-4 w-10 sm:w-12 mx-auto"
            />
            <div>
              <h3 className="text-gray-800 text-lg sm:text-xl font-bold mb-2">
                Return & Exchange
              </h3>
              <p className="text-gray-600 text-sm sm:text-base">
                We make it easy to return and exchange styles.
              </p>
            </div>
            <button className="mt-4 bg-black text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base">
              Start a return →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
