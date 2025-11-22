import { useState } from "react";
import React from "react";

const AlumniStories = () => {
  const stories = [
    {
      id: 1,
      name: "Priya Sharma",
      batch: "Class of 2018",
      role: "Senior Software Engineer",
      company: "Google",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
      story:
        "KCMT gave me the foundation to excel in tech. The supportive environment and innovative curriculum prepared me for challenges at Google.",
      achievement: "Led AI projects impacting millions",
    },
    {
      id: 2,
      name: "Rahul Verma",
      batch: "Class of 2016",
      role: "Founder & CEO",
      company: "TechStart Solutions",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400",
      story:
        "The entrepreneurial spirit at KCMT inspired me to start my own venture. Today, we're a team of 50+ helping businesses transform digitally.",
      achievement: "Built a $5M revenue startup",
    },
    {
      id: 3,
      name: "Anita Desai",
      batch: "Class of 2019",
      role: "Data Scientist",
      company: "Microsoft",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400",
      story:
        "The hands-on projects and mentorship at KCMT helped me discover my passion for data science. Now I'm working on cutting-edge ML models.",
      achievement: "Published research in top AI conferences",
    },
    {
      id: 4,
      name: "Arjun Patel",
      batch: "Class of 2017",
      role: "Product Manager",
      company: "Amazon",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400",
      story:
        "KCMT taught me to think beyond code. The diverse curriculum helped me transition from developer to product management successfully.",
      achievement: "Managing products used by 100M+ users",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-blue-50 via-white to-blue-50 py-20 px-6 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/40 rounded-full"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-100/40 rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Alumni Success Stories
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Hear from our alumni making waves across industries
          </p>
          <div className="h-1.5 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-400 rounded-full mx-auto w-52"></div>
        </div>

        {/* Stories Grid - 1 col on mobile, 2 cols on md, 4 cols on lg+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story) => (
            <div
              key={story.id}
              className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-500 border-2 border-gray-100 hover:border-blue-200 hover:-translate-y-2 overflow-hidden flex flex-col"
            >
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-500"></div>

              {/* Decorative circle */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-blue-100 opacity-50 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

              {/* Profile Image - Centered */}
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-24 h-24 rounded-full object-cover border-4 border-blue-100 shadow-md group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                    {story.batch.split(" ")[2]}
                  </div>
                </div>
              </div>

              {/* Content - Centered */}
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-800 mb-1">
                  {story.name}
                </h3>
                <p className="text-xs text-gray-500 mb-3">{story.batch}</p>

                <p className="text-base font-semibold text-blue-600 mb-1">
                  {story.role}
                </p>
                <p className="text-sm text-gray-600 font-medium mb-4">
                  {story.company}
                </p>

                <p className="text-gray-700 leading-relaxed text-sm mb-4 flex-1">
                  "{story.story}"
                </p>

                {/* Achievement Badge */}
                <div className="inline-flex items-center justify-center gap-2 bg-blue-50 px-3 py-2 rounded-full border border-blue-100 mt-auto">
                  <span className="text-lg">🏆</span>
                  <span className="text-xs font-semibold text-blue-700">
                    {story.achievement}
                  </span>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-blue-100 opacity-50 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-10 py-4 bg-blue-600 text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 hover:bg-blue-700 transition-all duration-300">
            View All Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlumniStories;