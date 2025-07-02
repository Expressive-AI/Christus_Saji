import { useState } from 'react';
import { Menu, X, Mail, Phone, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 lg:py-3">
          {/* Logo with Photo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full overflow-hidden ring-2 ring-green-200">
              <img
                src="/christus_saji.jpg"
                alt="Christus Saji Joseph"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl lg:text-2xl font-bold text-gray-900 font-handwriting">
                Christus Saji Joseph
              </div>
              <div className="text-xs text-gray-500 hidden sm:block">Data Science Student</div>
            </div>
          </div>

          {/* Contact Icons - Desktop */}
          <div className="hidden xl:flex items-center space-x-3">
            <a 
              href="mailto:christussaji13@gmail.com"
              className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
              title="Email: christussaji13@gmail.com"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a 
              href="tel:+917306446116"
              className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-200"
              title="Phone: +91 7306446116"
            >
              <Phone className="h-4 w-4" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-green-600 hover:bg-green-50 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 relative group"
              >
                {item.label}
              </a>
            ))}
            <div className="text-xs text-gray-400 ml-6 flex items-center space-x-1 px-2 py-1 bg-gray-50 rounded-md">
              <Sparkles className="h-3 w-3" />
              <span>built with expressive ai</span>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md border-t border-gray-100">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 hover:bg-green-50 block px-3 py-2 text-base font-medium rounded-lg transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-gray-200 mt-4">
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span className="truncate">christussaji13@gmail.com</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 text-sm text-gray-600">
                  <Phone className="h-4 w-4" />
                  <span>+91 7306446116</span>
                </div>
                <div className="flex items-center space-x-2 px-3 py-2 text-xs text-gray-400 mt-2">
                  <Sparkles className="h-3 w-3" />
                  <span>built with expressive ai</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;