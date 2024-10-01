"use client";
import { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { POPULAR_QUESTIONS } from "@/utils/CONTACT_US_ENDPOINTS";

export default function PopularQuestions() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAnswer = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <>
      <div className=" mt-24 p-4 bg-[#E0E0FF]  rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-6 pt-12">
          Popular Searched Questions
        </h2>
        <section className="lg:p-10 px-5 pb-20 mx-24">
          <div className="rounded-3xl mx-auto bg-[white] p-10">
            {POPULAR_QUESTIONS.map((faq) => (
              <div key={faq.id} className="border-b border-gray-300 py-4">
                <button
                  onClick={() => toggleAnswer(faq.id)}
                  className="w-full text-left flex justify-between items-center group"
                >
                  <span className="text-gray-600 font-bold text-xl group-hover:text-black">
                    {faq.heading}
                  </span>
                  <div className="flex justify-center ease-in-out duration-200 
                    group-hover:bg-[#E0E0FF] rounded-3xl p-6">
                    {openId === faq.id ? <KeyboardArrowDownIcon className="bg-[#e0e0ff] rounded-xl"/> :<KeyboardArrowUpIcon/>}
                  </div>
                </button>
                {openId === faq.id && (
                  <div className="text-slate-400 text-xl mt-2 max-w-[1200px]">
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
