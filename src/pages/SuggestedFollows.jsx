import React, { useState } from "react";
import { UserPlus, TrendingUp, Award, Sparkles, Users, Zap, ArrowUpRight } from "lucide-react";

const suggestedPeople = [
  {
    id: 1,
    name: "Vikram Singh",
    role: "Tech Lead",
    company: "Amazon",
    avatar: "https://i.pravatar.cc/100?img=33",
    batch: "MCA 2017",
    verified: true,
    mutual: 12,
    trending: true,
    gradient: "from-orange-400 to-pink-500"
  },
  {
    id: 2,
    name: "Sneha Reddy",
    role: "Data Scientist",
    company: "Netflix",
    avatar: "https://i.pravatar.cc/100?img=45",
    batch: "MCA 2019",
    verified: true,
    mutual: 8,
    gradient: "from-purple-400 to-pink-500"
  },
  {
    id: 3,
    name: "Arjun Patel",
    role: "Full Stack Developer",
    company: "Stripe",
    avatar: "https://i.pravatar.cc/100?img=15",
    batch: "MCA 2020",
    verified: false,
    mutual: 15,
    gradient: "from-blue-400 to-cyan-500"
  },
  {
    id: 4,
    name: "Meera Kapoor",
    role: "UX Researcher",
    company: "Adobe",
    avatar: "https://i.pravatar.cc/100?img=26",
    batch: "MCA 2018",
    verified: true,
    mutual: 5,
    trending: true,
    gradient: "from-green-400 to-emerald-500"
  },
  {
    id: 5,
    name: "Karthik Iyer",
    role: "Cloud Architect",
    company: "AWS",
    avatar: "https://i.pravatar.cc/100?img=51",
    batch: "MCA 2016",
    verified: true,
    mutual: 20,
    gradient: "from-indigo-400 to-purple-500"
  }
];

const PersonCard = ({ person }) => {
  const [following, setFollowing] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative p-5 hover:bg-gradient-to-br hover:from-blue-50/50 hover:to-purple-50/30 rounded-2xl transition-all duration-300 group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex items-start gap-4">
        <div className="relative flex-shrink-0">
          <div className={`absolute inset-0 bg-gradient-to-br ${person.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />
          <div className="relative">
            <img
              src={person.avatar}
              alt={person.name}
              className="w-14 h-14 rounded-2xl object-cover ring-2 ring-white shadow-lg"
            />
            {person.verified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Award className="text-white" size={10} fill="white" />
              </div>
            )}
            {person.trending && (
              <div className={`absolute -top-1.5 -right-1.5 w-6 h-6 bg-gradient-to-br ${person.gradient} rounded-full flex items-center justify-center shadow-lg animate-pulse`}>
                <Zap className="text-white" size={12} strokeWidth={2.5} fill="white" />
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-bold text-[15px] text-gray-900 truncate group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {person.name}
                </h4>
                {isHovered && (
                  <ArrowUpRight className="text-blue-600 flex-shrink-0" size={14} strokeWidth={2.5} />
                )}
              </div>
              <p className="text-[13px] text-gray-600 truncate mt-0.5 font-medium">
                {person.role}
              </p>
              <p className="text-[12px] text-gray-500 truncate mt-0.5">
                {person.company}
              </p>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-[11px] font-bold text-blue-600 bg-gradient-to-r from-blue-50 to-blue-100 px-2.5 py-1 rounded-lg">
                  {person.batch}
                </span>
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Users size={11} />
                  <span className="font-semibold text-gray-700">{person.mutual}</span> mutual
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setFollowing(!following);
            }}
            className={`mt-3 w-full px-4 py-2.5 rounded-xl text-[13px] font-bold transition-all duration-300 ${
              following
                ? "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 hover:from-gray-200 hover:to-gray-300"
                : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 hover:scale-[1.02]"
            }`}
          >
            {following ? "Following" : "+ Follow"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default function SuggestedFollows() {
  return (
    <div className="sticky top-6 w-[360px] space-y-5">
      {/* Main Suggestions Card */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50 overflow-hidden backdrop-blur-xl">
        {/* Header with Gradient */}
        <div className="relative p-6 bg-gradient-to-br from-blue-600 via-blue-600 to-purple-600 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1),transparent_50%)]" />
          <div className="relative flex items-center gap-3">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
              <Sparkles className="text-white" size={20} strokeWidth={2.5} />
            </div>
            <div>
              <h2 className="font-bold text-[18px] text-white">
                Discover Alumni
              </h2>
              <p className="text-[13px] text-blue-100 mt-0.5">
                Connect with your network
              </p>
            </div>
          </div>
        </div>

        {/* People List */}
        <div className="divide-y divide-gray-100/50">
          {suggestedPeople.map((person) => (
            <PersonCard key={person.id} person={person} />
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <button className="w-full py-3.5 text-[14px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 rounded-xl hover:bg-white/50">
            View all suggestions →
          </button>
        </div>
      </div>

      

        

       
      
    </div>
  );
}