import React, { useState } from "react";

const imageData = [
  {
    label: "Bed Room",
    description: "A cozy and relaxing bedroom to unwind.",
    src: "src/assets/image/bed.jpg",
  },
  {
    label: "Living Room",
    description: "Spacious area for bonding and entertainment.",
    src: "src/assets/image/bg.jpg",
  },
  {
    label: "Kitchen",
    description: "Fully-equipped kitchen for all your cooking needs.",
    src: "src/assets/image/kitchen.jpg",
  },
  {
    label: "Dining Table",
    description: "Enjoy your meals in a homely dining space.",
    src: "src/assets/image/Dining.jpg",
  },
  {
    label: "Restroom",
    description: "Clean, modern restroom with complete amenities.",
    src: "src/assets/image/Restroom.jpg",
  },
];

const About_2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 sm:px-6 md:px-10 overflow-hidden">
      <h2
        className="text-2xl sm:text-3xl font-bold text-slate-700 mb-6 text-center"
        data-aos="zoom-in"
      >
        About Our Space
      </h2>

      <div
        data-aos="fade-left"
        className="relative w-full max-w-6xl flex items-center justify-center mb-6 h-[300px] sm:h-[400px] md:h-[500px]"
      >
        {imageData.map((img, index) => (
          <div
            key={index}
            className={`absolute transition-all duration-1000 ease-in-out rounded-xl overflow-hidden shadow-lg
              ${
                activeIndex === index
                  ? "z-30 w-[90%] sm:w-[500px] md:w-[600px] h-[250px] sm:h-[300px] md:h-[400px] scale-100 translate-x-0 translate-y-0"
                  : "w-[60%] sm:w-[250px] md:w-[300px] h-[150px] sm:h-[200px] hover:z-20"
              }
            `}
            style={{
              zIndex: activeIndex === index ? 30 : 10 + index,
              top: activeIndex === index ? "0" : `${index * 20}px`,
              left: activeIndex === index ? "50%" : `${index * 20}px`,
              transform:
                activeIndex === index
                  ? "translate(-50%, 0)"
                  : `rotate(${(index - 2) * 4}deg)`,
            }}
          >
            <img
              src={img.src}
              alt={img.label}
              className="absolute inset-0 w-full h-full object-cover border-2 border-slate-700"
            />
            {activeIndex === index && (
              <div
                data-aos="fade-up"
                className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 pt-4 pb-2 border-t border-slate-300"
              >
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-800">
                  {img.label}
                </h3>
                <p className="text-slate-600 text-sm mt-1">{img.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-3 md:grid-cols-5 gap-3 w-full max-w-5xl px-4 mb-6">
        {imageData.map((img, index) => (
          <button
            key={index}
            className={`w-full 
        h-8 px-2 text-[10px] 
        sm:h-8 sm:px-4 sm:text-md
        md:h-8 md:px-5 md:text-md 
        lg:h-12 lg:px-6 lg:text-lg 
        rounded-lg shadow-sm font-medium 
        transition-all duration-300 transform hover:scale-105
        ${
          activeIndex === index
            ? "bg-slate-800 text-white"
            : "bg-slate-100 text-slate-800 hover:bg-slate-300"
        }`}
            onClick={() => setActiveIndex(index)}
          >
            {img.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default About_2;
