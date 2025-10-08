import '../../../styles/globalCss.css'
import React from "react";
import {
  Leaf,
  Grape,
  ShieldCheck,
  Star,
  FlaskConical,
  Cuboid,
} from "lucide-react";

export default function FeatureSection({ theme }) {
  return (
    <section className="bg-[#FDEDBF] flex flex-col md:flex-row items-center justify-center p-10 md:p-20 gap-10">
      {/* RIGHT TEXT & FEATURES */}
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[#1F1F1F] mb-10 leading-tight tracking-tight">
             <span className=" rounded-full px-4 bg-gradient-to-r from-green-400 mr-4 via-[#77ee70] to-green-600">   100%</span>Fresh Juice
        </h2>

        {/* FEATURES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[#1F1F1F]">
          {[
            {
              icon: <Cuboid className="text-green-700 w-18 h-18" />,
              title: "Organic Sweetener",
              desc: "Vestibulum lectus mauris ultrices eros in massa.",
            },
            {
              icon: <Leaf className="text-green-700 w-18 h-18" />,
              title: "Natural Goods",
              desc: "Faucibus scelerisque eleifend donec sapien nec sagittis.",
            },
            {
              icon: <Grape className="text-green-700 w-18 h-18" />,
              title: "Fresh Organic Fruits",
              desc: "Aliquet risus feugiat in ante dictum at commodo.",
            },
            {
              icon: <ShieldCheck className="text-green-700 w-18 h-18" />,
              title: "Completely Natural",
              desc: "Gravida dictum fusce ut orci nulla dignissim enim.",
            },
            {
              icon: <Star className="text-green-700 w-18 h-18" />,
              title: "Higher In Yum",
              desc: "Sagittis nisl rhoncus mattis urna neque viverra justo nec.",
            },
            {
              icon: <FlaskConical className="text-green-700 w-18 h-18" />,
              title: "Bottled In Glass",
              desc: "Risus commodo viverra accumsan lacus vel.",
            },
          ].map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
           
              {feature.icon}
              <div>
                <h4 className="font-semibold text-lg mb-1">{feature.title}</h4>
                <p className="text-base text-gray-800 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-10 px-8 py-4 bg-green-700 text-white rounded-full font-semibold text-lg shadow-md hover:bg-green-800 transition-all duration-300">
          Discover Menu
        </button>
      </div>

      {/* LEFT IMAGE SIDE */}
      <div className="relative w-full flex justify-end md:w-1/2">
        <div className="rounded-tl-[200px] rounded-bl-[200px] overflow-hidden">
          <video
            className="elementor-video w-[400px] h-auto"
            src="https://faryita.wpengine.com/wp-content/uploads/2024/04/Juice-video-output.mp4"
            autoPlay
            loop
            muted
            playsInline
            controlsList="nodownload"
          />
        </div>
        <img
          src="https://faryita.wpengine.com/wp-content/uploads/2024/03/h1-filler-2-img-02.png"
          alt="Orange slices"
          className="absolute bottom-0 right-0 w-32 md:w-96"
        />
      </div>
    </section>
  );
}
