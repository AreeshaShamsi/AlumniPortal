import React, { useState } from "react";
import { Home, Briefcase, MessageCircle, Bell, User, Search, X } from "lucide-react";

import Logo from "../assets/logo.jpeg";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Briefcase, label: "Jobs", active: false },
  { icon: MessageCircle, label: "Messages", active: false, badge: 3 },
  { icon: Bell, label: "Notifications", active: false, badge: 5 },
];

const mobileNavItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Briefcase, label: "Jobs", active: false },
  { icon: Bell, label: "Notifications", active: false, badge: 5 },
];

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="hidden lg:flex items-center justify-between px-6 xl:px-10 h-16 bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        {/* Left - Logo + Search */}
        <div className="flex items-center gap-3 xl:gap-6">
             <div className="flex items-center gap-2">
                    <img
                      src={Logo}
                      alt="logo"
                      className="h-10 w-10 md:h-16 md:w-auto rounded-full object-contain shadow-sm"
                    />
                    <div className="text-2xl font-bold tracking-wide text-blue-700">
                      MCA<span className="text-gray-800"> AlumniHub</span>
                    </div>
                  </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              className="w-64 xl:w-80 rounded-lg border border-gray-300 pl-10 pr-4 py-2 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
              placeholder="Search alumni, companies, posts..."
              aria-label="Search"
            />
          </div>
        </div>

        {/* Center - Nav items */}
        <div className="flex gap-6 xl:gap-12">
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`relative flex flex-col items-center gap-1 cursor-pointer transition-colors group ${
                activeTab === i ? "text-gray-600 hover:text-gray-900" : "text-gray-600 hover:text-gray-900"
              }`}
              aria-label={item.label}
            >
               <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-black transition-all duration-300 group-hover:w-full"></span>
               
              <div className="relative">
                <item.icon size={24} className="transition-transform group-hover:scale-110" />
                {item.badge && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className="text-xs font-medium">{item.label}</span>
              
            </button>
          ))}
        </div>

        {/* Right - Profile */}
        <div className="flex items-center gap-4">
          <button className="relative group">
            <img
              src="https://i.pravatar.cc/40?img=47"
              alt="User profile"
              className="w-10 h-10 rounded-full border-2 border-gray-200 hover:border-blue-500 transition-all cursor-pointer object-cover"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
          </button>
        </div>
      </nav>

      {/* Mobile Top Navbar */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 px-4 py-3 bg-white/95 backdrop-blur-lg z-50 border-b border-gray-200 flex items-center justify-between shadow-sm">
           <div className="flex items-center gap-2">
                  <img
                    src={Logo}
                    alt="logo"
                    className="h-10 w-10 md:h-16 md:w-auto rounded-full object-contain shadow-sm"
                  />
                  <div className="text-2xl font-bold tracking-wide text-blue-700">
                    MCA<span className="text-gray-800"> AlumniHub</span>
                  </div>
                </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-700 hover:text-black transition-colors"
            aria-label="Toggle search"
          >
            {searchOpen ? <X size={24} /> : <Search size={24} />}
          </button>
          <button className="relative" aria-label="Messages">
            <MessageCircle size={24} className="text-gray-700 hover:text-black transition-colors" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              3
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="lg:hidden fixed top-16 left-0 right-0 px-4 py-3 bg-white border-b border-gray-200 z-40 shadow-lg animate-in slide-in-from-top">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-2.5 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              placeholder="Search alumni, companies, posts..."
              autoFocus
              aria-label="Search"
            />
          </div>
        </div>
      )}

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] max-w-md bg-white/95 backdrop-blur-xl shadow-2xl border border-gray-200 rounded-2xl flex justify-around items-center py-3 z-50">
        {mobileNavItems.map((item, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className={`relative flex flex-col items-center gap-1 transition-all ${
              activeTab === i ? "text-blue-600 scale-110" : "text-gray-600 active:scale-95"
            }`}
            aria-label={item.label}
          >
            <div className="relative">
              <item.icon size={22} />
              {item.badge && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {item.badge > 9 ? "9+" : item.badge}
                </span>
              )}
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
        <button
          className={`relative flex flex-col items-center gap-1 transition-all ${
            activeTab === 4 ? "text-blue-600 scale-110" : "text-gray-600 active:scale-95"
          }`}
          onClick={() => setActiveTab(4)}
          aria-label="Profile"
        >
          <div className="relative">
            <User size={22} />
            <div className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full" />
          </div>
          <span className="text-xs font-medium">Me</span>
        </button>
      </nav>

      {/* Spacer for mobile bottom nav */}
      <div className="lg:hidden h-20" />
    </>
  );
}