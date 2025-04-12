import React from "react";

const Blog = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2
        data-aos="fade-up"
        className="text-3xl font-bold text-gray-800 mb-4 text-center"
      >
        Discover Davao & Homestay Stories
      </h2>
      <p data-aos="fade-up" className="text-center text-slate-700 mb-12">
        Read travel tips, guest stories, and local highlights to help you make
        the most of your stay at CBG Suites.
      </p>

      <div
        data-aos="fade-up-left"
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      >
        {/* Blog Post 1 */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg hover:shadow-slate-950 flex flex-col justify-between transition-all duration-200 ease-in-out transform hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              🌴 Exploring Davao: Top 5 Must-Visit Attractions
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              By Team CBG · April 2025
            </p>
            <p className="text-slate-700 mb-4">
              From the serene Eden Nature Park to the bustling Roxas Night
              Market, get to know the best of Davao that’s just minutes away
              from your homestay.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline hover:underline-offset-8 mt-4 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Read more →
          </a>
        </div>

        {/* Blog Post 2 */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg hover:shadow-slate-950 flex flex-col justify-between transition-all duration-200 ease-in-out transform hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              🛏️ Guest Diaries: A Weekend Stay at CBG Suites
            </h3>
            <p className="text-sm text-slate-500 mb-3">
              By Maria L., Manila · March 2025
            </p>
            <p className="text-slate-700 mb-4">
              "A cozy and clean home! We felt like locals. The kitchen was fully
              equipped and the neighborhood was so peaceful."
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline hover:underline-offset-8 mt-4 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Read more →
          </a>
        </div>

        {/* Blog Post 3 */}
        <div className="bg-gray-100 rounded-2xl shadow-md p-6 hover:shadow-lg hover:shadow-slate-950 flex flex-col justify-between transition-all duration-200 ease-in-out transform hover:scale-105">
          <div>
            <h3 className="text-xl font-semibold text-slate-700 mb-2">
              🧳 Local Essentials: What to Bring for Your Stay at CBG Suites
            </h3>
            <p className="text-sm text-gray-500 mb-3">
              By CBG Hosts · February 2025
            </p>
            <p className="text-gray-700 mb-4">
              Not sure what to pack for Davao? From lightweight clothing to
              local-friendly footwear and bug spray, we've got your essentials
              covered—whether you're headed to the beach, hiking, or just
              relaxing at our cozy homestay.
            </p>
          </div>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline hover:underline-offset-8 mt-4 transition-all duration-200 ease-in-out transform hover:scale-105"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
