export default function SecureSeat() {
  return (
    <footer
      style={{
        backgroundImage: `url('/LeadGenerationFooter.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
      }}
    >
      <div className="text-center py-12">
        <h1 className="text-4xl font-bold font-sans text-teal-600">
          LIMITED SEATS AVAILABLE! SECURE <br />
          YOUR SPOT TODAY!
        </h1>
      </div>
      <div className="flex justify-center items-center w-full">
        <form className="bg-white rounded-lg shadow-xl p-6 w-80 md:w-1/3 border-4 border-[#B83D8E] grid gap-4 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name.."
              className="p-2 bg-gray-100 rounded-xl outline-none placeholder-black"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone.."
              className="p-2 bg-gray-100 rounded-xl outline-none placeholder-black"
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address.."
            className="p-2 mt-4 bg-gray-100 rounded-xl outline-none w-full placeholder-black"
          />
          <button className="bg-cyan-400 hover:bg-cyan-500 text-white py-2 px-6 rounded-full font-bold relative -bottom-12">
            🚀 CLAIM YOUR SEAT NOW!
          </button>
        </form>
      </div>
    </footer>
  );
}
