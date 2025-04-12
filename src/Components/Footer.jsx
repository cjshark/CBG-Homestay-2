import React, { useState } from "react"; // Import useState here
import { Facebook, Instagram, LucideTwitter } from "lucide-react";
import BookNowModal from "../Components/ui/modal"; // Ensure this is imported correctly

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

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
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleRoomSelect = (room) => {
    setSelectedRoom(room);
  };

  return (
    <>
      <footer className="bg-slate-800 text-slate-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="flex flex-col items-center">
            <img
              className="h-12 w-12 mb-3 rounded-full"
              src="src/assets/logo.jpg"
              alt="logo"
            />
            <h2 className="text-xl font-bold mb-2">CBG Suites</h2>
            <p className="text-sm lg:text-md text-slate-300 max-w-xs">
              Your home away from home. Cozy, comfortable, and complete.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-[15px] text-slate-300">
              <li>
                <a
                  href="#home"
                  className="inline-block text-slate-300 hover:text-white hover:underline hover:underline-offset-8 transition-transform duration-200 ease-in-out transform hover:scale-110"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="inline-block text-slate-300 hover:text-white hover:underline hover:underline-offset-8 transition-transform duration-200 ease-in-out transform hover:scale-110"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#prices"
                  className="inline-block text-slate-300 hover:text-white hover:underline hover:underline-offset-8 transition-transform duration-200 ease-in-out transform hover:scale-110"
                >
                  Prices
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className="inline-block text-slate-300 hover:text-white hover:underline hover:underline-offset-8 transition-transform duration-200 ease-in-out transform hover:scale-110"
                >
                  Blog
                </a>
              </li>
            </ul>
            <button
              onClick={openModal}
              className="mt-3 rounded-2xl h-8 px-6 border-2 border-white text-white font-medium transition hover:bg-slate-200 hover:text-slate-700 transform hover:scale-105 duration-200 ease-in-out"
            >
              Book Now
            </button>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-3">Contact</h3>
            <ul className="text-sm text-slate-300 space-y-2 max-w-xs">
              <li>Email: cbgsuites@email.com</li>
              <li>Phone: +63 912 345 6789</li>
              <li>
                Location: Cordillera St., Central Park Subd., Bangkal, Davao
                City
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-5 text-slate-300">
              <a
                href="#"
                className=" size-5 transition-all duration-300 ease-in-out hover:text-white transform hover:scale-110"
              >
                <Facebook size={35} />
              </a>
              <a
                href="#"
                className=" size-5 transition-all duration-300 ease-in-out hover:text-white transform hover:scale-110"
              >
                <Instagram size={35} />
              </a>
              <a
                href="#"
                className=" ml-1 size-5 transition-all duration-300 ease-in-out hover:text-white transform hover:scale-110"
              >
                <LucideTwitter size={35} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center text-xs text-slate-400">
          © {new Date().getFullYear()} CBG Suites. All rights reserved.
        </div>
      </footer>

      {/* Book Now Modal */}
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

export default Footer;
