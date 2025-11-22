import { useState, useEffect } from "react";
import React from "react";

const StatsCard = () => {
  const stats = [
    { number: 2000, label: "Alumni Members", color: "bg-blue-500", textColor: "text-blue-600" },
    { number: 100, label: "Active Events", color: "bg-blue-500", textColor: "text-blue-600" },
    { number: 50, label: "Success Stories", color: "bg-blue-500", textColor: "text-blue-600" }
  ];

  const [counts, setCounts] = useState([0, 0, 0]);

  useEffect(() => {
    const targets = stats.map(s => s.number);
    const duration = 2000;
    const steps = 60;
    const increment = targets.map(t => t / steps);
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCounts(prev =>
          prev.map((count, i) => Math.min(count + increment[i], targets[i]))
        );
        currentStep++;
      } else {
        clearInterval(timer);
        setCounts(targets);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white py-20 px-6 relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-blue-100/40 rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-100/40 rounded-full"></div>
      
      {/* Small dots pattern */}
      <div className="absolute top-40 right-20 grid grid-cols-3 gap-3 opacity-10">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold mb-3 text-gray-800">
              Our Community
            </h2>
            <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Subtle shadow */}
              <div className="
                absolute inset-0 bg-blue-500 opacity-0 blur-xl rounded-3xl
                group-hover:opacity-10 transition-all duration-500
              "></div>

              {/* Main Card - Fixed Height */}
              <div className="
                relative bg-white rounded-2xl p-10
                shadow-md hover:shadow-xl
                transition-all duration-500
                hover:-translate-y-2
                border-2 border-gray-100
                overflow-hidden
                h-64 flex flex-col items-center justify-center
              ">
                {/* Subtle top accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>

                {/* Small decorative circle */}
                <div className="
                  absolute -top-6 -right-6 w-20 h-20 bg-blue-100 opacity-50 rounded-full
                  group-hover:scale-125 transition-transform duration-700
                "></div>

                {/* Content */}
                <div className="relative z-10 text-center">
                  {/* Number */}
                  <div className="mb-3">
                    <span className="
                      text-7xl font-bold text-blue-600
                      transform group-hover:scale-105 inline-block transition-transform duration-500
                    ">
                      {Math.floor(counts[index])}
                    </span>
                    <span className="text-4xl font-bold text-blue-600">+</span>
                  </div>

                  {/* Label */}
                  <p className="text-lg font-semibold text-gray-700">
                    {stat.label}
                  </p>

                  {/* Simple line decoration */}
                  <div className="mt-5 flex justify-center">
                    <div className="
                      w-16 h-0.5 bg-blue-400 rounded-full
                      group-hover:w-20 transition-all duration-500
                    "></div>
                  </div>
                </div>

                {/* Bottom decoration */}
                <div className="
                  absolute -bottom-3 -left-3 w-16 h-16 bg-blue-100 opacity-50 
                  rounded-full group-hover:scale-125 transition-transform duration-700
                "></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
       
      </div>
    </div>
  );
};

export default StatsCard;