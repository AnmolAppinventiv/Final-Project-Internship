import AboutHost from "./AboutHost";
import AdditionalBenefits from "./AdditionBenefit";
import CompaniesAssociated from "./CompaniesAssociated";
import HeroSection from "./HeroSection";
import MasterClassSection from "./MasterClassSection";
import SecureSeat from "./SecureSeat";
import YoutubeVideo from "./YoutubeVideo";

export default function LeadGeneration() {
  return (
    <>
      <HeroSection />
      <CompaniesAssociated />
      <MasterClassSection />
      <AboutHost />
      <YoutubeVideo />
      <AdditionalBenefits />
      <SecureSeat />
    </>
  );
}
