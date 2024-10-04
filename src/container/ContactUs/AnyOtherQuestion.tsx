'use client'
import { ANY_QUESIONS } from "@/utils/CONTACT_US_ENDPOINTS";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function AnyOtherQuestion() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="flex flex-col justify-center h-auto sm:h-[45vh] items-center mt-16">
        <div data-aos="fade-up">
        <h1 className="text-2xl sm:text-4xl font-bold text-center">Any Other Questions?</h1>
        <p className="text-[#4d4d4d] pt-4 pb-8 text-center">
          We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
          Weekends: 6am to 6pm PT.
        </p>
        </div>

        <section className="grid grid-cols-2 sm:grid-cols-4 gap-y-6 sm:gap-y-0 gap-x-8 items-center border mt-12 p-6 w-11/12 sm:w-7/12 rounded-xl border-slate-400">
          {ANY_QUESIONS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center ${
                index % 2 === 0 ? "border-r border-gray-300 pr-4" : "pl-4"
              } ${index === 1 || index === 3 ? "sm:border-none" : ""}`}
              data-aos="fade-up"
            >
              <img
                src={item.icon}
                alt={`${item.heading} icon`}
                className="h-10 mb-2 text-red-500"
              />
              <h1 className="text-lg font-bold text-black">{item.heading}</h1>
              <h3 className="text-black text-base sm:text-xl underline hover:text-red-500 cursor-pointer">
                {item.description}
              </h3>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}