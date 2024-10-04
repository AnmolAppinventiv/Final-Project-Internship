"use client";
import { useEffect, useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmergencyRecordingIcon from '@mui/icons-material/EmergencyRecording';

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 36,
    seconds: 38,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { hours, minutes, seconds } = prevTime;
        seconds += 1;

        if (seconds === 60) {
          seconds = 0;
          minutes += 1;
        }
        if (minutes === 60) {
          minutes = 0;
          hours += 1;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => (time < 10 ? `0${time}` : time);

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center flex items-center overflow-hidden" // Added overflow-hidden
      style={{
        backgroundImage:
          'url("https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-T8WCBRsztkFrame_1000004148.jpg?v=1716424734")',
      }}
    >
      <div className="absolute top-0 left-0 w-full bg-[#3c3ab4] text-white  py-4 md:px-8"> {/* Adjusted padding */}
        <div className="flex flex-col justify-center items-center text-center space-y-2">
          <div className="flex items-center">
            <EmergencyRecordingIcon className="text-red-500 mr-2 bg-white rounded-full" />
            <h3 className="font-extrabold text-lg md:text-xl lg:text-2xl">
              LIVE FREE TRAINING: FUNNELS FOR LIFE COACHES
            </h3>
          </div>
          <div className="flex flex-col md:flex-row md:space-x-4 text-sm md:text-base">
            <span className="mb-2 md:mb-0">Host: <b>Robert Smith</b></span>
            <span className="mb-2 md:mb-0">Date: <b>Webinar is 20.6.2024</b></span>
            <span>Time: <b>14:30 PM (America/Denver)</b></span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between w-full max-w-7xl mx-auto px-4 md:px-8 mt-24"> {/* Adjusted padding */}
        <div className="max-w-lg text-left text-gray-900">
          <div className="flex items-center space-x-2 mb-4">
            <span className="flex flex-row justify-center text-center text-4xl font-bold px-4 py-2 bg-black text-white rounded-full text-sm">
              <AccessTimeIcon />
              <p className="pl-2">Date: 20.6.2024 / Time: 14:30 EST</p>
            </span>
          </div>

          <h3 className="text-xl font-extrabold mb-1">
            LIVE TRAINING STARTING SOON!
          </h3>
          <h1 className="text-3xl md:text-4xl lg:text-5xl border-l-4 border-teal-700 pl-4 font-extrabold text-teal-700 leading-tight mb-4">
            UNEARTH OUR FINDINGS AND LEARN <br /> HOW YOU CAN ALSO GAIN FROM
            THEM
          </h1>
          <p className="text-gray-700 text-sm mb-6">
            This FREE Training Will Reveal The #1 Way to Build an Effective
            Webinar Funnel AND Generate Leads
          </p>
          <button className="bg-teal-400 hover:bg-teal-500 text-white px-10 py-3 rounded-full text-lg font-semibold mb-2 w-full max-w-md h-24">
            <span className="flex flex-row justify-center items-center">
              <ThumbUpIcon />
              <p className="pl-2"> CLAIM YOUR SEAT NOW!</p>
            </span>
            <p className="text-sm pt-1">
              Click Here To Save Your Free Seat Now - 20.6.2024
            </p>
          </button>

          <div className="flex flex-row justify-center items-center bg-[#a03d79] text-white px-8 py-1 rounded-full w-full max-w-md h-24">
            <span className="text-lg font-extrabold pr-8">STARTS IN</span>
            <div className="mt-6 flex flex-col ml-4">
              <div className="flex font-bold text-white text-4xl space-x-2">
                <div>{formatTime(timeLeft.hours)}</div>
                <span>:</span>
                <div>{formatTime(timeLeft.minutes)}</div>
                <span>:</span>
                <div>{formatTime(timeLeft.seconds)}</div>
              </div>

              <div className="flex justify-center font-bold space-x-8 text-white text-sm mt-2">
                <span>Hours</span>
                <span>Minutes</span>
                <span>Seconds</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
