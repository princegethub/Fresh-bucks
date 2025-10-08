import React, { useState } from "react";

import FreshBucksGlass from "../../../assets/images/FreshBucksGlass.png";
import { Pattern } from "../../../components/shared/Pattern";

const cardData = [
  {
    title: "Green Detox",
    subtitle: "Fresh Spinach & Apple",
    calories: "Calories",
    totalFat: "Vitamins",
    fatValue: "A, C, K",
    saturatedFat: "Minerals",
    saturatedValue: "Iron, Calcium",
    transFat: "Benefits",
    transFatValue: "Detox, Energy",
    image: FreshBucksGlass,
  },
  {
    title: "Berry Blast",
    subtitle: "Mixed Berries & Yogurt",
    calories: "Calories",
    totalFat: "Vitamins",
    fatValue: "C, E, K",
    saturatedFat: "Minerals",
    saturatedValue: "Potassium, Calcium",
    transFat: "Benefits",
    transFatValue: "Antioxidants",
    image: FreshBucksGlass,
  },
  {
    title: "Tropical Paradise",
    subtitle: "Mango & Pineapple",
    calories: "Calories",
    totalFat: "Vitamins",
    fatValue: "A, C, B6",
    saturatedFat: "Minerals",
    saturatedValue: "Magnesium, Potassium",
    transFat: "Benefits",
    transFatValue: "Immunity, Energy",
    image: FreshBucksGlass,
  },
  {
    title: "Citrus Boost",
    subtitle: "Orange & Ginger",
    calories: "Calories",
    totalFat: "Vitamins",
    fatValue: "C, B6",
    saturatedFat: "Minerals",
    saturatedValue: "Potassium, Folate",
    transFat: "Benefits",
    transFatValue: "Immunity, Digestion",
    image: FreshBucksGlass,
  },
  {
    title: "Red Power",
    subtitle: "Beetroot & Carrot",
    calories: "Calories",
    totalFat: "Vitamins",
    fatValue: "A, C, K",
    saturatedFat: "Minerals",
    saturatedValue: "Iron, Potassium",
    transFat: "Benefits",
    transFatValue: "Energy, Stamina",
    image: FreshBucksGlass,
  }
];

const FreshBucksCard = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div className="relative overflow-hidden">
      <Pattern color="#FDEDBF" />

      <div className="z-[9999999999999999] pb-24 bg-[#FDEDBF] pt-36 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-8 lg:gap-10 justify-items-center max-w-[1920px] mx-auto">
          {cardData.map((card, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(-1)}
                className={`relative rounded-2xl w-full max-w-[280px] md:max-w-[300px] h-[420px] flex flex-col transition-all duration-500 ease-in-out cursor-pointer transform hover:scale-[1.02] ${
                  isActive
                    ? "bg-green-700 text-white shadow-2xl"
                    : "bg-white text-gray-800 shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Image Container */}
                <div className="absolute -top-16 left-1/2 -translate-x-1/2 transform transition-transform duration-500 ease-in-out hover:scale-105">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-[180px] md:w-[220px] lg:w-[260px] h-auto object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Card Content */}
                <div className="pt-24 md:pt-28 p-4 md:p-6 flex flex-col h-full">
                  <div className="text-center mb-4 md:mb-6 mt-4">
                    <h2 className="text-xl md:text-2xl font-bold mb-2">
                      {card.title}
                    </h2>
                    <h3 className={`text-lg md:text-xl font-medium ${
                      isActive ? 'text-green-200' : 'text-green-600'
                    }`}>
                      {card.subtitle}
                    </h3>
                  </div>

                  {isActive ? (
                    <div className="space-y-4 mt-auto animate-fadeIn">
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <label className="text-sm font-medium block text-green-100">
                            Size:
                          </label>
                          <div className="relative">
                            <select className="w-full bg-green-900/30 backdrop-blur-sm outline-none text-white p-2 rounded-lg appearance-none border border-green-400/20 transition-all duration-300 hover:bg-green-900/40">
                              <option>Select a size</option>
                              <option>Small (250ml)</option>
                              <option>Medium (350ml)</option>
                              <option>Large (500ml)</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M7 10l5 5 5-5H7z" />
                              </svg>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium block text-green-100">
                            Temperature:
                          </label>
                          <div className="relative">
                            <select className="w-full bg-green-900/30 backdrop-blur-sm outline-none text-white p-2 rounded-lg appearance-none border border-green-400/20 transition-all duration-300 hover:bg-green-900/40">
                              <option>Select temperature</option>
                              <option>Chilled</option>
                              <option>Room Temperature</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                              <svg
                                className="w-4 h-4 fill-current"
                                viewBox="0 0 20 20"
                              >
                                <path d="M7 10l5 5 5-5H7z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <button className="mt-4 w-full bg-white/90 text-green-800 font-medium py-3 rounded-full hover:bg-white transition-all duration-300 transform hover:scale-[1.02] shadow-lg">
                        ADD TO BASKET
                      </button>
                    </div>
                  ) : (
                    <div className="mt-auto space-y-3 text-sm animate-fadeIn">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">{card.calories}</span>
                        <span className="font-bold">120-150</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">{card.totalFat}</span>
                        <span className="font-bold">{card.fatValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="font-medium">{card.saturatedFat}</span>
                        <span className="font-bold">{card.saturatedValue}</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="font-medium">{card.transFat}</span>
                        <span className="font-bold">{card.transFatValue}</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FreshBucksCard;
