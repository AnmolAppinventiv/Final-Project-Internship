import SchoolIcon from "@mui/icons-material/School";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import CellTowerIcon from "@mui/icons-material/CellTower";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

export default function AdditionalBenefits() {
  return (
    <section className="flex justify-center items-center py-10 bg-gray-100">
      <article className="max-w-4xl text-center">
        <h2 className="text-teal-600 font-bold font-sans text-4xl mb-6">
          ADDITIONAL BENEFIT
        </h2>
        <div className="grid md:flex items-center">
          <img
            src="https://cdn.shopify.com/s/files/1/0623/8303/0317/files/ecom-no-replace-UzgJte0qv4Rectangle_15.jpg?v=1716445752"
            alt="Person on video call"
            className="w-full md:w-1/2 p-4 rounded-[50px] transition-transform transform ease-in duration-300 hover:scale-110" 
          />
          <ul className="w-full md:w-1/2 p-4 space-y-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1">
            <li className="flex items-center">
              <span className="bg-[#B32F86] text-white rounded-full p-5">
                <SchoolIcon />
              </span>
              <p className="ml-4 text-lg font-medium text-gray-700">
                Interactive Q&A sessions with industry experts
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#B32F86] text-white rounded-full p-5">
                <ImportContactsIcon />
              </span>
              <p className="ml-4 text-lg font-medium text-gray-700">
                Live case studies showcasing successful funnel strategies
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#B32F86] text-white rounded-full p-5">
                <CellTowerIcon />
              </span>
              <p className="ml-4 text-lg font-medium text-gray-700">
                Networking opportunities with potential collaborators and
                clients
              </p>
            </li>
            <li className="flex items-center">
              <span className="bg-[#B32F86] text-white rounded-full p-5">
                <StickyNote2Icon />
              </span>
              <p className="ml-4 text-lg font-medium text-gray-700">
                Access to post-event resources and recordings
              </p>
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}