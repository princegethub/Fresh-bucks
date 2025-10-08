import React from "react";
import NavBar from "../../components/Navbar";
import Footer from "../home/components/Footer";
import ContactSection from "./ContactSection";
import { ContactSection as ContactSectionHome } from "../home/components/Contact";
import HeadingSection from "./HeadingSection";
import TestimonialCarousel from "../home/components/Testimonail";
import Banner from "../about/components/Bannner";

export default function Contact() {
  return (
    <div className="bg-[#FDEDBF] min-h-screen flex flex-col object-cover "
    style={{
      backgroundImage: "url('https://img.freepik.com/free-photo/close-up-banana-smoothie_23-2151005939.jpg')"
    }}
    >
      <NavBar />
      <HeadingSection/>
      <main className="flex-1 py-32 flex flex-col justify-center">
        <ContactSection />
      </main>
{/* <Banner/> */}
      <TestimonialCarousel />
      <ContactSectionHome />
      <Footer />
    </div>
  );
}
