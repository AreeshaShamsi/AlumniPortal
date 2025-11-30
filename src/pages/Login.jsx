import React, { useState } from "react";
import Navbar from "../components/Navbar";

const LoginForms = () => {
  const [activeTab, setActiveTab] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Student form state
  const [studentData, setStudentData] = useState({
    studentId: "",
    email: "",
    password: ""
  });

  // Alumni form state
  const [alumniData, setAlumniData] = useState({
    username: "",
    graduationYear: "",
    password: ""
  });

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveTab(tab);
        setIsTransitioning(false);
      }, 200);
    }
  };

  const handleStudentLogin = () => {
    console.log("Student login:", studentData);
  };

  const handleAlumniLogin = () => {
    console.log("Alumni login:", alumniData);
  };

  return (
    <>
    <Navbar/>
    <div className="relative w-full min-h-screen bg-white overflow-hidden flex items-start justify-center pt-4 md:pt-8 pb-8 px-4">
      {/* Modern Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f612_1px,transparent_1px),linear-gradient(to_bottom,#3b82f612_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]"></div>
      
      {/* Dynamic gradient fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,white_90%)]"></div>

      {/* Energetic Bubbles */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] md:w-[400px] md:h-[400px] -translate-x-1/2 -translate-y-1/2">
        <div className="w-full h-full bg-gradient-to-br from-blue-700/20 to-blue-900/10 rounded-full animate-bounce-slow"></div>
      </div>

      <div className="absolute bottom-0 right-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] translate-x-1/3 translate-y-1/3">
        <div className="w-full h-full bg-gradient-to-tl from-blue-800/20 to-blue-700/10 rounded-full animate-bounce-slow" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Floating accent circles */}
      <div className="hidden sm:block absolute top-1/4 right-1/4 w-16 h-16 md:w-24 md:h-24 bg-blue-700/15 rounded-full animate-float"></div>
      <div className="hidden sm:block absolute bottom-1/3 left-1/5 w-20 h-20 md:w-32 md:h-32 bg-blue-800/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>

      {/* Login Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 border border-gray-100">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black text-gray-900 mb-2">MCA ALUMNIHUB</h2>
            <p className="text-gray-600 font-medium">Login to your account</p>
          </div>

          {/* Tab Switcher */}
          <div className="flex gap-2 mb-8 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => handleTabChange("student")}
              className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${
                activeTab === "student"
                  ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Student
              </div>
            </button>
            <button
              onClick={() => handleTabChange("alumni")}
              className={`flex-1 py-3 px-4 rounded-lg font-bold text-sm transition-all duration-300 ${
                activeTab === "alumni"
                  ? "bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Alumni
              </div>
            </button>
          </div>

          {/* Forms Container with smooth transition */}
          <div className="relative overflow-hidden">
            <div className={`transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              {/* Student Form */}
              {activeTab === "student" && (
                <div className="space-y-6">
                  {/* Student ID */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Student ID
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={studentData.studentId}
                        onChange={(e) => setStudentData({...studentData, studentId: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 outline-none transition-all duration-300 font-medium"
                        placeholder="e.g., STU2024001"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="email"
                        value={studentData.email}
                        onChange={(e) => setStudentData({...studentData, email: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 outline-none transition-all duration-300 font-medium"
                        placeholder="student@university.edu"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={studentData.password}
                        onChange={(e) => setStudentData({...studentData, password: e.target.value})}
                        className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 outline-none transition-all duration-300 font-medium"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-700 border-gray-300 rounded focus:ring-blue-700 focus:ring-2" />
                      <span className="ml-2 text-sm font-medium text-gray-700">Remember me</span>
                    </label>
                    <button className="text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors">
                      Forgot Password?
                    </button>
                  </div>

                  {/* Student Login Button */}
                  <button
                    onClick={handleStudentLogin}
                    className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Login as Student
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Alumni Form */}
              {activeTab === "alumni" && (
                <div className="space-y-6">
                  {/* Username */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Username
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={alumniData.username}
                        onChange={(e) => setAlumniData({...alumniData, username: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 outline-none transition-all duration-300 font-medium"
                        placeholder="Enter your username"
                      />
                    </div>
                  </div>

                  {/* Graduation Year */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Graduation Year
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <input
                        type="text"
                        value={alumniData.graduationYear}
                        onChange={(e) => setAlumniData({...alumniData, graduationYear: e.target.value})}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 outline-none transition-all duration-300 font-medium"
                        placeholder="e.g., 2020"
                      />
                    </div>
                  </div>

                  {/* Password */}
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                      </div>
                      <input
                        type={showPassword ? "text" : "password"}
                        value={alumniData.password}
                        onChange={(e) => setAlumniData({...alumniData, password: e.target.value})}
                        className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-700 focus:ring-4 focus:ring-blue-700/10 outline-none transition-all duration-300 font-medium"
                        placeholder="Enter your password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showPassword ? (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me */}
                  <div className="flex items-center justify-between">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-blue-700 border-gray-300 rounded focus:ring-blue-700 focus:ring-2" />
                      <span className="ml-2 text-sm font-medium text-gray-700">Remember me</span>
                    </label>
                    <button className="text-sm font-bold text-blue-700 hover:text-blue-900 transition-colors">
                      Forgot Password?
                    </button>
                  </div>

                  {/* Alumni Login Button */}
                  <button
                    onClick={handleAlumniLogin}
                    className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue-900 text-white font-bold text-lg rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Login as Alumni
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
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
    </>
  );
};

export default LoginForms;