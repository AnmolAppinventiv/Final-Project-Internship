import { FOOTER_DATA, FooterDataType } from "@/utils/CONTACT_US_ENDPOINTS";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Footer() {
  const footerSections = Object.keys(FOOTER_DATA) as Array<keyof FooterDataType>;

  return (
    <>
      <footer className="flex flex-col lg:flex-row justify-center lg:justify-between mx-4 lg:mx-24 gap-12 lg:gap-96 pt-16">
        <section className="pt-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png?v=1724641994"
            alt="Footer Logo"
            className="w-28 py-4 lg:w-32"
          />
          <h6 className="pt-4 text-sm lg:text-base">Email: info@ecomposershop.com</h6>
          <h6 className="text-sm lg:text-base">Phone: (212) 555-1234</h6>

          <h5 className="pt-10 text-sm lg:text-base">Sign up for sale, new arrivals & more</h5>
          <div className="flex items-center border border-black p-2 lg:p-4 mt-4 w-full lg:w-96">
            <MailOutlineIcon className="mr-2" />
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow outline-none text-sm lg:text-base"
            />
            <button className="bg-black text-white px-4 py-1 lg:px-6 lg:py-2 text-sm lg:text-base rounded-md hover:bg-slate-500">
              Sign Up
            </button>
          </div>
        </section>


        <section className="py-10 w-full lg:w-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-16">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg  font-bold mb-2 lg:mb-4">{section}</h3>
                <ul className="flex flex-col space-y-2">
                  {FOOTER_DATA[section].map((item, idx) => (
                    <li
                      key={idx}
                      className="text-base lg:text-base mb-2 lg:mb-4 hover:text-red-500 cursor-pointer"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </footer>

      <hr className="h-px my-8 bg-slate-300 border-0" />

      <div className="flex flex-col sm:flex-row justify-between items-center px-4 lg:px-40 pb-8">
        <h1 className="text-sm lg:text-base mb-4 sm:mb-0">
          © 2024 EComposer Store. All Rights Reserved
        </h1>
        <img
          src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892"
          alt="Payments Cards"
          className="w-2/3 sm:w-1/3 pb-4 lg:pb-0"
        />
      </div>
    </>
  );
}
