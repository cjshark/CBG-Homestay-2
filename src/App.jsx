import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./Components/ui/Navbar";
import Hero from "./Components/ui/Hero";
import About2 from "./Components/ui/About_2";
import Blog from "./Components/ui/Blog";
import About from "./Components/ui/about";
import Prices from "./Components/ui/Prices";
import Footer from "./Components/Footer";
import { HashRouter, Routes, Route } from "react-router-dom";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <HashRouter>
      <div className="scrollbar-hide">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div id="home">
                  <Hero />
                </div>

                <div className="min-h-screen p-10 bg-white">
                  <div id="about">
                    <About />
                  </div>

                  <br />
                  <br />

                  <About2 />

                  <div className="mb-10 mt-30" id="prices">
                    <Prices />
                  </div>
                </div>

                <div className="mt-5 min-h-screen" id="blog">
                  <Blog />
                </div>
              </>
            }
          />
        </Routes>

        <footer>
          <Footer />
        </footer>
      </div>
    </HashRouter>
  );
};

export default App;
