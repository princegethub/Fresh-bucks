import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import juiceThemes from "@/constants/theme";
import NavBar from "@/components/NavBar";
import "@/styles/globalCss.css";
import "@/styles/styleCss.css";
import {
  FaUsers,
  FaHeart,
  FaGift,
  FaTruck,
  FaLeaf,
  FaThumbsUp,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaWhatsappSquare,
  FaPhoneAlt,
} from "react-icons/fa";
import {
  FaAppleAlt,
  FaMugHot,
  FaShippingFast,
  FaSmileBeam,
} from "react-icons/fa";
import SpotlightCard from "@/reactbit/SpotLightCard";

import FreshBucksGlass from "../../assets/images/FreshBucksGlass.png";
import { GallerySection } from "./components/Gallery";
import TestimonialCarousel from "./components/Testimonail";
import { ContactSection } from "./components/Contact";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Feature from "./components/Feature";
import FreshBucksCard from "./components/FreshBucksCard";
import ShowCase from "./components/ShowCase";
import BrandMarquee from "./components/BrandMarquee";
import OurTeam from "./components/OurTeam";



export default function Home() {
  const [flavor, setFlavor] = useState("lime");
  const [rotation, setRotation] = useState(0);

  const flavorKeys = Object.keys(juiceThemes);
  const currentIndex = flavorKeys.indexOf(flavor);

  const nextFlavor = () => {
    AOS.refresh(); // Refresh AOS animations
    const next = (currentIndex + 1) % flavorKeys.length;
    setFlavor(flavorKeys[next]);
    setRotation((prev) => prev + 90);
  };

  const prevFlavor = () => {
    AOS.refresh(); // Refresh AOS animationsßß
    const prev = (currentIndex - 1 + flavorKeys.length) % flavorKeys.length;
    setFlavor(flavorKeys[prev]);
    setRotation((prev) => prev - 90);
  };

  const theme = juiceThemes[flavor];

  return (
    <>
      <div
        className="max-h-screen  w-full overflow-hidden transition-all duration-500"
        style={{ backgroundColor: `var(${theme.bg})` }}
      >
        <NavBar />

        <div className="relative flex flex-col items-center justify-center h-screen">
          {/* Juice Size Buttons */}
          <div className="absolute hidden md:flex flex-col top-1/2 right-8 transform -translate-y-1/2 space-y-4 z-30">
            {["500 ML", "100 ML", "125 ML"].map((size, idx) => (
              <div
                key={idx}
                className="w-16      h-16 flex items-center justify-center rounded-full text-sm font-bold"
                style={{
                  backgroundColor: idx === 0 ? "white" : "#3f3f3f",
                  color: idx === 0 ? "black" : "white",
                }}
              >
                {size}
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-center h-screen w-full">
            {/* Background Effect Image */}
            <img
              key={flavor} // 🔑 re-render image on flavor change
              data-aos="zoom-in"
              data-aos-delay="200"
              src={theme.effect}
              alt="Effect Background"
              className="w-[1000px] top-1 absolute h-[1000px] object-scale-down  z-1 sm:w-[500px] sm:h-[500px] md:w-[700px] md:h-[700px] lg:w-[900px] lg:h-[900px]"
            />
          </div>

          {/* Large Title Behind Bottle */}
          <h1
            className="absolute inset-0 flex items-center justify-center text-[180px] sm:text-[200px] md:text-[300px] lg:text-[600px] tracking-wide font-thunder font-extrabold text-white opacity-80 z-0 uppercase"
            style={{ fontFamily: "thunder" }}
          >
            {theme.text}
          </h1>

          {/* Rotating Juice Circle */}
          <div className=" flex items-center  justify-center h-screen w-full">
            {window.innerWidth < 1300 ? (
              // Show single bottle for phone or tablet view
              <img
                key={flavor} // 🔑 re-render image on flavor change
                data-aos="flip-right"
                data-aos-delay="200"
                data-aos-duration="800"
                src={theme.bottle} // Use the bottle image
                alt="Juice Bottle"
                className=" z-10 absolute  top-[170px] object-contain transition-transform duration-700 ease-in-out w-[500px] h-[500px]"
              />
            ) : (
              // Show circle for larger screens
              <img
                src={theme.circle} // Use the circle image
                alt="Juice Circle"
                className="absolute top-[950px] inset-0 sm:left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2 object-contain transition-transform duration-700 ease-in-out w-[1500px] h-[1500px] sm:w-[2000px] sm:h-[2000px] md:w-[2500px] md:h-[2500px] lg:w-[3000px] lg:h-[3000px] xl:w-[3500px] xl:h-[3500px]"
                style={{ transform: `rotate(${rotation}deg)` }}
              />
            )}
          </div>

          {/* Arrow Buttons for Flavors */}
          <div className="absolute bottom-32  flex gap-10 z-[999999]">
            <button
              onClick={prevFlavor}
              className="w-14 h-14 rounded-full bg-white cursor-pointer text-black font-bold text-xl flex items-center justify-center"
            >
              ◀
            </button>
            <button
              onClick={nextFlavor}
              className="w-14 h-14 rounded-full bg-white cursor-pointer  text-black font-bold text-xl flex items-center justify-center"
            >
              ▶
            </button>
          </div>

          {/* Optional Text Flavor Buttons
          <div className="absolute bottom-20 z-20 flex gap-4">
            {flavorKeys.map((key) => (
              <div
                key={key}
                className={`px-4 py-1 rounded-full text-sm font-semibold ${
                  key === flavor
                    ? "bg-white text-black"
                    : "bg-[#3f3f3f] text-white"
                }`}
              >
                {juiceThemes[key].text.split(" ")[0]}
              </div>
            ))}
          </div> */}

          {/* Scroll Down Button */}
          <div className="absolute hidden md:flex bottom-20 right-6 z-30">
            <button className="w-24 h-24 rounded-full border-2 border-white text-white text-sm font-bold flex items-center justify-center">
              Scroll
              <br />
              Down
            </button>
          </div>
        </div>
      </div>
      {/* <CrossHeading
        text="FRESH BUCKS FRESH BUCKS FRESH BUCKS FRESH BUCKS FRESH BUCKS FRESH BUCKS FRESH BUCKS FRESH BUCKS"
        theme={theme}
      /> */}

      <ShowCase theme={theme} />
      {/* <FreshBucksCard theme={theme} /> */}
      <BrandMarquee direction='left' />
      <WhyChooseUs theme={theme} />
      <Menu theme={theme} />
      {/* <BrandMarquee direction='left'/> */}
      <Feature theme={theme} />

      {/* <OurTeam /> */}

      {/* <HowItWorks theme={theme} /> */}
      <GallerySection theme={theme} />
      <FooterHading theme={theme} />
      <TestimonialCarousel />
      <ContactSection />
      <Footer theme={theme} />
    </>
  );
}

// Assuming FreshBucksGlass is an imported image
// If you don't have this image, replace with your actual image imports
// import FreshBucksGlass from './path-to-your-image';



export const CrossHeading = ({ text, theme }) => {
  const scrollText = text || "FRESH BUCKS FRESH BUCKS FRESH BUCKS";

  return (
    <div
      className="relative w-full h-[100px] transition-all duration-500"
    // style={{ backgroundColor: `var(${theme.bg})` }}
    >
      <div className=" max-w-full left-0 h-[80px] w-[100%]  overflow-hidden bg-green-700 transform -translate-y-1/2  z-10 flex items-center marquee-wrapper">
        <div
          className="marquee-track text-4xl font-bold text-white whitespace-nowrap"
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="mx-4">
              {scrollText}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const WhyChooseUs = ({ theme }) => {
  const featuresLeft = [
    { icon: <FaUsers />, title: "Dedicated Team" },
    { icon: <FaHeart />, title: "Fresh is Best" },
    { icon: <FaGift />, title: "Gift Certificates" },
  ];

  const featuresRight = [
    { icon: <FaTruck />, title: "Integrated Supplier" },
    { icon: <FaLeaf />, title: "Sustainable Practice" },
    { icon: <FaThumbsUp />, title: "The Benefits Only" },
  ];

  const description =
    "Professional employees are there for you to pick the most amazing and fresh fruits.";

  return (
    <div
      className="bg-[#1e3234] py-12 pt-16  px-6 md:px-20 text-white "
    // style={{ backgroundColor: `var(${theme.bg})` }}
    >
      <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us</h2>
      <p className="text-center text-gray-300 max-w-2xl mx-auto mb-16">
        Contrary to popular belief, it’s not simply random text. It has roots in
        a piece of classical Latin literature from 45 BC, making it over 2000
        years old.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">
        {/* Left Features */}
        <div className="flex flex-col gap-8">
          {featuresLeft.map(({ icon, title }, i) => (
            <div key={i} className="flex items-start gap-4">
              <div
                className="bg-green-700 p-3 rounded-full text-white text-xl"
              // style={{ backgroundColor: `var(${theme.bg})` }}
              >
                {icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <img
            src={FreshBucksGlass} // 👉 Replace with your real fruit tray image path
            alt="Fresh Fruits"
            className="rounded-xl w-full max-w-sm object-cover "
          />
        </div>

        {/* Right Features */}
        <div className="flex flex-col gap-8">
          {featuresRight.map(({ icon, title }, i) => (
            <div key={i} className="flex items-start gap-4">
              <div className="bg-green-700 p-3 rounded-full text-white text-xl">
                {icon}
              </div>
              <div>
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="text-gray-300 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: FaAppleAlt,
    title: "Choose Your Flavor",
    description: "Pick from a wide variety of fresh and juicy fruits.",
  },
  {
    icon: FaMugHot,
    title: "Pick Your Cup",
    description: "Select your favorite cup size to enjoy your fruit treat.",
  },
  {
    icon: FaShippingFast,
    title: "We Serve Fresh",
    description: "Freshly prepared and served to delight your taste buds.",
  },
  {
    icon: FaSmileBeam,
    title: "Enjoy Your Drink",
    description: "Sip and refresh yourself with every fruity drop.",
  },
];

export function HowItWorks({ theme }) {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[350px] overflow-hidden">
        {/* Background Image */}
        <div
          style={{
            background: "url('/your-background-image.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="absolute inset-0"
        ></div>

        {/* Dark Overlay */}
        <div
          className="absolute inset-0 z-[1]"
          style={{ backgroundColor: `var(${theme.bg})` }}
        ></div>

        {/* Text Content */}
        <div className="relative flex items-center justify-center h-full text-center z-[10] px-4">
          <div>
            <h1
              className="text-6xl font-bold text-white"
              style={{ fontFamily: "Satoshi-Black" }}
            >
              How It Works
            </h1>
            <p className="mt-2 text-lg font-medium text-gray-300">
              Enjoy fresh fruits in four simple steps!
            </p>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="flex justify-center mt-[-80px] px-6 bg-black  ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 rounded-xl">
          {features.map((feature, index) => (
            <SpotlightCard
              key={index}
              className="z-[9] rounded-lg cursor-pointer bg-[#fcf2e8] text-center px-6 py-6 transition-all duration-500 transform group hover:bg-green-700 hover:text-white sm:hover:-translate-y-2"
              spotlightColor="rgb(34 197 94 / 20%)"
            >
              {/* Icon */}
              <div className="bg-green-700 p-3 rounded-full mx-auto mb-4 transition-all duration-300 group-hover:bg-white">
                <feature.icon className="text-white w-10 h-10 transition-colors duration-300 group-hover:text-green-700" />
              </div>

              {/* Title */}
              <h2 className="text-lg font-semibold text-[#333] transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h2>

              {/* Description */}
              <p className="text-[#555] text-sm mt-1 transition-colors duration-300 group-hover:text-[#f1f1f1]">
                {feature.description}
              </p>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </div>
  );
}

export const FooterHading = ({ theme }) => {
  return (
    <div className="max-w-full h-auto bg-green-700 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 gap-4">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-4 mb-4 md:mb-0">
        <div
          className="text-4xl font-bold text-white whitespace-nowrap"
          style={{ fontFamily: "Satoshi-Bold" }}
        >
          Fresh Bucks
        </div>
      </div>

      {/* Center Section: Contact Info */}
      <div className="text-center text-white gap-4 mb-4 md:mb-0">
        <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full border-2 border-white bg-white text-green-700 hover:bg-green-700 hover:text-white transition">
              <FaWhatsapp className="text-2xl cursor-pointer" />
            </div>
            <span>+91 9372496705</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="p-2 rounded-full border-2 border-white bg-white text-green-700 hover:bg-green-700 hover:text-white transition">
              <FaPhoneAlt className="text-xl cursor-pointer" />
            </div>
            <span>+91 9372496705</span>
          </div>
        </div>
      </div>

      {/* Right Section: Social Media Icons */}
      <div className="flex items-center space-x-4 md:space-x-6 text-white">
        <div className="p-2 rounded-full border-2 border-white bg-white text-green-700 hover:bg-green-700 hover:text-white transition">
          <FaInstagram className="text-2xl cursor-pointer" />
        </div>
        <div className="p-2 rounded-full border-2 border-white bg-white text-green-700 hover:bg-green-700 hover:text-white transition">
          <FaTwitter className="text-2xl cursor-pointer" />
        </div>
        <div className="p-2 rounded-full border-2 border-white bg-white text-green-700 hover:bg-green-700 hover:text-white transition">
          <FaYoutube className="text-2xl cursor-pointer" />
        </div>
        <div className="p-2 rounded-full border-2 border-white bg-white text-green-700 hover:bg-green-700 hover:text-white transition">
          <FaFacebook className="text-2xl cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

// components/GallerySection.jsx


