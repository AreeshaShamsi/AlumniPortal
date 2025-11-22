import { useState } from "react";
import React from "react";

const GalleryAchievementsSection = () => {
  const galleryImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600", title: "Campus Life" },
    { id: 2, url: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=600", title: "Tech Fest" },
    { id: 3, url: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=600", title: "Seminar" },
    { id: 4, url: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600", title: "Library" },
    { id: 5, url: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600", title: "Workshop" },
    { id: 6, url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600", title: "Cultural Event" },
  ];

  const achievements = [
    {
      id: 1,
      title: "Best Startup Award 2024",
      winner: "Rahul Verma",
      batch: "2016",
      icon: "🏆",
      description: "Won national startup competition"
    },
    {
      id: 2,
      title: "Research Excellence",
      winner: "Anita Desai",
      batch: "2019",
      icon: "🔬",
      description: "Published in top AI conference"
    },
    {
      id: 3,
      title: "Tech Leader of the Year",
      winner: "Priya Sharma",
      batch: "2018",
      icon: "💡",
      description: "Recognized by Tech Magazine"
    },
    {
      id: 4,
      title: "Social Impact Award",
      winner: "Amit Kumar",
      batch: "2017",
      icon: "🌟",
      description: "NGO helping 10,000+ students"
    },
    {
      id: 5,
      title: "Innovation Excellence",
      winner: "Sneha Patel",
      batch: "2020",
      icon: "🚀",
      description: "Patent for AI technology"
    }
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/40 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-100/40 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main Grid - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">
          
          {/* LEFT SIDE - GALLERY */}
          <div className="relative lg:pr-8">
            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Gallery
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Moments that define our community
              </p>
              <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full w-40 lg:w-48 mx-auto lg:mx-0"></div>
            </div>

            {/* Gallery Grid - 2 columns x 3 rows */}
            <div className="grid grid-cols-2 gap-4">
              {galleryImages.slice(0, 6).map((item) => (
                <div 
                  key={item.id}
                  className="group/card"
                >
                  <div className="
                    relative bg-white rounded-2xl overflow-hidden 
                    shadow-md hover:shadow-xl transition-all duration-500 
                    border-2 border-blue-200 hover:border-blue-400 
                    hover:-translate-y-2
                  ">
                    <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>
                    <div className="relative h-40 md:h-48 overflow-hidden">
                      <img
                        src={item.url}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover/card:scale-110 transition-transform duration-700"
                      />
                      <div className="
                        absolute inset-0 bg-gradient-to-t from-black/60 to-transparent 
                        opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 
                        flex items-end justify-center pb-3
                      ">
                        <span className="text-white font-semibold text-sm">
                          {item.title}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center lg:text-left mt-8">
              <button className="
                px-8 py-3 bg-blue-600 text-white font-semibold text-base
                rounded-full shadow-lg hover:shadow-xl hover:scale-105 
                hover:bg-blue-700 transition-all duration-300
              ">
                View All Photos
              </button>
            </div>
          </div>

          {/* DIVIDER LINE - Only visible on large screens */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-blue-300 to-transparent"></div>

          {/* RIGHT SIDE - ACHIEVEMENTS */}
          <div className="relative lg:pl-8">
            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Alumni Achievements
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Celebrating excellence and success
              </p>
              <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full w-40 lg:w-48 mx-auto lg:mx-0"></div>
            </div>

            {/* Achievements List */}
            <div className="space-y-4 max-h-[500px] overflow-y-auto scrollbar-hide pr-2">
              {achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="group bg-white rounded-xl p-5 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-blue-200 hover:border-blue-400 hover:-translate-x-2"
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-100 to-blue-50 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {achievement.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {achievement.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {achievement.description}
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-blue-600">
                          {achievement.winner}
                        </span>
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                          '{achievement.batch}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center lg:text-left mt-8">
              <button className="
                px-8 py-3 bg-blue-600 text-white font-semibold text-base
                rounded-full shadow-lg hover:shadow-xl hover:scale-105 
                hover:bg-blue-700 transition-all duration-300
              ">
                View All Achievements
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryAchievementsSection;