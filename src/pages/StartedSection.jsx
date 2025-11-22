import React from "react";


const HowToGetStarted = () => {
  const steps = [
    {
      number: "1",
      title: "Sign Up",
      description: "Create your profile with college email",
      icon: "📝"
    },
    {
      number: "2",
      title: "Get Verified",
      description: "Quick verification as student or alumni",
      icon: "✓"
    },
    {
      number: "3",
      title: "Start Connecting",
      description: "Network, mentor, and grow together",
      icon: "🤝"
    }
  ];

  return (
    <div className="w-full bg-white py-20 px-6 relative overflow-hidden">
      {/* Decorative elements matching alumni stories theme */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/40 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-100/40 rounded-full"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            How to Get Started
          </h2>
          <p className="text-lg text-gray-600">
            Join our community in 3 simple steps
          </p>
          <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full w-48 mx-auto mt-3"></div>
        </div>

        {/* Steps - Different layout than alumni stories */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-4 mb-12">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="group relative w-full md:w-64">
                <div className="relative bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-2 overflow-hidden">
                  {/* Top accent */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>

                  {/* Decorative circle */}
                  <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 opacity-50 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                  {/* Number badge */}
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="text-5xl mb-4 text-center transform group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-center leading-relaxed text-sm">
                    {step.description}
                  </p>

                  {/* Bottom decoration */}
                  <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-blue-100 opacity-50 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
                </div>
              </div>

              {/* Arrow between steps - desktop only */}
              {index < steps.length - 1 && (
                <div className="hidden md:block text-blue-400 text-3xl font-bold animate-pulse">
                  →
                </div>
              )}

              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden text-blue-400 text-3xl font-bold rotate-90 animate-pulse">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="
            px-10 py-4 
            bg-blue-600
            text-white font-semibold text-lg
            rounded-full
            shadow-lg hover:shadow-xl
            hover:scale-105 hover:bg-blue-700
            transition-all duration-300
          ">
            Join Our Community
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowToGetStarted;