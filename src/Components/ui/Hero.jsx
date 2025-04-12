import React, { useState } from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";
import BookNowModal from "./modal";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null); // Initially no room is selected

  const rooms = [
    {
      name: "Deluxe Suite",
      price: "₱2,500 / night",
      features: "Private bathroom, queen bed, AC, Smart TV",
    },
    {
      name: "Comfort Room",
      price: "₱2,200 / night",
      features: "Double bed, shared bathroom, AC, workspace",
    },
    {
      name: "Budget Room",
      price: "₱1,800 / night",
      features: "Single bed, fan, shared bathroom, cozy nook",
    },
    {
      name: "Family Room",
      price: "₱3,000 / night",
      features: "2 queen beds, private bath, ideal for groups",
    },
  ];

  const openModal = () => {
    setIsModalOpen(true); // Open modal when "Book Now" is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room); // Set the selected room
  };

  return (
    <>
      <div
        data-aos="fade-down"
        className="flex flex-col items-center justify-center min-h-screen px-6 pt-10 pb-16 lg:flex-row lg:justify-center lg:gap-10 lg:px-20"
      >
        <div className="flex flex-col items-center text-center max-w-full lg:max-w-[900px]">
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-7xl text-slate-700">
            CBG Suites Homestay
          </h2>
          <p className="mt-12 sm:text-lg text-slate-900 font-medium max-w-[600px] mx-auto">
            Cozy Home Away From Home 🏠 (Daily Rental) Looking for a spacious,
            comfortable and affordable place to stay in Davao City? Our
            exclusive house rental is perfect for big groups, families, or
            visitors/tourists seeking a cozy homestay experience.
          </p>
          <div className="z-10 flex flex-wrap justify-center gap-4 mt-14">
            <button className="bg-transparent text-slate-700 rounded-2xl h-12 px-10 border-2 border-slate-700 font-medium transition-all duration-300 hover:bg-slate-700 hover:text-white transform hover:scale-105">
              Learn More
            </button>

            <button
              onClick={openModal} 
              className="rounded-2xl h-12 px-10 border-2 border-slate-700 text-slate-700 font-medium transition hover:bg-slate-700 hover:text-white transform hover:scale-105 duration-200 ease-in-out"
            >
              Book Now
            </button>
          </div>

          <div className="flex justify-center space-x-7 mt-7 mr-2">
            <a
              href="#"
              className="transition-all duration-300 transform hover:scale-125"
            >
              <Facebook size={35} color="#334155" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="transition-all duration-300 transform hover:scale-125"
            >
              <Instagram size={35} color="#334155" strokeWidth={2} />
            </a>
            <a
              href="#"
              className="transition-all duration-300 transform hover:scale-125"
            >
              <Twitter size={35} color="#334155" strokeWidth={2} />
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <BookNowModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedRoom={selectedRoom} // Pass the selected room to the modal
          rooms={rooms} // Pass the available rooms for selection
          onRoomSelect={handleRoomSelect} // Handle room selection inside the modal
        />
      )}
    </>
  );
};

export default Hero;
