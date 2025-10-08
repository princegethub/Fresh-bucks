import React from "react";

const juices = [
    {
      name: "Berry Blast Juice",
      price: "$8.99",
      desc: "A refreshing mix of strawberries, blueberries, and a twist of lemon.",
      img: "https://img.freepik.com/free-photo/fresh-berry-smoothie-jar-wooden-table_1150-24509.jpg",
    },
    {
      name: "Citrus Cooler",
      price: "$10.25",
      desc: "Chilled orange and lime juice with a touch of mint. Perfect for summer.",
      img: "https://img.freepik.com/free-photo/glass-orange-juice-with-ice_144627-18861.jpg",
    },
    {
      name: "Tropical Punch",
      price: "$11.75",
      desc: "Pineapple, mango, and coconut fusion served icy cold.",
      img: "https://img.freepik.com/free-photo/tropical-smoothie-glass-topped-with-fruit-slices_123827-25052.jpg",
    },
    {
      name: "Minty Melon Juice",
      price: "$9.50",
      desc: "Watermelon puree blended with mint and a dash of lime.",
      img: "https://img.freepik.com/free-photo/fresh-watermelon-juice-glass-summer_53876-145267.jpg",
    },
    {
      name: "Choco Almond Shake",
      price: "$12.00",
      desc: "Rich chocolate blended with almond milk and crunchy toppings.",
      img: "https://img.freepik.com/free-photo/chocolate-smoothie-with-nuts_140725-2895.jpg",
    },
    {
      name: "Lime Sparkle Juice",
      price: "$8.75",
      desc: "A tangy lime drink with soda fizz and ice cubes.",
      img: "https://img.freepik.com/free-photo/lime-mojito-cocktail-refreshment-drink_53876-138291.jpg",
    },
    {
      name: "Peach Paradise",
      price: "$10.95",
      desc: "Sweet peach juice with vanilla and tropical notes.",
      img: "https://img.freepik.com/free-photo/peach-smoothie-glass-wooden-background_123827-25127.jpg",
    },
    {
      name: "Sunset Mix Juice",
      price: "$13.40",
      desc: "Layered juice of mango, berries, and papaya with a citrus kick.",
      img: "https://img.freepik.com/free-photo/fruit-smoothie-glass-with-layered-colors_140725-8613.jpg",
    },
  ];
  

export default function MenuShowcase() {
  return (
    <section className="flex flex-col lg:flex-row min-h-screen bg-[#0e7c45] text-white">
      {/* LEFT POSTER */}
      <div className="w-full lg:w-[40%] bg-orange-500 flex items-center justify-center">
        <img
          src="https://faryita.wpengine.com/wp-content/uploads/2024/04/jusice-banner-img.jpg"
          alt="Orange Juice"
          className="w-full h-full object-cover"
        />
      </div>

      {/* RIGHT MENU */}
      <div className="w-full lg:w-[60%] px-6 py-10 overflow-y-auto max-h-screen">
        <h2
          className="text-4xl md:text-6xl font-extrabold text-center mb-10"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Delicious <span className="bg-text">Juice</span> Menus
        </h2>
        <ul className="space-y-8">
          {juices.map((juice, index) => (
            <li key={index} className="flex items-start gap-4">
              <img
                src={juice.img}
                alt={juice.name}
                className="w-16 h-16 object-cover cursor-pointer rounded-full border-2 border-white 
             transition-all duration-500 ease-in-out 
             hover:scale-110 hover:rotate-3 hover:ring-4 hover:ring-yellow-300 
             hover:drop-shadow-xl shadow-inner shadow-yellow-100"
              />

              <div className="flex-1">
                <div className="flex justify-between items-center flex-wrap">
                  <h3 className="font-bold text-lg sm:text-2xl">
                    {juice.name}
                  </h3>
                  <span className="font-bold text-md sm:text-xl">
                    {juice.price}
                  </span>
                </div>
                <p className="text-sm sm:text-md text-gray-200">{juice.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
