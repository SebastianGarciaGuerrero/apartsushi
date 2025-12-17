import React from "react";

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section Container */}
      <div className="relative w-full h-[600px] bg-neutral-800 overflow-hidden flex items-center justify-center">
        {/* BACKGROUND IMAGE PLACEHOLDER */}
        {/* Replace the bg-neutral-800 above and this div with your actual <img> tag or background-image CSS */}
        <div className="absolute inset-0 w-full h-full bg-slate-200">
          {/* Abstract shapes to simulate the blurry background in the reference */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
          <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold text-2xl border-4 border-slate-300 border-dashed m-4">
            [Hero Background Image Placeholder]
          </div>
        </div>

        {/* Central Overlay Content */}
        <div className="relative z-20 flex flex-col items-center justify-center">
          {/* Rotated Logo Graphic */}
          <div className="relative mb-8 transform -rotate-12 transition-transform hover:rotate-0 duration-500">
            {/* This simulates the red sun graphic behind the text */}
            <div className="w-64 h-64 bg-red-600 rounded-full flex items-center justify-center shadow-2xl relative overflow-hidden">
              {/* Sun rays effect (simplified) */}
              <div className="absolute w-full h-2 bg-red-500 top-10"></div>
              <div className="absolute w-full h-2 bg-red-500 bottom-10"></div>

              {/* Text Overlay */}
              <div className="flex flex-col items-center leading-none text-white transform rotate-12">
                <span className="text-6xl font-black tracking-tighter drop-shadow-md">
                  Apart
                </span>
                <span className="text-6xl font-black tracking-tighter drop-shadow-md">
                  Sushi
                </span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-red-600 hover:bg-red-700 text-white font-medium italic text-lg px-8 py-2 rounded shadow-lg transform hover:scale-105 transition-all">
            Haz tu pedido
          </button>
        </div>
      </div>

      {/* Content Below Hero (Teaser) */}
      <div className="w-full py-16 bg-white text-center">
        <div className="text-sm font-handwriting text-gray-500 mb-2 italic">
          Conoce
        </div>
        <h2 className="text-4xl font-black text-red-600 uppercase tracking-tighter">
          Nuestra Carta
        </h2>
        <div className="mt-8 container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Placeholders for food items */}
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="h-48 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300"
            >
              <span className="text-gray-400 font-medium">
                [Food Item Placeholder {item}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
