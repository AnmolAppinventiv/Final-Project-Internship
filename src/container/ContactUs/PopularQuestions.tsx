"use client";
import { useState, useEffect } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { POPULAR_QUESTIONS } from "@/utils/CONTACT_US_ENDPOINTS";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PopularQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);
  useEffect(() => {
    AOS.init();
  }, []);

  const toggleAnswer = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className="mt-12 sm:mt-24 p-4 sm:p-8 bg-[#E0E0FF] rounded-lg">
        <div data-aos="fade-up">
          <h2 className="text-2xl sm:text-4xl font-bold text-center mb-6 pt-6 sm:pt-12">
            Popular Searched Questions
          </h2>
        </div>
        <section className="sm:px-10 px-4 pb-10 sm:pb-20 mx-auto max-w-[1200px]">
          <div className="rounded-3xl mx-auto bg-white p-6 sm:p-10">
            {POPULAR_QUESTIONS.map((faq,index) => (
              <div
                key={index}
                className={`${(index<POPULAR_QUESTIONS.length-1) && 'border-b border-gray-300'} py-3 sm:py-4`}
                data-aos="fade-up"
              >
                <button
                  onClick={() => toggleAnswer(faq.id)}
                  className="w-full text-left flex justify-between items-center group"
                >
                  <span className="text-gray-600 font-bold text-lg sm:text-xl group-hover:text-black">
                    {faq.heading}
                  </span>
                  <div className="flex justify-center ease-in-out duration-200 group-hover:bg-[#E0E0FF] rounded-3xl p-4 sm:p-6">
                    {openId === faq.id ? (
                      <KeyboardArrowDownIcon className="bg-[#E0E0FF] rounded-xl" />
                    ) : (
                      <KeyboardArrowUpIcon />
                    )}
                  </div>
                </button>
                {openId === faq.id && (
                  <div className="text-slate-400 text-base sm:text-xl mt-2">
                    {faq.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
