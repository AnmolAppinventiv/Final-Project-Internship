'use client'
import { HELP_DESK } from "@/utils/CONTACT_US_ENDPOINTS";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function BrowseHelpDesk() {
  useEffect(() => {
    AOS.init(); 
  }, []);

  return (
    <section>
      <h1 className="pt-16 sm:pt-24 pb-8 sm:pb-16 text-center text-2xl sm:text-3xl font-bold">
        Browse Our Help Desk
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 px-4 sm:px-8 md:px-36">
        {HELP_DESK.map((item) => (
          <section
            key={item.id}
            data-aos="fade-up"
            className="bg-[#F4F4FF] rounded-2xl text-center px-8 py-6 sm:px-12 sm:py-8 mb-8"
          >
            <img
              src={item.iconUrl}
              alt={`${item.name} icon`}
              className="w-16 sm:w-20 mx-auto"
            />
            <h3 className="py-4 text-xl sm:text-2xl">{item.name}</h3>
            <p className="text-slate-500 text-sm sm:text-base">
              {item.description}
            </p>
            <button className="mt-2 hover:text-red-500">View More</button>
          </section>
        ))}
      </div>
    </section>
  );
}
