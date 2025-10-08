import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const HeadingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div
        className="relative bg-fixed bg-center max-w-screen overflow-hidden bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/close-up-banana-smoothie_23-2151005939.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",  
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay", 
          
        }}
      >
        <div className="relative w-full pt-20 z-20 flex flex-col items-center justify-center">
          <div className="absolute inset-0 bg-gray-800 opacity-60"></div>
          <motion.p
            className="z-30 text-white text-4xl my-16 font-bold"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0 }}
          >
            Contact Us
          </motion.p>
          <motion.nav
            className="z-30 w-full bg-[#0e7c45] text-white text-lg py-4"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="container mx-auto px-10 flex items-center space-x-3">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>&gt;&gt;</span>
              <span>Contact Us</span>
            </div>
          </motion.nav>
        </div>
        <motion.div
          className="bg-black shadow-lg rounded-lg p-8 max-w-4xl mx-auto my-12 flex flex-col md:flex-row items-center md:items-stretch"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {/* Left: Details */}
          <div className="md:w-1/2 w-full md:pr-8 flex flex-col justify-center text-center md:text-left mb-8 md:mb-0">
            <p className="text-white uppercase tracking-widest mb-2">
              The Geniuses Behind Our Work
            </p>
            <h1 className="text-4xl font-bold text-yellow-500 mb-4">
              Our Team
            </h1>
            <h2 className="text-2xl font-bold text-white mb-2">
              Er. Prince Mishra / CEO & Founder
            </h2>
            <p className="text-gray-200 mb-4">
              Full Stack Developer & AI Enthusiast
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a className="text-gray-500 hover:text-yellow-500" href="https://www.instagram.com/er.diwakar07/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram-f">instagram</i>
              </a>
              <a className="text-gray-500 hover:text-yellow-500" href="#">
                <i className="fab fa-twitter">twitter</i>
              </a>
              <a className="text-gray-500 hover:text-yellow-500" href="#">
                <i className="fab fa-google-plus-g">git hub</i>
              </a>
              <a className="text-gray-500 hover:text-yellow-500" href="#">
                <i className="fab fa-linkedin-in">linkedin</i>
              </a>
            </div>
            <p className="text-gray-200 mb-4">
             Hi, I'm Prince Mishra, a B.Tech student in Computer Science and Engineering, passionate about Full Stack Development.
            </p>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600">
              View Profile
            </button>
          </div>
          {/* Right: Image */}
          <div className="md:w-1/2 w-full flex justify-center items-center">
            <img
              alt="Portrait of a team member"
              className="rounded-full border-4 border-yellow-500 w-64 h-64 object-cover"
              // src="someone.jpeg"
              src="https://storage.googleapis.com/a1aa/image/x0VsMf_JPhyoO53NSKagwwjt-mNtD0UNb5iZHM9m5co.jpg"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeadingSection;