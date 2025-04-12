import React, { useState } from "react";
import BookNowModal2 from "../modal2";

const Prices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      name: "Room 1 – Deluxe Suite",
      price: "₱2,500 / night",
      features: "Private bathroom, queen bed, AC, Smart TV",
    },
    {
      name: "Room 2 – Comfort Room",
      price: "₱2,200 / night",
      features: "Double bed, shared bathroom, AC, workspace",
    },
    {
      name: "Room 3 – Budget Room",
      price: "₱1,800 / night",
      features: "Single bed, fan, shared bathroom, cozy nook",
    },
    {
      name: "Room 4 – Family Room",
      price: "₱3,000 / night",
      features: "2 queen beds, private bath, ideal for groups",
    },
  ];

  const openModal = (room) => {
    setSelectedRoom(room); // Set the selected room based on which button was clicked
    setIsModalOpen(true); // Open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
  };

  return (
    <div className="overflow-x-hidden flex justify-center">
      <section
        data-aos="fade-up"
        className="bg-slate-700 max-h-[140vh] w-full max-w-7xl py-16 px-4 sm:px-6 lg:px-8 rounded-2xl backdrop-blur-lg"
      >
        <h2
          data-aos="fade-down"
          className="text-2xl sm:text-3xl font-bold text-slate-100 text-center mb-6"
        >
          Room Rates & Features
        </h2>
        <p
          data-aos="fade-down"
          className="text-center text-sm sm:text-base text-slate-300 mb-10"
        >
          All guests enjoy access to our spacious living room, fully equipped
          kitchen, dining area, and free Wi-Fi.
        </p>
        <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
          {rooms.map((room, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className="bg-white w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-3xl shadow-md p-4 sm:p-6 flex flex-col justify-between h-full transition-all duration-500 ease-in-out transform hover:scale-105 hover:shadow-2xl"
            >
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {room.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  {room.features}
                </p>
              </div>
              <div className="mt-auto flex justify-between items-center">
                <div className="text-sm sm:text-sm md:text-lg lg:text-xl font-bold text-slate-900">
                  {room.price}
                </div>
                <button
                  onClick={() => openModal(room)} // Pass the room to the modal
                  className="bg-slate-700 text-slate-100 rounded-2xl h-8 px-3 text-[10px] sm:h-9 sm:px-4 sm:text-xs md:h-10 md:px-6 md:text-sm lg:h-12 lg:px-8 lg:text-base border-2 border-slate-700 font-medium transition-all duration-300 hover:cursor-pointer transform hover:scale-105"
                >
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedRoom && (
        <BookNowModal2
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedRoom={selectedRoom} // Pass the selected room to the modal
        />
      )}
    </div>
  );
};

export default Prices;
