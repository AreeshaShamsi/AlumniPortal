import React, { useState } from "react";
import { Heart, MessageCircle, Send, Bookmark, MoreVertical, TrendingUp, Award, Briefcase, GraduationCap } from "lucide-react";
import FeedNavbar from "./FeedNavbar";
import SuggestedFollows from "./SuggestedFollows";

const samplePosts = [
  {
    id: 1,
    author: {
      name: "Priya Sharma",
      role: "Senior Software Engineer",
      company: "Google",
      avatar: "https://i.pravatar.cc/100?img=5",
      verified: true,
      batch: "MCA 2019"
    },
    timeAgo: "2 hours ago",
    content: "Thrilled to share that our team just launched a groundbreaking AI-powered feature that's already serving 10M+ users. The journey from concept to production was incredibly challenging but rewarding. Grateful for the amazing engineers I work with every day. 🚀",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=600&fit=crop",
    stats: { likes: 1247, comments: 89, shares: 45 },
    tags: ["AI", "ProductLaunch", "Engineering"]
  },
  {
    id: 2,
    author: {
      name: "Rahul Verma",
      role: "Product Manager",
      company: "Microsoft",
      avatar: "https://i.pravatar.cc/100?img=12",
      verified: true,
      batch: "MCA 2020"
    },
    timeAgo: "5 hours ago",
    content: "Exciting news! I'm joining Meta as Head of Product for AR/VR experiences. Can't wait to shape the future of immersive computing. Huge thanks to everyone who supported me throughout this journey. This is just the beginning! 🎯",
    stats: { likes: 2891, comments: 234, shares: 127 },
    milestone: true
  },
  {
    id: 3,
    author: {
      name: "Anjali Mehta",
      role: "Lead Product Designer",
      company: "Figma",
      avatar: "https://i.pravatar.cc/100?img=9",
      verified: true,
      batch: "MCA 2018"
    },
    timeAgo: "1 day ago",
    content: "Just published a comprehensive design system case study that covers our 18-month journey. We reduced design inconsistencies by 78% and improved team velocity by 3.5x. The secret? Strong foundations and collaborative culture. Check it out! 📐✨",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=600&fit=crop",
    stats: { likes: 1567, comments: 198, shares: 92 },
    tags: ["DesignSystems", "UX", "CaseStudy"]
  }
];

const FeedCard = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <article className="bg-white rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.15)] border border-gray-100/50">
      {/* Header */}
      <header className="px-8 pt-7 pb-5">
        <div className="flex items-start justify-between">
          <div className="flex gap-4">
            <div className="relative">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-[52px] h-[52px] rounded-2xl object-cover"
              />
              {post.author.verified && (
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  <Award className="text-white" size={11} fill="white" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[17px] text-gray-900 hover:text-blue-600 cursor-pointer transition-colors">
                  {post.author.name}
                </h3>
                <span className="text-[11px] font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">
                  {post.author.batch}
                </span>
              </div>
              <p className="text-[14px] text-gray-600 mt-0.5 leading-tight">
                {post.author.role} <span className="text-gray-400">·</span> <span className="font-medium text-gray-700">{post.author.company}</span>
              </p>
              <time className="text-[13px] text-gray-400 mt-1 block">{post.timeAgo}</time>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600 hover:bg-gray-50 p-2 rounded-xl transition-all">
            <MoreVertical size={20} />
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="px-8 pb-5">
        <p className="text-[15px] text-gray-700 leading-[1.6]">{post.content}</p>
        {post.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag, i) => (
              <span
                key={i}
                className="text-[13px] font-medium text-blue-600 hover:text-blue-700 cursor-pointer transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Image */}
      {post.image && (
        <div className="relative overflow-hidden mx-8 mb-5 rounded-2xl">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-[340px] object-cover"
          />
        </div>
      )}

      {/* Milestone Banner */}
      {post.milestone && (
        <div className="mx-8 mb-5">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 p-10 text-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
            <div className="relative">
              <Briefcase className="mx-auto mb-3 text-white/90" size={32} strokeWidth={1.5} />
              <p className="text-white text-xl font-semibold">Career Milestone</p>
              <p className="text-blue-100 text-sm mt-1">New Chapter Unlocked</p>
            </div>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="px-8 py-4 border-t border-gray-50">
        <div className="flex items-center justify-between text-[14px]">
          <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center -mr-1 border-2 border-white">
                <Heart size={11} className="text-white" fill="white" />
              </div>
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center border-2 border-white">
                <TrendingUp size={11} className="text-white" />
              </div>
            </div>
            <span className="font-medium ml-1">{post.stats.likes.toLocaleString()}</span>
          </button>
          <div className="flex items-center gap-5 text-gray-500">
            <button className="hover:text-blue-600 transition-colors font-medium">
              {post.stats.comments} comments
            </button>
            <button className="hover:text-blue-600 transition-colors font-medium">
              {post.stats.shares} shares
            </button>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="px-6 pb-6 pt-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLiked(!liked)}
            className={`flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl font-medium text-[14px] transition-all duration-200 ${
              liked 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Heart size={19} className={liked ? "fill-white" : ""} strokeWidth={2} />
            <span>Like</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-50 text-gray-700 hover:bg-gray-100 font-medium text-[14px] transition-all">
            <MessageCircle size={19} strokeWidth={2} />
            <span>Comment</span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-gray-50 text-gray-700 hover:bg-gray-100 font-medium text-[14px] transition-all">
            <Send size={19} strokeWidth={2} />
            <span>Share</span>
          </button>
          <button
            onClick={() => setSaved(!saved)}
            className={`p-3.5 rounded-2xl font-medium transition-all duration-200 ${
              saved 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25' 
                : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Bookmark size={19} className={saved ? "fill-white" : ""} strokeWidth={2} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default function Feed() {
  return (
    <>
    <FeedNavbar />
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-blue-50/30 to-white py-6 mt-1.5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,680px)_360px] gap-8 justify-center lg:justify-end">
          {/* Main column */}
          <main className="space-y-6">
            {/* Create Post */}

            {/* Feed Posts */}
            {samplePosts.map((post) => (
              <FeedCard key={post.id} post={post} />
            ))}

            {/* Load More */}
            <div className="text-center pt-4 pb-8">
              <button className="px-10 py-4 bg-white hover:bg-gray-50 text-blue-600 font-semibold rounded-2xl border border-gray-200 hover:border-blue-200 transition-all shadow-sm hover:shadow-[0_8px_30px_rgba(59,130,246,0.12)] text-[15px]">
                Show more posts
              </button>
            </div>
          </main>

          {/* Right sidebar - Suggested Follows (visible on lg) */}
          <aside className="hidden lg:block">
            <SuggestedFollows />
          </aside>
        </div>
      </div>
    </div>
    </>
  );
}