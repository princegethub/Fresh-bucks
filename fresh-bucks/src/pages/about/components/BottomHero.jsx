import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const BottomHero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
      <div ref={ref}>
        <div className="flex md:flex-row max-w-screen overflow-hidden flex-col items-center justify-center py-16 px-10 bg-white">
          <motion.div 
            className="md:w-1/2 md:p-5"
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <img src="https://img.freepik.com/free-photo/fresh-lemon-slice-glass-perfect-summer-refreshment-generated-by-artificial-intelligence_188544-128867.jpg?t=st=1746212306~exp=1746215906~hmac=6656e6c466e4b42dd7528484382c2cca6b6b755083e2a6795150293d7fd5296c&w=2000" alt="Fresh Bucks Journey" className="w-full h-auto" />
          </motion.div>
          <motion.div 
            className="md:w-1/2 md:p-5 py-5 space-y-6"
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <h2 className="md:text-6xl text-4xl font-bold mb-4 text-gray-700">Our Journey</h2>
            <p className="text-gray-700">Fresh Bucks started with a simple idea: to make fresh, organic, and sustainable produce accessible to everyone. Over the years, we’ve partnered with local farmers and communities to bring the best quality products to your table.</p>
            <p className="text-gray-500 ">In 2025, Fresh Bucks expanded its mission to include promoting healthy living and supporting eco-friendly practices worldwide.</p>
          </motion.div>
        </div>
        <div className="relative min-h-screen bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/fresh-lemonade-refreshing-drink-healthy-summer-generated-by-artificial-intelligence_188544-129437.jpg?t=st=1746212051~exp=1746215651~hmac=e6d90424fac5d76f25d8b716f59995a92fad0d3eab3ee320fb60ba6ae7b0fd94&w=2000')" }}>
          <motion.div 
            className="absolute md:my-36 my-28 mx-10 md:mx-40 md:w-5/12 flex items-center justify-center bg-[#ffffffe3] bg-opacity-50 p-2 rounded-md"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3 }}
          >
            <div className="p-10 text-gray-700">
              <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
              <p>At Fresh Bucks, we believe in sustainability, community, and health. Our mission is to empower people to live healthier lives by providing fresh, organic produce while supporting local farmers and eco-friendly practices.</p>
            </div>
          </motion.div>
        </div>
      </div>
    )
}

export default BottomHero;