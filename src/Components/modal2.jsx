import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BookNowModal2 = ({ isOpen, onClose, selectedRoom }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!isOpen) return null;

  const handleConfirm = () => {
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
    console.log("Room:", selectedRoom.name); // Logs the selected room

    if (!name || !email || !startDate || !endDate) {
      alert("Please fill out all fields.");
      return;
    }

    alert(
      `Booking confirmed\n\nName: ${name}\nEmail: ${email}\nRoom: ${
        selectedRoom.name
      }\nPrice: ${
        selectedRoom.price
      }\nFrom: ${startDate.toDateString()} to ${endDate.toDateString()}`
    );

    // Reset all fields
    setName("");
    setEmail("");
    setStartDate(null);
    setEndDate(null);

    // Close modal after a delay
    setTimeout(() => {
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-transparent backdrop-blur-sm flex items-center justify-center px-4">
      <div className="bg-[#f5f5dc] rounded-2xl shadow-lg shadow-slate-900 max-w-md w-full px-5 pt-15 pb-10 relative">
        <button
          className="absolute top-2 right-3 text-slate-500 hover:text-slate-700 text-xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <h2 className="text-xl font-bold text-slate-700 mb-4 text-center">
          Book Your Stay
        </h2>

        {/* Room Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Selected Room:
          </label>
          <input
            type="text"
            value={selectedRoom.name}
            readOnly
            className="w-full border-2 border-slate-700 rounded-3xl px-3 py-2 text-sm placeholder-slate-700 text-slate-700"
          />
        </div>

        {/* Price */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Price:
          </label>
          <input
            type="text"
            value={selectedRoom.price}
            readOnly
            className="w-full border-2 border-slate-700 rounded-3xl px-3 py-2 text-sm placeholder-slate-700 text-slate-700"
          />
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Name:
          </label>
          <input
            type="text"
            className="w-full border-2 border-slate-700 rounded-3xl px-3 py-2 text-sm placeholder-slate-700 text-slate-700"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Email:
          </label>
          <input
            type="email"
            className="w-full border-2 border-slate-700 rounded-3xl px-3 py-2 text-sm placeholder-slate-700 text-slate-700"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
          />
        </div>

        {/* Check-in Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Check-in Date:
          </label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)} // Ensure the date is set properly
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="Select a start date"
            className="w-full border-2 border-slate-700 rounded-2xl px-3 py-2 text-sm placeholder-slate-700 text-slate-700"
          />
        </div>

        {/* Check-out Date */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-700 mb-1">
            Check-out Date:
          </label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)} // Ensure the date is set properly
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            placeholderText="Select an end date"
            className="w-full border-2 border-slate-700 rounded-2xl px-3 py-2 text-sm placeholder-slate-700 text-slate-700"
          />
        </div>

        <button
          className="bg-transparent mt-5 border-2 border-slate-700 text-slate-700 w-full py-2 rounded-2xl hover:bg-slate-700 hover:text-slate-100 transition duration-300"
          onClick={handleConfirm}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default BookNowModal2;
