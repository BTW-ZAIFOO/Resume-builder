import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | CV/Resume Builder",
  description: "This is About Page for CV/Resume Builder",
};

const AboutPage = () => {
  return (
    <>
      <div className="py-10">
        <AboutSectionOne />
        <AboutSectionTwo />
      </div>
    </>
  );
};

export default AboutPage;
