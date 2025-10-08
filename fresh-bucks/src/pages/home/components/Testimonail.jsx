import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const testimonials = [
  {
    name: "John Doe",
    role: "Marketing Manager",
    rating: 5,
    text: "Vestibulum faucibus imperdiet consectetur. Nulla facilisi. Praesent viverra nulla eu eros tincidunt, vel sagittis odio laoreet. Curabitur lacinia",

    image: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Jane Smith",
    role: "Product Designer",
    rating: 4,
    text: "Vestibulum faucibus imperdiet consectetur. Nulla facilisi. Praesent viverra nulla eu eros tincidunt, vel sagittis odio laoreet. Curabitur lacinia",
    image: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Alex Johnson",
    role: "CEO, Startup",
    rating: 5,
    text: "Vestibulum faucibus imperdiet consectetur. Nulla facilisi. Praesent viverra nulla eu eros tincidunt, vel sagittis odio laoreet. Curabitur lacinia",
    image: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "Alex Johnson",
    role: "CEO, Startup",
    rating: 5,
    text: "Vestibulum faucibus imperdiet consectetur. Nulla facilisi. Praesent viverra nulla eu eros tincidunt, vel sagittis odio laoreet. Curabitur lacinia",
    image: "https://i.pravatar.cc/100?img=3",
  },
];

const StarSVG = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-4 h-4"
    viewBox="0 0 24 24"
    fill={filled ? "#FACC15" : "none"}
    stroke="#FACC15"
    strokeWidth="1.5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.48 3.499l2.09 4.235 4.67.678-3.38 3.294.797 4.648-4.177-2.197-4.177 2.197.797-4.648-3.38-3.294 4.67-.678 2.09-4.235z"
    />
  </svg>
);

const TestimonialCarousel = () => {
  return (
    <section className="bg-[#FFF0C9] py-32">
      <div className="md:px-24 px-6 mx-auto ">
      <div className="relative text-center mb-12">
  <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-800 relative z-10">
 
      What Our  <span className=" rounded-full px-4 bg-gradient-to-r from-green-400 via-[#77ee70] to-green-600">   Clients</span> Are Saying

  </h2>
  <div className="absolute left-1/2 transform -translate-x-1/2 sm:translate-x-[200px] bottom-0 w-24 h-1 bg-gradient-to-r from-green-400 via-[#77ee70] to-green-600 rounded-full"></div>
</div>

        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Autoplay]}
        >
          {testimonials.map((t, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-white cursor-pointer p-6 md:p-8 rounded-3xl w-full relative group overflow-hidden transition-transform duration-500">
                {/* Hover splash image */}
                {/* Hover splash image */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0">
                  <img
                    src="https://faryita.wpengine.com/wp-content/uploads/2024/03/testimonial-bg.png"
                    alt="Splash"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-2">
                    <div className="text-yellow-400 w-8 h-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 100 100"
                        className="w-full h-full text-yellow-400 fill-yellow-400"
                      >
                        <path d="M74.7,91.9L54.4,81.1V67.9c0-8,1.5-15.6,4.4-22.8c3.1-7.4,7.3-14.2,12.5-20.3C76.6,18.6,82.7,13,89.3,8.1 c1.7,0.8,3.1,2,4.4,3.4c1.5,1.2,2.6,2.9,3.4,4.9c-5.6,4.9-10.3,10-14,15.1c-3.7,5.1-6.4,10.6-8.1,16.3l20,9.9v23.4L74.7,91.9z  M23.2,91.9L2.9,81.1V67.9c0-8,1.5-15.6,4.4-22.8c3.1-7.4,7.3-14.2,12.5-20.3C25.1,18.6,31.2,13,37.8,8.1c1.7,0.8,3.1,2,4.4,3.4 c1.5,1.2,2.6,2.9,3.4,4.9c-5.6,4.9-10.3,10-14,15.1c-3.7,5.1-6.4,10.6-8.1,16.3l20,9.9v23.4L23.2,91.9z"></path>
                      </svg>
                    </div>
                    <div className="flex ">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarSVG key={i} filled={i < t.rating} />
                      ))}
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6 text-base md:text-lg font-medium">
                    {t.text}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={t.image}
                      alt={t.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-400"
                    />
                    <div>
                      <p className="font-bold text-zinc-800 text-base">
                        {t.name}
                      </p>
                      <p className="text-sm text-zinc-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
