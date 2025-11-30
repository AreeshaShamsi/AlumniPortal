import React from "react";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-center justify-center py-5 px-1">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
      
      {/* Dynamic gradient fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,white_90%)]"></div>

      {/* Energetic Bubbles - Responsive sizes */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full bg-gradient-to-br from-blue-700/20 to-blue-900/10 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] translate-x-1/3 translate-y-1/3">
        <div className="w-full h-full bg-gradient-to-tl from-blue-800/20 to-blue-700/10 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating accent circles - Hidden on small mobile */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-blue-700/15 rounded-full animate-float"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/5 w-20 h-20 md:w-32 md:h-32 bg-blue-800/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      {/* Dynamic particles - Smaller on mobile */}
      <div className="absolute top-[25%] right-[35%] w-2 h-2 md:w-3 md:h-3 bg-blue-700 rounded-full animate-ping"></div>
      <div className="absolute bottom-[40%] left-[30%] w-2 h-2 md:w-3 md:h-3 bg-blue-900 rounded-full animate-ping" style={{animationDelay: '1.5s'}}></div>

      {/* Content - Moved up towards navbar */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-6xl mx-auto -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28">
      
      

        {/* Bold Heading - Much better mobile scaling */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-none tracking-tight mb-4 md:mb-6">
          <span className="block text-gray-900">MCA</span>
          <span className="block bg-gradient-to-r from-blue-700 via-blue-800 to-blue-700 bg-clip-text text-transparent">
            AlumniHub
          </span>
        </h1>


        {/* Punchy Tagline - Better mobile size */}
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-700 mb-8 md:mb-12">
          Connect. Grow. <span className="text-blue-600">Thrive.</span>
        </p>

        {/* Action Buttons - Better mobile layout */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4 mb-8 md:mb-12 w-full sm:w-auto">
          <button className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-base md:text-xl rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="flex items-center justify-center gap-2">
              Get Started
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </button>
          
          <button className="group w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-blue-950 font-bold text-base md:text-xl rounded-lg border-2 border-blue-950 hover:bg-purple-50 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* Quick Stats - Better mobile spacing */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-center">
          <div>
            <p className="text-3xl sm:text-4xl font-black text-blue-700">5K+</p>
            <p className="text-xs sm:text-sm font-semibold text-gray-600">Alumni</p>
          </div>
          <div className="w-px h-10 sm:h-12 bg-gray-300"></div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-blue-800">50+</p>
            <p className="text-xs sm:text-sm font-semibold text-gray-600">Countries</p>
          </div>
          <div className="w-px h-10 sm:h-12 bg-gray-300"></div>
          <div>
            <p className="text-3xl sm:text-4xl font-black text-blue-900">100+</p>
            <p className="text-xs sm:text-sm font-semibold text-gray-600">Companies</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(-15px, -15px);
          }
          66% {
            transform: translate(15px, 15px);
          }
        }

        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }

        .animate-float {
          animation: float 12s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;