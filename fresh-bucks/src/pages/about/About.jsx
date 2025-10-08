import NavBar from "../../components/Navbar"
import BrandMarquee from "../home/components/BrandMarquee"
import { ContactSection } from "../home/components/Contact"
import Footer from "../home/components/Footer"
import TestimonialCarousel from "../home/components/Testimonail"
import Banner from "./components/Bannner"
import BottomHero from "./components/BottomHero"
import Hero from "./components/Hero"

const AboutPage = () => {
    return (
      <div>
        <NavBar />
        <Hero/>
        <Banner />
        <BottomHero />
    <BrandMarquee />
        <TestimonialCarousel />

        <ContactSection />
        <Footer />
      </div>
    )
  }
  
  export default AboutPage