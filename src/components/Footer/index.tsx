import { FOOTER_DATA, FooterDataType } from "@/utils/CONTACT_US_ENDPOINTS";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
export default function Footer() {
  const footerSections = Object.keys(FOOTER_DATA) as Array< keyof FooterDataType>;
  return (
    <>
      <footer className="flex justify-center     mx-4 gap-96 pt-16">
        <section className="pt-8">
          <img
            src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png?v=1724641994"
            alt="Footer Logo"
            className="w-32 py-4"
          />
          <h6 className="pt-4"> Email: info@ecomposershop.com</h6>
          <h6>Phone: (212) 555-1234</h6>

          <h5 className="pt-10">Sign up for sale, new arrivals & more </h5>
          <div className="flex  w-68 h-4 items-center border border-black p-6 mt-4 ">
            <MailOutlineIcon className="mr-2" />
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Email address"
                className="outline-none text-sm"
              />
            </div>
            <button className="bg-black text-white px-6 py-2 text-nowrap rounded-md hover:bg-slate-500">
              Sign Up
            </button>
          </div>
        </section>

        <section className="py-10">
          <div className="grid  md:grid-cols-4 gap-16">
            {footerSections.map((section, index) => (
              <div key={index}>
                <h3 className="text-lg font-bold mb-4">{section}</h3>
                <ul>
                  {FOOTER_DATA[section].map((item, idx) => (
                    <li
                      key={idx}
                      className="mb-4 hover:text-red-500 cursor-pointer"
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

      <hr className="h-px my-8 bg-slate-300 border-0 "/>
        <div className="flex justify-between px-40 ml-12">
            <h1>© 2024 EComposer Store. All Rights Reserved</h1>
            <img src="https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892" alt="Payments Cards" className="w-1/3 pb-4" />
        </div>
    </>
  );
}
