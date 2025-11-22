import { useState, useEffect } from "react";
import React from "react";

const Carousel = () => {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070",
      title: "Stay Connected.",
      subtitle: "Your journey with KCMT doesn't end at graduation—this is where it grows",
      accent: "orange"
    },
    {
      image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2086",
      title: "Where Alumni Inspire the Future",
      subtitle: "Connect, mentor, network, and shape the next chapter of KCMT.",
      accent: "blue"
    },
    {
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600",
      title: "Join Events & Reunions",
      subtitle: "Stay updated with campus activities, meets, and professional gatherings.",
      accent: "red"
    }
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const accentColors = {
    orange: {
      bg: "from-orange-500 to-red-500",
      text: "text-orange-400",
      dot: "bg-orange-400",
      button: "bg-orange-500 hover:bg-orange-600"
    },
    blue: {
      bg: "from-blue-500 to-indigo-600",
      text: "text-blue-400",
      dot: "bg-blue-400",
      button: "bg-blue-500 hover:bg-blue-600"
    },
    red: {
      bg: "from-red-500 to-pink-600",
      text: "text-red-400",
      dot: "bg-red-400",
      button: "bg-red-500 hover:bg-red-600"
    }
  };

  const currentAccent = accentColors[slides[current].accent];

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-6">
      {/* Slide Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === current ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60"></div>
        </div>
      ))}

      {/* Decorative geometric shapes */}
      <div className="absolute top-20 right-20 w-32 h-32 border-4 border-white/20 rotate-12 rounded-3xl animate-pulse hidden lg:block"></div>
      <div className="absolute bottom-32 left-20 w-24 h-24 border-4 border-white/20 rounded-full animate-pulse hidden lg:block" style={{ animationDelay: '1s' }}></div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 transition-all duration-700 ${
              index === current 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Accent bar above title */}
            <div className={`w-24 h-1.5 bg-gradient-to-r ${currentAccent.bg} rounded-full mb-6 shadow-lg`}></div>

            {/* Title with creative styling */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 text-center drop-shadow-2xl max-w-5xl leading-tight">
              {slide.title.split(' ').map((word, i) => (
                <span 
                  key={i}
                  className={i === 0 ? `bg-gradient-to-r ${currentAccent.bg} bg-clip-text text-transparent` : ''}
                >
                  {word}{' '}
                </span>
              ))}
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-10 text-center max-w-4xl drop-shadow-lg font-medium leading-relaxed">
              {slide.subtitle}
            </p>

            {/* CTA Buttons with playful style */}
            <div className="flex flex-col sm:flex-row gap-4 pointer-events-auto">
              <button className={`
                px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5
                bg-gradient-to-r ${currentAccent.bg}
                text-white font-bold rounded-full
                hover:scale-105 hover:shadow-2xl
                transition-all duration-300 
                text-base sm:text-lg md:text-xl
                shadow-xl
              `}>
                Explore More →
              </button>
              <button className={`
                px-8 sm:px-10 md:px-12 py-3.5 sm:py-4 md:py-5
                bg-white/10 backdrop-blur-md border-2 border-white
                text-white font-bold rounded-full
                hover:bg-white hover:text-gray-900 hover:scale-105
                transition-all duration-300 
                text-base sm:text-lg md:text-xl
                shadow-xl
              `}>
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows with colorful style */}
      <button
        onClick={prevSlide}
        className={`
          hidden md:flex absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 z-30 
          items-center justify-center
          w-14 h-14 lg:w-16 lg:h-16
          bg-white/10 backdrop-blur-md border-2 border-white/20
          hover:bg-gradient-to-r ${currentAccent.bg} hover:border-transparent
          text-white
          rounded-full transition-all duration-300
          hover:scale-110 shadow-xl
        `}
      >
        <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className={`
          hidden md:flex absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 z-30 
          items-center justify-center
          w-14 h-14 lg:w-16 lg:h-16
          bg-white/10 backdrop-blur-md border-2 border-white/20
          hover:bg-gradient-to-r ${currentAccent.bg} hover:border-transparent
          text-white
          rounded-full transition-all duration-300
          hover:scale-110 shadow-xl
        `}
      >
        <svg className="w-6 h-6 lg:w-7 lg:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Colorful Dots Navigation */}
      <div className="absolute bottom-8 sm:bottom-10 md:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3 items-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              transition-all duration-300 rounded-full
              ${index === current
                ? `${accentColors[slide.accent].dot} w-12 sm:w-14 md:w-16 h-3 shadow-lg`
                : "bg-white/40 w-3 h-3 hover:bg-white/60 hover:scale-125"
              }
            `}
          />
        ))}
      </div>

      {/* Slide counter with playful style */}
      <div className="absolute top-6 right-6 z-30 hidden sm:block">
        <div className={`
          px-5 py-2.5 
          bg-white/10 backdrop-blur-md border border-white/20
          rounded-full
          text-white font-bold text-lg
          shadow-xl
        `}>
          <span className={`bg-gradient-to-r ${currentAccent.bg} bg-clip-text text-transparent`}>
            {current + 1}
          </span>
          <span className="text-white/60"> / {slides.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Carousel;