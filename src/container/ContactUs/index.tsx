import Footer from "@/components/Footer";
import BrowseHelpDesk from "./BrowseHelpDesk";
import HelpCenter from "./HelpCenter";
import PopularQuestions from "./PopularQuestions";
import AnyOtherQuestion from "./AnyOtherQuestion";

const ContactUs = () => {
  return (
   <>
   <HelpCenter/>
   <BrowseHelpDesk />
   <PopularQuestions/>
   <AnyOtherQuestion/>
   <Footer/>
   </>
  );
};

export default ContactUs;