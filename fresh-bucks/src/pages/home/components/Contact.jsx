import AOS from "aos";
import "aos/dist/aos.css";

export function ContactSection() {
  return (
    <section className="relative bg-[#0e7c45] text-white overflow-hidden pt-0 pb-12">
      {/* Top Wave */}
      <div className="absolute top-0 w-full h-16 bg-[#FFF0C9] rounded-b-[50%] z-[1]"></div>

      {/* Fruits */}
{/* Left Fruit (Pineapple) */}
<img
  loading="lazy"
  src="https://faryita.wpengine.com/wp-content/uploads/2024/03/footer-img-2.png"
  alt="pineapple"
  className="absolute left-0 sm:left-0 md:left-20 bottom-4 sm:bottom-20 md:bottom-28 w-24 sm:w-40 md:w-56 lg:w-72 z-[30]"
  data-aos="fade-right"
/>

{/* Right Fruit (Grapefruit) */}
<img
  loading="lazy"
  src="https://faryita.wpengine.com/wp-content/uploads/2024/03/footer-img-1.png"
  alt="grapefruit"
  className="absolute right-0 sm:right-0 md:right-16 bottom-2 sm:bottom-8 md:bottom-20 w-24 sm:w-40 md:w-56 lg:w-72 z-[30]"
  data-aos="fade-left"
/>


      {/* Contact Box */}
      <div
        className="relative w-[90%]  max-w-6xl mx-auto border border-dashed border-white p-6 sm:p-10 rounded-xl text-center z-[3] bg-[#0e7c45]/90 backdrop-blur-md"
        data-aos="zoom-in"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-2">
          Get In Touch With Us
        </h2>
        <p className="text-gray-100 mb-6 max-w-lg mx-auto">
          We'd love to hear from you! Fill out the form below and we’ll get back to you shortly.
        </p>

        {/* Contact Form */}
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 rounded-full outline-none border border-white border-dashed text-white bg-transparent"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 rounded-full outline-none border border-white border-dashed text-white bg-transparent"
          />
          <textarea
            placeholder="Your Message"
            rows="3"
            className="p-3 rounded-xl border border-dashed border-white outline-none text-white bg-transparent sm:col-span-2"
          ></textarea>
          <button
            type="submit"
            className="sm:col-span-2 cursor-pointer mt-2 bg-yellow-400 text-[#0e7c45] font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-green-800 transition-all duration-300"
          >
            Send Message →
          </button>
        </form>
      </div>
    </section>
  );
}
