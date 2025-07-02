import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/christussaji', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/christus-saji', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:christussaji13@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Christus Saji Joseph</h3>
              <p className="text-green-600 font-medium">Data Science Student</p>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              Passionate about turning data into actionable insights. Currently pursuing BSc in 
              Data Science and Statistics at CHRIST University, always eager to learn and collaborate on meaningful projects.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-white rounded-lg shadow-sm hover:shadow-md hover:bg-green-50 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-gray-600 group-hover:text-green-600 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="block text-gray-600 hover:text-green-600 text-sm transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Get in Touch</h4>
            <div className="space-y-2 text-sm text-gray-600">
              <p>📧 christussaji13@gmail.com</p>
              <p>📱 +91 7306446116</p>
              <p>📍 Bengaluru, India</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-xs text-green-700 font-medium">
                🚀 Open to opportunities and collaborations
              </p>
            </div>

            <div className="bg-gray-50 p-3 rounded-lg mt-4">
              <a href="https://expressiveai.in/portlify" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <img src="/logo.png" alt="Expressive AI Logo" className="h-5 w-5 object-contain" />
                <p className='text-xs text-blue-700 font-medium hover:underline'>
                  Start building with Expressive AI today!
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;