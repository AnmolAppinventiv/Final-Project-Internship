import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import XIcon from "@mui/icons-material/X";
import ShortcutIcon from "@mui/icons-material/Shortcut";
export default function AboutHost() {
  return (
    <div className="grid bg-[#0E4D56]">
      <div className=" text-white font-bold grid justify-center py-12">
        <h1 className=" text-xl md:text-4xl sm:text-5xl text-center leading-snug">
          YOUR HOST FOR THE 3 DAY <br />
          <span className="inline-block px-10 py-2 mt-2 text-center">
            CHALLENGE!
          </span>
        </h1>
      </div>

      <div className="max-w-4xl mx-auto py-4 bg-white rounded-xl">
        <div className="max-w-4xl mx-auto py-4 bg-white rounded-xl">
          <div className="flex items-center flex-col md:flex-row px-4 md:px-12">
            <div className="mb-6 md:mb-0">
              <img
                className="w-48 h-48 rounded-full border-4 border-gray-300"
                src="https://ecomposer-khoapham.myshopify.com/cdn/shop/files/ecom-edit-image-LEfxlyMpmSecom-no-replace-2QLmz7vPqOFrame_1000004149.png"
                alt="David Doe"
              />
              <h2 className="text-2xl font-bold text-center mt-4">David Doe</h2>{" "}
              
              <p className="text-lg font-medium text-center text-gray-400 mt-2">
    
                Marketing Funnels Expert
              </p>
            </div>

            <div className="ml-0 md:ml-6 flex-1 text-center md:text-left">
              <p className="mt-2">
                David is a consecutive business creator, 8-digit virtual
                marketer, chart-topping author of{" "}
                <b>
                  Virtual Fortune Blueprint, and an eternal disciple of Ella
                  Kennedy
                </b>
              </p>
              <p className="mt-2 mb-2">
                He is the originator and proprietor of clickfunnels.com, where he
                mentors business visionaries on capturing additional patrons and
                expanding with certainty.
              </p>
              <b>
                David has been showcased in Business Owner Magazine, Forbes,
                Corporate Insider, USA Today, and HuffPost.
              </b>

              <div className="mt-6 flex justify-center md:justify-start space-x-4">
                <FacebookIcon className="text-blue-600 hover:text-blue-400 font-xl" />
                <InstagramIcon className="text-pink-500 hover:text-pink-400 font-xl" />
                <PinterestIcon className="text-red-600 hover:text-red-400 font-xl" />
                <XIcon className="font-xl text-black hover:text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-white text-3xl text-center pt-12 font-bold">
        Seize the Opportunity to <br />
        Transform Your Business with <br />
        Personality-Driven Copywriting!
      </h1>
      <div className="flex justify-center items-center py-12">
        <button className="bg-[#23CEE6] text-white p-2 px-4 rounded-full mt-4 flex flex-col items-center w-[40%] md:m-full">
          <ShortcutIcon />
          <span className="font-bold text-sm block md:hidden">
            Claim Your Seat Now!
          </span>
          <span className="font-bold text-sm hidden md:block">
            Claim Your Seat Now! <br />
            <span className="text-xs">
              Click Here To Save Your Free Seat Now - <b>20.06.2024</b>
            </span>
          </span>
        </button>
      </div>
    </div>
  );
}
