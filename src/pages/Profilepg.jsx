import React, { useState } from "react";
import { 
  MapPin, Briefcase, Calendar, Globe, 
  MessageCircle, UserPlus, Award, 
  Download, Share2, Mail, Linkedin, 
  Twitter, Building2, GraduationCap,
  ChevronDown, Check, Instagram, Github,
  Heart, MessageSquare, Repeat2, Bookmark,
  TrendingUp, Sparkles, Zap
} from "lucide-react";

const profileData = {
  name: "Priya Sharma",
  role: "Senior Software Engineer",
  company: "Google",
  batch: "MCA 2019",
  avatar: "https://i.pravatar.cc/800?img=5",
  coverImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&h=400&fit=crop",
  verified: true,
  location: "Bangalore, Karnataka, India",
  education: "Master of Computer Applications",
  website: "priyasharma.dev",
  email: "priya.sharma@google.com",
  bio: "I'm currently heading up the engineering efforts at Google, leading innovative AI solutions that impact millions of users globally. Passionate about mentoring and building scalable systems.",
  stats: {
    connections: 500,
    posts: 247,
    followers: 12847,
    following: 834
  },
  experience: [
    {
      id: 1,
      title: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      startDate: "Jan 2021",
      endDate: "Present",
      duration: "3 years",
      description: "Leading the development of AI-powered features that serve 10M+ users. Built scalable microservices architecture and mentored a team of 5 engineers.",
      logo: "https://cdn-icons-png.flaticon.com/128/2991/2991148.png"
    },
    {
      id: 2,
      title: "Software Engineer",
      company: "Microsoft",
      location: "Hyderabad, India",
      startDate: "Jul 2019",
      endDate: "Dec 2020",
      duration: "1.5 years",
      description: "Developed cloud-based solutions for Azure platform. Implemented CI/CD pipelines and improved deployment efficiency by 40%.",
      logo: "https://cdn-icons-png.flaticon.com/128/732/732221.png"
    },
    {
      id: 3,
      title: "Software Engineering Intern",
      company: "Amazon",
      location: "Bangalore, India",
      startDate: "Jan 2019",
      endDate: "Jun 2019",
      duration: "6 months",
      description: "Built internal tools for inventory management system. Worked with React and AWS services.",
      logo: "https://cdn-icons-png.flaticon.com/128/5977/5977585.png"
    }
  ],
  education: [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "Indian Institute of Technology, Delhi",
      location: "New Delhi, India",
      startDate: "2017",
      endDate: "2019",
      grade: "CGPA: 8.9/10",
      description: "Specialized in Artificial Intelligence and Machine Learning. Completed thesis on Deep Learning applications in Computer Vision.",
      logo: "https://cdn-icons-png.flaticon.com/128/3976/3976625.png"
    },
    {
      id: 2,
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Delhi University",
      location: "New Delhi, India",
      startDate: "2014",
      endDate: "2017",
      grade: "Percentage: 85%",
      description: "Core subjects: Data Structures, Algorithms, Database Management, Web Development.",
      logo: "https://cdn-icons-png.flaticon.com/128/3976/3976625.png"
    }
  ]
};

const posts = [
  {
    id: 1,
    content: "Just shipped a major AI feature serving 10M+ users! 🚀 The journey from concept to production was intense but incredibly rewarding.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    likes: 1247,
    comments: 89,
    timeAgo: "2h"
  },
  {
    id: 2,
    content: "Published a comprehensive guide on distributed system design patterns 📚 Covers microservices, event-driven architectures, and scaling strategies.",
    likes: 892,
    comments: 45,
    timeAgo: "1d"
  }
];

const PostCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all">
      <p className="text-gray-800 text-[15px] leading-relaxed mb-4">{post.content}</p>
      {post.image && (
        <img src={post.image} alt="Post" className="w-full h-48 object-cover rounded-xl mb-4" />
      )}
      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setLiked(!liked)}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg font-semibold text-sm transition-all ${
              liked ? 'bg-rose-100 text-rose-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <Heart size={16} className={liked ? "fill-current" : ""} />
            <span>{post.likes}</span>
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 font-semibold text-sm transition-all">
            <MessageSquare size={16} />
            <span>{post.comments}</span>
          </button>
        </div>
        <span className="text-sm text-gray-400">{post.timeAgo}</span>
      </div>
    </div>
  );
};

export default function ProfilePage() {
  const [showBio, setShowBio] = useState(false);
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-7xl">
      {/* Desktop & Tablet: Header with Cover */}
      <div className="hidden md:block">
        <div className="relative h-64 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-t-3xl overflow-hidden shadow-xl">
          <img src={profileData.coverImage} alt="Cover" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between -mt-20 pb-6 bg-white rounded-b-3xl shadow-xl px-6">
            {/* Avatar & Info */}
            <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
              <div className="relative">
                <img 
                  src={profileData.avatar} 
                  alt={profileData.name}
                  className="w-40 h-40 rounded-full object-cover border-8 border-white shadow-2xl"
                />
                {profileData.verified && (
                  <div className="absolute bottom-2 right-2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                    <Award className="text-white" size={18} fill="white" />
                  </div>
                )}
              </div>
              
              <div className="text-center sm:text-left pb-4">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">{profileData.name}</h1>
                  <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">
                    {profileData.batch}
                  </span>
                </div>
                <p className="text-lg text-gray-700 font-medium mb-1">{profileData.role}</p>
                <p className="text-gray-600">{profileData.company}</p>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 mt-4 lg:mt-0 pb-4 pr-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 border border-gray-300 rounded-xl font-semibold text-gray-700 transition-all shadow-sm">
                <Download size={18} strokeWidth={2} />
                <span>Save Contact</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg">
                <MessageCircle size={18} strokeWidth={2} />
                <span>Message</span>
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition-all shadow-lg">
                <UserPlus size={18} strokeWidth={2} />
                <span>Follow</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile: Card Style */}
      <div className="md:hidden bg-white rounded-3xl overflow-hidden shadow-xl">
        <div className="relative">
          {/* Profile Image */}
          <div className="relative h-[500px] bg-gradient-to-br from-blue-100 to-purple-100">
            <img 
              src={profileData.avatar} 
              alt={profileData.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/70 backdrop-blur-md rounded-full">
              <span className="text-white text-xs font-bold">★ Pro</span>
            </div>
            {profileData.verified && (
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                <Check className="text-white" size={16} strokeWidth={3} />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{profileData.name}</h1>
              {profileData.verified && (
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                  <Check className="text-white" size={12} strokeWidth={3} />
                </div>
              )}
            </div>
            <p className="text-gray-700 font-medium mb-1">{profileData.role}</p>
            <p className="text-gray-500 text-sm mb-4">{profileData.location}</p>

            {/* Action Buttons */}
            <div className="flex gap-3 mb-6">
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-xl font-semibold transition-all">
                <Download size={18} />
                Save Contact
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-semibold transition-all">
                <Share2 size={18} />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 bg-white md:rounded-b-3xl md:shadow-xl">
        {/* Tabs */}
        <div className="bg-white rounded-2xl p-2 border border-gray-200 mb-6">
          <div className="flex gap-2">
            {["about", "posts", "activity"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold text-sm capitalize transition-all ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Stats */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp size={18} className="text-blue-600" />
                Stats
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.posts}</div>
                  <div className="text-xs text-gray-500 mt-1">Posts</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{(profileData.stats.followers/1000).toFixed(1)}K</div>
                  <div className="text-xs text-gray-500 mt-1">Followers</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.following}</div>
                  <div className="text-xs text-gray-500 mt-1">Following</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-xl">
                  <div className="text-2xl font-bold text-gray-900">{profileData.stats.connections}+</div>
                  <div className="text-xs text-gray-500 mt-1">Connections</div>
                </div>
              </div>
            </div>

            {/* Details */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Details</h3>
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <Briefcase size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Company</div>
                    <div className="text-gray-900 font-semibold">{profileData.company}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Education</div>
                    <div className="text-gray-900 font-semibold">{profileData.education[0].degree}</div>
                    <div className="text-gray-600 text-xs">{profileData.batch}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Location</div>
                    <div className="text-gray-900 font-semibold">{profileData.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Email</div>
                    <a href={`mailto:${profileData.email}`} className="text-blue-600 font-semibold hover:underline break-all">
                      {profileData.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Globe size={18} className="text-gray-400 mt-0.5" />
                  <div>
                    <div className="text-gray-500 text-xs mb-0.5">Website</div>
                    <a href="#" className="text-blue-600 font-semibold hover:underline">
                      {profileData.website}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4">Connect</h3>
              <div className="grid grid-cols-4 gap-3">
                <button className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all">
                  <Linkedin size={20} className="text-blue-600 mx-auto" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-blue-100 rounded-xl transition-all">
                  <Twitter size={20} className="text-blue-400 mx-auto" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-pink-100 rounded-xl transition-all">
                  <Instagram size={20} className="text-pink-600 mx-auto" />
                </button>
                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-xl transition-all">
                  <Github size={20} className="text-gray-900 mx-auto" />
                </button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-2 space-y-6">
            {activeTab === "about" && (
              <>
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-4">About</h3>
                  <p className="text-gray-700 leading-relaxed">{profileData.bio}</p>
                </div>

                {/* Experience Section */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-xl">
                    <Briefcase size={22} className="text-blue-600" />
                    Experience
                  </h3>
                  <div className="space-y-6">
                    {profileData.experience.map((exp, index) => (
                      <div key={exp.id} className={`flex gap-4 ${index !== profileData.experience.length - 1 ? 'pb-6 border-b border-gray-100' : ''}`}>
                        {/* Company Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                            <img src={exp.logo} alt={exp.company} className="w-8 h-8 object-contain" />
                          </div>
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{exp.title}</h4>
                          <p className="font-semibold text-gray-700 mb-1">{exp.company}</p>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-3">
                            <span>{exp.startDate} - {exp.endDate}</span>
                            <span className="text-gray-300">•</span>
                            <span>{exp.duration}</span>
                            <span className="text-gray-300">•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </span>
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Education Section */}
                <div className="bg-white rounded-2xl p-6 border border-gray-200">
                  <h3 className="font-bold text-gray-900 mb-6 flex items-center gap-2 text-xl">
                    <GraduationCap size={22} className="text-blue-600" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    {profileData.education.map((edu, index) => (
                      <div key={edu.id} className={`flex gap-4 ${index !== profileData.education.length - 1 ? 'pb-6 border-b border-gray-100' : ''}`}>
                        {/* Institution Logo */}
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 bg-gray-50 rounded-xl flex items-center justify-center border border-gray-200">
                            <img src={edu.logo} alt={edu.institution} className="w-8 h-8 object-contain" />
                          </div>
                        </div>
                        
                        {/* Details */}
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 text-lg mb-1">{edu.degree}</h4>
                          <p className="font-semibold text-gray-700 mb-1">{edu.institution}</p>
                          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500 mb-2">
                            <span>{edu.startDate} - {edu.endDate}</span>
                            <span className="text-gray-300">•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={14} />
                              {edu.location}
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-blue-600 mb-2">{edu.grade}</p>
                          <p className="text-gray-600 text-sm leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "posts" && (
              <div className="space-y-4">
                {posts.map((post) => (
                  <PostCard key={post.id} post={post} />
                ))}
              </div>
            )}

            {activeTab === "activity" && (
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Recent Activity</h3>
                <p className="text-gray-500 text-sm">Activity feed coming soon...</p>
              </div>
            )}
          </main>
        </div>
      </div>
      </div>
    </div>
  );
}