import { Link } from "react-router-dom"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <div className="relative  bg-fixed bg-center max-w-screen overflow-hidden bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/close-up-banana-smoothie_23-2151005939.jpg?t=st=1746210613~exp=1746214213~hmac=7fedf4d882056cc72f276a7d78a0f6ffdd8a3eb291aba8ed5492d54ef22f97d7&w=2000')" }}>
        <div className="relative w-full pt-20 z-20 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-gray-700 opacity-50"></div>
            <motion.p 
              className="z-30 text-white text-4xl my-16 font-bold"
              initial={{ opacity: 0, y: -50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0 }}
            >
              About Us
            </motion.p>
            <motion.nav 
              className="z-30 w-full bg-[#0e7c45] text-white text-lg py-4"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
                <div className="container mx-auto px-10 flex items-center space-x-3">
                    <Link to="/" className="hover:underline">Home</Link>
                    <span>&gt;&gt;</span>
                    <span>About Us</span>
                </div>
            </motion.nav>
        </div>
        <motion.div 
          className="bg-white w-full flex md:flex-row flex-col items-center justify-center py-16 md:px-10 px-5 min-h-screen"
          // initial={{ opacity: 0 }}
          // animate={isInView ? { opacity: 1 } : {}}
          // transition={{ delay: 1, duration: 1 }}
        >
            <motion.div 
              className="md:w-1/2"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
            >
                <img src="https://img.freepik.com/free-photo/fresh-berry-cocktail-rustic-wooden-table-generated-by-ai_188544-13496.jpg?t=st=1746210870~exp=1746214470~hmac=d35353c7208c1cb86ab54f7da2a010b5cf1c40fd92414d2ab2617f0c7369caa0&w=2000" alt="Hero" className="w-full h-auto" />
            </motion.div>
            <motion.div 
              className="md:w-1/2 md:p-10 p-6"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 1 }}
            >
                <h2 className="md:text-3xl text-2xl font-bold mb-4 text-gray-700">About Satva</h2>
                <p className="md:text-lg text-base text-gray-700">At Satva Living, we believe every space has a story to tell. Established with a passion for design and an eye for detail, we specialize in creating interiors that inspire and captivate. From cozy homes to dynamic commercial spaces, our work reflects a perfect fusion of creativity, craftsmanship, and purpose.</p>
            </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero