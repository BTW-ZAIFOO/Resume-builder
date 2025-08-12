import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | CV/Resume Builder",
  description: "This is Contact Page for CV/Resume Builder",
};

const ContactPage = () => {
  return (
    <>
      <div className="py-10">
        <Contact />
      </div>
    </>
  );
};

export default ContactPage;
