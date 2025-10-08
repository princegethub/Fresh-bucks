import { ShoppingCart, Smile, Leaf, Star } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Banner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="relative -mt-20" ref={ref}>
      {/* First Section */}
      <div
        className="relative h-[70vh] overflow-hidden max-w-screen py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://img.freepik.com/free-photo/close-up-banana-smoothie_23-2151005939.jpg?w=2000')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="bg-transparent bg-opacity-20 w-4/5 md:h-3/5 h-4/5 p-10 flex flex-col items-center justify-center border border-dashed hover:bg-[#0e7c45] rounded-md text-white transition-all duration-300"
            initial={{ opacity: 0, y: -50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <h2 className="md:text-5xl text-2xl font-bold mb-4">Fresh Bucks Mission</h2>
            <p className="md:text-lg text-base text-center">
              To provide fresh, organic, and sustainable produce while promoting
              healthy living and supporting local farmers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Second Section */}
      <div
        className="relative md:h-[70vh] h-[90vh] py-24 bg-fixed bg-center bg-cover"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://img.freepik.com/free-photo/tasty-fruits-juice-with-vitamins-background_488220-2366.jpg?w=1800')",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-transparent bg-opacity-20 w-4/5 md:h-3/5 h-4/5 p-10 flex flex-col items-center justify-center text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-20">
              {/* Fresh Produce */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <div className="border-2 border-white p-4 rounded-md">
                  <Leaf className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">100%</p>
                <p className="text-base md:text-xl mt-2 uppercase">Organic Produce</p>
              </motion.div>

              {/* Happy Customers */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="border-2 border-white p-4 rounded-md">
                  <Smile className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">500+</p>
                <p className="text-base md:text-xl mt-2 uppercase">Happy Customers</p>
              </motion.div>

              {/* Orders Delivered */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <div className="border-2 border-white p-4 rounded-md">
                  <ShoppingCart className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">10K+</p>
                <p className="text-base md:text-xl mt-2 uppercase">Orders Delivered</p>
              </motion.div>

              {/* Customer Satisfaction */}
              <motion.div
                className="flex flex-col items-center justify-center"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2, duration: 1 }}
              >
                <div className="border-2 border-white p-4 rounded-md">
                  <Star className="w-10 h-10 md:w-20 md:h-20 mb-2 text-white" />
                </div>
                <p className="text-xl md:text-2xl mt-2">4.9/5</p>
                <p className="text-base md:text-xl mt-2 uppercase">Customer Rating</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;