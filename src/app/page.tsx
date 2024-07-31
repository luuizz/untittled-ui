import SectionAnalytics from "@/components/Home/SectionAnalytics";
import HomeSectionCompanies from "@/components/Home/SectionCompanies";
import HomeSectionFeatures from "@/components/Home/SectionFeatures";
import SectionHeroHome from "@/components/Home/SectionHero";
import HomeSectionLaunch from "@/components/Home/SectionLaunch";
import SectionQuestions from "@/components/Home/SectionQuestions";
import SectionTestimonials from "@/components/Home/SectionTestimonials";
import HomeSectionTrial from "@/components/Home/SectionTrial";

export default function Home() {
  return (
    <>
      <SectionHeroHome />
      <HomeSectionCompanies />
      <HomeSectionFeatures />
      <SectionTestimonials />
      <SectionAnalytics />
      <SectionQuestions />
      <HomeSectionLaunch />
      <HomeSectionTrial />
    </>
  );
}
