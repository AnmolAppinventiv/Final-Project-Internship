import { v4 as uuidv4 } from "uuid";

export const HELP_DESK = [
  {
    id: uuidv4(),
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135",
    name: "Size Guide",
    description: "Ensure your customers get the right fit",
  },
  {
    id: uuidv4(),
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185",
    name: "Loyalty Program",
    description: "Offer exclusive rewards",
  },
  {
    id: uuidv4(),
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203",
    name: "Order & Shipping",
    description: "Looking for your order status",
  },
  {
    id: uuidv4(),
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-JYbi3Qpv20ic-hp-4.png?v=1724634293",
    name: "Payment & Gift Cards",
    description: "Wonder of what payment we accept?",
  },
  {
    id: uuidv4(),
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338",
    name: "Payment & Gift Cards",
    description: "Have a discount you like to use?",
  },
  {
    id: uuidv4(),
    iconUrl:
      "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383",
    name: "Store Location",
    description: "Want to find a store near you?",
  },
];

export const POPULAR_QUESTIONS = [
  {
    id: uuidv4(),
    heading: "How do I join the affiliate program?",
    description:
      "Simply sign up through our affiliate program page by filling out the registration form. Once approved, you'll receive a unique affiliate link to start promoting our products.",
  },
  {
    id: uuidv4(),
    heading: "What commission rates do you offer?",
    description:
      "We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners.",
  },
  {
    id: uuidv4(),
    heading: "How and when do I get paid?",
    description:
      "For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family.",
  },
  {
    id: uuidv4(),
    heading: "What marketing resources are available to affiliates?",
    description:
      "Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.",
  },
];
export type FooterDataType = {
  AboutUs: string[];
  Resource: string[];
  Information: string[];
  Help: string[];
};
export const FOOTER_DATA: FooterDataType = {
  AboutUs: [
    "About Us",
    "Careers",
    "Blog",
    "Affiliate",
    "Contact Us",
    "Terms of use",
  ],
  Resource: [
    "Return policy",
    "My Account",
    "Find a Store",
    "Legal & Privacy",
    "Contact",
  ],
  Information: ["Our Story", "Visit Our Store", "Contact Us", "Account"],
  Help: ["FAQs", "Terms Of Use", "Privacy Policy", "Cookie Policy", "Sitemap"],
};

export const ANY_QUESIONS = [
  {
    id: uuidv4(),
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    heading: "Call",
    description: "012-345-6789",
  },
  {
    id: uuidv4(),
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488",
    heading: "Email",
    description: "Contact Us",
  },
  {
    id: uuidv4(),
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522",
    heading: "Chat",
    description: "Message",
  },
  {
    id: uuidv4(),
    icon: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557",
    heading: "Message",
    description: "Get Support Now",
  },
];