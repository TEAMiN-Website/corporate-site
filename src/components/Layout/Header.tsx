import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
 const [isMenuOpen, setIsMenuOpen] = useState(false);
 const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
 const { t, i18n } = useTranslation();
 const location = useLocation();
 const dropdownRef = useRef<HTMLDivElement>(null);

 const navItems = [
 { id: '/', label: t('nav.home') },
 { id: '/about', label: 'TEAMiN' },
 { id: '/spass', label: 'SpAss' },
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

 // Close dropdown on Escape key
 useEffect(() => {
 const handleEscape = (event: KeyboardEvent) => {
 if (event.key === 'Escape') {
 setDropdownOpen(null);
 }
 };

 document.addEventListener('keydown', handleEscape);
 return () => document.removeEventListener('keydown', handleEscape);
 }, []);

 // Close dropdown when clicking outside
 useEffect(() => {
 const handleClickOutside = (event: MouseEvent) => {
 if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
 setDropdownOpen(null);
 }
 };

 if (dropdownOpen) {
 document.addEventListener('mousedown', handleClickOutside);
 return () => document.removeEventListener('mousedown', handleClickOutside);
 }
 }, [dropdownOpen]);

 // Function to get navigation item styling based on current page
 const getNavItemStyle = (itemPath: string, dropdown?: any[]) => {
 const isActive = location.pathname === itemPath;
 const isChildActive = dropdown ? dropdown.some(item => location.pathname === item.id) : false;

 if (isActive || isChildActive) {
 // Special styling for different pages
 if (itemPath === '/') {
 return 'p-[2px] bg-gradient-to-r from-[#D86D55] to-[#71B554] rounded-full inline-block [&>*]hover:bg-white [&>*]: [&>*]hover:text-gray-900 [&>*]: [&>*]:rounded-full [&>*]:block [&>*]:px-3 [&>*]:py-2';
 } else if (itemPath === '/volunteers') {
 return 'bg-[#D86D55] text-white';
 } else if (itemPath === '/athletes') {
 return 'bg-[#71B554] text-white';
 } else if (itemPath === '/about') {
 return 'bg-gradient-to-r from-[#D86D55] to-[#71B554] text-white';
 } else if (itemPath === '/spass') {
 return 'bg-[#F7ECD5] text-gray-900 ';
 } else if (itemPath === '/partners') {
 return 'bg-[#3F3E34] text-white';
 } else {
 return 'bg-blue-600 text-white'; // Default active style for other pages
 }
 }

 // Hover states for each page
 if (itemPath === '/') {
 return 'text-gray-600 hover:p-[2px] hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:rounded-full hover:inline-block hover:[&>*]hover:bg-white hover:[&>*]: hover:[&>*]hover:text-gray-900 hover:[&>*]: hover:[&>*]:rounded-full hover:[&>*]:block hover:[&>*]:px-3 hover:[&>*]:py-2 transition-all duration-300';
 } else if (itemPath === '/volunteers' || (dropdown && itemPath === '/volunteers')) {
 return 'text-gray-600 hover:bg-[#D86D55] hover:text-white transition-all duration-300';
 } else if (itemPath === '/athletes' || (dropdown && itemPath === '/athletes')) {
 return 'text-gray-600 hover:bg-[#71B554] hover:text-white transition-all duration-300';
 } else if (itemPath === '/about') {
 return 'text-gray-600 hover:bg-gradient-to-r hover:from-[#D86D55] hover:to-[#71B554] hover:text-white transition-all duration-300';
 } else if (itemPath === '/spass') {
 return 'text-gray-600 hover:bg-[#F7ECD5] hover:text-gray-900 transition-all duration-300';
 } else if (itemPath === '/partners') {
 return 'text-gray-600 hover:bg-[#3F3E34] hover:text-white transition-all duration-300';
 }

 return 'text-gray-600 hover:text-blue-600 hover:text-blue-400';
 };

 return (
 <nav className="fixed top-0 left-0 right-0 bg-white/95  backdrop-blur-md z-50 border-b border-gray-200 transition-colors duration-200">
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
 <div className="hidden lg:flex items-center space-x-4" ref={dropdownRef}>
 {navItems.map((item) => (
 <div key={item.id} className="relative">
 {item.dropdown ? (
 <>
 <button
 onClick={() => handleDropdownToggle(item.id)}
 className={`text-sm font-medium transition-all duration-300 px-3 py-2 rounded-full flex items-center space-x-1 ${getNavItemStyle(item.id, item.dropdown)}`}
 >
 <span>{item.label}</span>
 <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen === item.id ? 'rotate-180' : ''}`} />
 </button>
 {dropdownOpen === item.id && (
 <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
 {item.dropdown.map((dropdownItem) => (
 <Link
 key={dropdownItem.id}
 to={dropdownItem.id}
 onClick={handleDropdownItemClick}
 className={`block px-4 py-2 text-sm transition-colors duration-200 ${
 location.pathname === dropdownItem.id 
 ? 'bg-blue-50  text-blue-600 ' 
 : 'text-gray-700 hover:bg-gray-50 hover:bg-gray-700'
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
 className={`text-sm font-medium transition-all duration-300 ${item.id === '/' ? getNavItemStyle(item.id) : `px-3 py-2 rounded-full ${getNavItemStyle(item.id)}`}`}
 >
 {item.id === '/' ? <span>{item.label}</span> : item.label}
 </Link>
 )}
 </div>
 ))}

 {/* Language Toggle */}
 <button
 onClick={toggleLanguage}
 className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 hover:bg-gray-800 transition-colors duration-200"
 aria-label="Toggle language"
 >
 <Globe className="w-5 h-5 text-gray-600 " />
 <span className="text-sm font-medium text-gray-600 ">
 {i18n.language.toUpperCase()}
 </span>
 </button>
 </div>
 
 {/* Mobile Menu Button */}
 <div className="lg:hidden flex items-center space-x-2">
 <button
 onClick={toggleLanguage}
 className="flex items-center space-x-1 p-2 rounded-md hover:bg-gray-100 hover:bg-gray-800 transition-colors duration-200"
 aria-label="Toggle language"
 >
 <Globe className="w-4 h-4 text-gray-600 " />
 <span className="text-xs font-medium text-gray-600 ">
 {i18n.language.toUpperCase()}
 </span>
 </button>

 <button
 className="p-2 rounded-md hover:bg-gray-100 hover:bg-gray-800 transition-colors duration-200"
 onClick={() => setIsMenuOpen(!isMenuOpen)}
 >
 {isMenuOpen ? <X className="w-6 h-6 text-gray-600 " /> : <Menu className="w-6 h-6 text-gray-600 " />}
 </button>
 </div>
 </div>
 </div>
 
 {/* Mobile Menu */}
 <div className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
 isMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
 }`}>
 <div className="px-4 py-2">
 {navItems.map((item) => (
 <div key={item.id}>
 {item.dropdown ? (
 <>
 <button
 onClick={() => handleDropdownToggle(item.id)}
 className={`block w-full text-left px-3 py-2 text-base font-medium rounded-md transition-all duration-300 flex items-center justify-between ${getNavItemStyle(item.id, item.dropdown)}`}
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
 ? 'bg-blue-50  text-blue-600 ' 
 : 'text-gray-600 hover:text-blue-600 hover:text-blue-400'
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
 className={`block w-full text-left text-base font-medium rounded-md transition-all duration-300 ${item.id === '/' ? getNavItemStyle(item.id) : `px-3 py-2 ${getNavItemStyle(item.id)}`}`}
 >
 {item.id === '/' ? <span>{item.label}</span> : item.label}
 </Link>
 )}
 </div>
 ))}
 </div>
 </div>
 </nav>
 );
};

export default Header;