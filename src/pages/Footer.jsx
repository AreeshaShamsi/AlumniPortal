import React from "react";

const Footer = () => {
  const quickLinks = ["About Us", "Alumni Stories", "Events", "Contact"];
  const resources = ["Career Portal", "Mentorship", "Gallery", "News"];
  const social = [
    { name: "LinkedIn", icon: "💼" },
    { name: "Twitter", icon: "🐦" },
    { name: "Facebook", icon: "📘" },
    { name: "Instagram", icon: "📸" }
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-indigo-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-10 right-20 w-32 h-32 bg-white/5 rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-24 h-24 bg-white/5 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Alumni Portal</h3>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Connecting alumni, empowering futures, and building a stronger community together.
            </p>
            <div className="h-1 w-16 bg-blue-400 rounded-full"></div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-sm hover:translate-x-1 inline-block"
                  >
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <p className="text-blue-200 text-sm mb-4">
              📧 alumni@kcmt.edu<br/>
              📞 +91 123 456 7890
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3 mt-4">
              {social.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center text-xl hover:bg-white/20 transition-all duration-300 hover:scale-110"
                  title={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/20 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-200">
          <p>© 2024 KCMT Alumni Portal. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;