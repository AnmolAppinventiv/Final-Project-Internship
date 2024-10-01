import { ANY_QUESIONS } from "@/utils/CONTACT_US_ENDPOINTS";

export default function AnyOtherQuestion() {
  return (
    <>
      <div className="flex flex-col justify-center h-[45vh] items-center">
        <h1 className="text-4xl font-bold">Any Other Questions?</h1>
        <p className="text-[#4d4d4d] pt-4 pb-8">
          We’re here to help. You can contact us: Weekdays: 6am to 6pm PT,
          Weekends: 6am to 6pm PT.
        </p>
        <section className="flex justify-between items-center border p-6 w-7/12 rounded-xl border-slate-400 gap-12">
          {ANY_QUESIONS.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col items-center text-center ${
                index !== ANY_QUESIONS.length - 1
                  ? "border-r border-gray-300 pr-36"
                  : ""
              }`}
            >
              <img
                src={item.icon}
                alt={`${item.heading} icon`}
                className="h-12 mb-4 text-red-500"
              />
              <h1 className="text-lg font-bold text-black">{item.heading}</h1>
              <h3 className="text-black text-xl  text-nowrap underline hover:text-red-500 cursor-pointer">
                {item.description}
              </h3>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
