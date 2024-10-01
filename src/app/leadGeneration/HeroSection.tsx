"use client";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ShortcutIcon from "@mui/icons-material/Shortcut";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const initialTime = 24* 60 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const countdownInterval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [timeLeft]);
  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;
  return (
    <div>
      <header className="bg-[#3735A1] text-white grid justify-center py-2">
        <h1 className="px-24 text-2xl">
          <VideoCameraBackIcon className="text-red-500 bg-white rounded-full text-2xl" />{" "}
          LIVE Free Training: Funnels For Life Coaches
        </h1>

        <span className="px-16 py-2">
          Host: <b> Robert Smith &#8226;</b> Date:{" "}
          <b> Webinar is 20.6.2024 &#8226; </b>Time:{" "}
          <b>14:30 PM (America/Denver) </b>
        </span>
      </header>

      <section className="relative">
        <img
          src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-T8WCBRsztkFrame_1000004148.jpg?v=1716424734"
          alt="Lead Genration Image"
          className="fixed"
        />
        <div className="fixed p-56 ml-32">
          <h1 className="bg-black p-2 text-xl text-white rounded-2xl w-68">
            <AccessTimeIcon /> Date: 20.6.2024 / Time: 14:30 EST
          </h1>
          <h3 className="py-5 text-2xl font-bold">
            Live Training Starting Soon!
          </h3>
          <p className="text-5xl text-[#037382] font-bold border-l-4 border-[#037382] pl-3">
            Unearth Our <br />
            Findings and Learn <br />
            How You Can Also <br />
            Gain from Them <br />
          </p>
          <p className="text-sm pt-4">
            <span className="underline font-bold">
              This FREE Training Will Reveal The #1{" "}
            </span>
            Way to Build an Effective Webinar <br />
            Funnel AND Generate Leads
          </p>

          <button className="bg-[#23CEE6] text-white p-4 px-12 rounded-full mt-4">
            <ShortcutIcon />{" "}
            <span className="font-bold text-base">Claim Your Seat Now !</span>{" "}
            <br />
            Click Here To Save Your Free Seat Now -<b>20.06.2024</b>
          </button>


            <div className="bg-[#B32F86] flex justify-between text-white px-20 py-6 rounded-full mt-4 text-center">
              <h1 className="text-xl my-2">STARTS IN</h1>
              <div className="flex justify-center text-2xl font-bold">
                <div className="mx-1">
                  {String(hours).padStart(2, "0")}
                  <div className="text-xs">Hours</div>
                </div>
                <span>:</span>
                <div className="mx-1">
                  {String(minutes).padStart(2, "0")}
                  <div className="text-xs">Minutes</div>
                </div>
                <div>:</div>
                <div className="mx-2">
                  {String(seconds).padStart(2, "0")}
                  <div className="text-xs">Seconds</div>
                </div>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}