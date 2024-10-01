import { HELP_DESK } from "@/utils/CONTACT_US_ENDPOINTS";

export default function BrowseHelpDesk() {
  return (
    <section>
      <h1 className="pt-24 pb-16 flex justify-center text-4xl font-bold">
        Browse Our Help Desk
      </h1>
      <div className="grid grid-cols-3 gap-12 justify-center px-36">
        {HELP_DESK.map((item) => (
          <section key={item.id} className="basis-1/3 bg-[#F4F4FF] rounded-2xl items-center px-12 py-8">
            <img src={item.iconUrl} alt={`${item.name} icon`} className="w-20"/>
            <h3 className="py-4 text-2xl">{item.name}</h3>
            <p className="text-slate-500">{item.description}</p>
            <button className="mt-2 hover:text-red-500 hover:out-expo  ">View More</button>
          </section>
        ))}
      </div>
    </section>
  );
}
