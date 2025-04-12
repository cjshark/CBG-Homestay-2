import { useState, useEffect } from "react";
import logo from "../../../public/assets/logo.jpg";
import { Menu, X } from "lucide-react";
import BookNowModal from "./modal";
import { Link } from "react-scroll";

const Navbar = () => {
  const [OpenDrawer, SetOpenDrawer] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [activeLink, setActiveLink] = useState("home");

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

  const toggleNavbar = () => {
    SetOpenDrawer(!OpenDrawer);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        SetOpenDrawer(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 px-3 backdrop-blur-lg border-b border-neutral-500">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center">
            <div className="flex items-center flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full mr-2"
                src={logo}
                alt="logo"
              />
              <a className="mt-1.5" href="#">
                <span className="text-xl tracking-tight font-medium text-slate-700">
                  CBG Hometay
                </span>
              </a>
            </div>

            <ul className="hidden lg:flex ml-14 space-x-12 font-bold text-slate-700 text-[15px] mt-1 items-center">
              {["home", "about", "prices", "blog"].map((section) => (
                <Link
                  key={section}
                  to={section}
                  smooth={true}
                  duration={300}
                  spy={true}
                  offset={-90}
                  onClick={() => setActiveLink(section)}
                  onSetActive={() => setActiveLink(section)}
                  className={`mt-2 cursor-pointer transition-all duration-200 ease-in-out transform hover:scale-110 hover:text-slate-900 hover:underline hover:underline-offset-4 ${
                    activeLink === section
                      ? "text-slate-900 scale-105 underline underline-offset-4"
                      : ""
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              ))}
              <button
                onClick={openModal}
                className="rounded-2xl h-12 px-10 border-2 border-slate-700 text-slate-700 font-medium transition hover:bg-slate-700 hover:text-white transform hover:scale-105 duration-200 ease-in-out"
              >
                Book Now
              </button>
            </ul>
            <div className="lg:hidden md:flex flex-col justify-end">
              <button className="hover:cursor-pointer" onClick={toggleNavbar}>
                {OpenDrawer ? <X color="#334155" /> : <Menu color="#334155" />}
              </button>
            </div>
          </div>

          {OpenDrawer && (
            <div className="fixed top-16 right-0 z-20 w-full px-12 pt-12 pb-8 backdrop-blur-lg bg-[#f5f5dc]/90">
              <ul className="flex flex-col justify-center items-center font-bold text-neutral-700">
                <Link
                  to="home"
                  smooth={true}
                  duration={300}
                  offset={-80}
                  onClick={() => {
                    handleLinkClick("about");
                    SetOpenDrawer(false);
                  }}
                  className="mt-2 hover:text-slate-900 hover:cursor-pointer hover:underline hover:underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Home
                </Link>

                <Link
                  to="about"
                  smooth={true}
                  duration={300}
                  offset={-80}
                  onClick={() => {
                    handleLinkClick("about");
                    SetOpenDrawer(false);
                  }}
                  className="mt-2 hover:text-slate-900 hover:underline hover:cursor-pointer hover:underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  About
                </Link>

                <Link
                  to="prices"
                  smooth={true}
                  duration={300}
                  offset={-80}
                  onClick={() => {
                    handleLinkClick("about");
                    SetOpenDrawer(false);
                  }}
                  className="mt-2 hover:text-slate-900 hover:underline hover:cursor-pointer hover:underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Prices
                </Link>

                <Link
                  to="blog"
                  smooth={true}
                  duration={300}
                  offset={-80}
                  onClick={() => {
                    handleLinkClick("about");
                    SetOpenDrawer(false);
                  }}
                  className="mt-2 hover:text-slate-900 hover:underline hover:cursor-pointer hover:underline-offset-4 transition-all duration-200 ease-in-out transform hover:scale-105"
                >
                  Blog
                </Link>

                <button
                  onClick={openModal}
                  className="mt-4 rounded-2xl h-8 px-10 border-2 border-slate-700 text-slate-700 font-medium transition hover:bg-slate-700 hover:text-white transform hover:scale-105 duration-200 ease-in-out"
                >
                  Book Now
                </button>
              </ul>
            </div>
          )}
        </div>
      </nav>

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

export default Navbar;
