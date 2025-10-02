import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  const navItems = [
    { id: '/', label: t('nav.home') },
    { id: '/about', label: t('nav.about') },
    { id: '/spass', label: t('nav.spass') },
    { 
      id: '/athletes', 
      label: t('nav.athletes'),
      dropdown: [
        { id: '/athletes', label: t('nav.athletes') },
        { id: '/aurelian', label: t('nav.aurelian') }
      ]
    },
    { 
      id: '/volunteers', 
      label: t('nav.volunteers'),
      dropdown: [
        { id: '/volunteers', label: t('nav.volunteers') },
        { id: '/signup', label: t('nav.signup') }
      ]
    },
    { id: '/partners', label: t('nav.partners') },
    { id: '/contact', label: t('nav.contact') },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const handleDropdownToggle = (itemId: string) => {
    setDropdownOpen(dropdownOpen === itemId ? null : itemId);
  };

  const handleDropdownItemClick = () => {
    setDropdownOpen(null);
  };
  // Function to get navigation item styling based on current page
  const getNavItemStyle = (itemPath: string) => {
    const isActive = location.pathname === itemPath;
    
    if (isActive) {
      // Special styling for different pages
      if (itemPath === '/') {
        return 'bg-gradient-to-r from-[#71B554] to-[#D86D55] text-white';
      } else if (itemPath === '/volunteers') {
        return 'bg-[#D86D55] text-white';
      } else {
        return 'bg-blue-600 text-white'; // Default active style for other pages
      }
    }
    
    return 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400';
  };

  const isDropdownItemActive = (dropdown: any[]) => {
    return dropdown.some(item => location.pathname === item.id);
  };
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 mr-8">
            <img 
              src="TEAMiN Logo.png" 
              alt="TEAMiN Logo" 
              className="h-12 w-auto object-contain"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.id} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full flex items-center space-x-1 ${
                        isDropdownItemActive(item.dropdown) ? getNavItemStyle(item.id) : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen === item.id && (
                      <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.id}
                            onClick={handleDropdownItemClick}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${
                              location.pathname === dropdownItem.id 
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.id}
                    className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full ${getNavItemStyle(item.id)}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {i18n.language.toUpperCase()}
              </span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5 text-gray-600 dark:text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
            
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4 text-gray-600 dark:text-gray-300" />
              <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                {i18n.language.toUpperCase()}
              </span>
            </button>
            
            <button
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6 text-gray-600 dark:text-gray-300" /> : <Menu className="w-6 h-6 text-gray-600 dark:text-gray-300" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
          <div className="px-4 py-2">
            {navItems.map((item) => (
              <div key={item.id}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => handleDropdownToggle(item.id)}
                      className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 flex items-center justify-between ${
                        isDropdownItemActive(item.dropdown) ? getNavItemStyle(item.id) : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === item.id ? 'rotate-180' : ''}`} />
                    </button>
                    {dropdownOpen === item.id && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.id}
                            to={dropdownItem.id}
                            onClick={() => {
                              setIsMenuOpen(false);
                              setDropdownOpen(null);
                            }}
                            className={`block px-3 py-2 text-sm rounded-md transition-all duration-300 ${
                              location.pathname === dropdownItem.id 
                                ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400' 
                                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
                            }`}
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.id}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${getNavItemStyle(item.id)}`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;