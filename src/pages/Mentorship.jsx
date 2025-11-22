import React from "react";

const MentorshipHero = () => {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
        
        {/* Left Content Section */}
        <div className="flex items-center justify-center p-12 lg:p-16 relative z-10">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Mentorship: Empowering Through Experience
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Explore Mentorship: Sharing Wisdom, Shaping Futures
            </p>

            <button className="px-8 py-4 bg-white text-indigo-900 font-semibold text-lg rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Explore Mentorship
            </button>
          </div>
        </div>

        {/* Right Empty Section (Optional for Image / Illustration) */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
};

export default MentorshipHero;
