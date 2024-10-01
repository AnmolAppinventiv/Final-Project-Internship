export default function HelpCenter() {
  const cardClass =
    "bg-white p-6 rounded-lg shadow-md text-center flex flex-col justify-between";

  return (
    <div className="flex flex-col items-center relative">
      <img
        src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439"
        alt="Help Center Background"
        className="absolute inset-0 w-full h-[65vh] object-cover filter blur-sm"
        style={{ zIndex: -1 }}
      />
      <div className="w-full h-[65vh] flex flex-col items-center justify-center bg-opacity-70 relative">
        <h1 className="text-white text-4xl font-bold text-center">
          HELP CENTER
        </h1>
        <p className="text-white mt-2 text-center">
          Let us know how we may help you?
        </p>
        <div className="flex w-full max-w-lg mt-6">
          <input
            type="text"
            className="w-full p-4 rounded-l-full outline-none text-slate-400-600 placeholder-slate-400"
            placeholder="Search for answers..."
          />
          <button className="bg-black text-white px-6 py-4 rounded-r-full">
            Search
          </button>
        </div>
      </div>

      <div className="w-full max-w-5xl -mt-24 grid grid-cols-1 md:grid-cols-2 gap-6 px-4 relative">
        <div className={cardClass}>
        <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Te8cHLsQU8icon-hc-1.png?v=1724405573"
            alt="Icon for Return & Exchange"
            className="mb-4 w-12 mx-auto"
          />
          <div>
            <h3 className="text-gray-800 text-xl font-bold mb-2">
              Order Tracking
            </h3>
            <p className="text-gray-600">
              Log in to check the status of your order
            </p>
          </div>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-full">
            Track your order →
          </button>
        </div>

        <div className={cardClass}>
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Cbwk5YMW5Dicon-hc-2.png?v=1724405681"
            alt="Icon for Return & Exchange"
            className="mb-4 w-12 mx-auto"
          />
          <div>
            <h3 className="text-gray-800 text-xl font-bold mb-2">
              Return & Exchange
            </h3>
            <p className="text-gray-600">
              We make it easy to return and exchange styles.
            </p>
          </div>
          <button className="mt-4 bg-black text-white px-6 py-2 rounded-full">
            Start a return →
          </button>
        </div>
      </div>
    </div>
  );
}