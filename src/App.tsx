import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CookieConsent from './components/CookieConsent';
import { ScrollToTop } from './components/ScrollToTop';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import SpAss from './pages/SpAss';
import Athletes from './pages/Athletes';
import Aurelian from './pages/Aurelian';
import Volunteers from './pages/Volunteers';
import Signup from './pages/Signup';
import Partners from './pages/Partners';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import { initializeAnalytics, removeAnalytics, trackPageView } from './utils/analytics';
import './i18n';

// Component to handle route tracking
const RouteTracker: React.FC = () => {
 const location = useLocation();

 useEffect(() => {
 // Track page view when route changes
 const consent = localStorage.getItem('cookie-consent');
 if (consent === 'accepted') {
 trackPageView(location.pathname, document.title);
 }
 }, [location]);
 return null;
};

function App() {
 return (
 <Router>
 <AppContent />
 </Router>
 );
}

const AppContent: React.FC = () => {
 useEffect(() => {
 // Check for existing consent on app load
 const consent = localStorage.getItem('cookie-consent');
 if (consent === 'accepted') {
 initializeAnalytics();
 // Track initial page view (this will also identify the user)
 setTimeout(() => {
 trackPageView(window.location.pathname, document.title);
 }, 500);
 }
 }, []);

 const handleCookieAccept = () => {
 initializeAnalytics();
 // Track initial page view (this will also identify the user)
 trackPageView(window.location.pathname, document.title);
 };

 const handleCookieDecline = () => {
 removeAnalytics();
 };

 return (
 <>
 <ScrollToTop />
 <RouteTracker />
 <Routes>
 <Route path="/" element={<Layout />}>
 <Route index element={<Home />} />
 <Route path="about" element={<About />} />
 <Route path="spass" element={<SpAss />} />
 <Route path="athletes" element={<Athletes />} />
 <Route path="aurelian" element={<Aurelian />} />
 <Route path="volunteers" element={<Volunteers />} />
 <Route path="signup" element={<Signup />} />
 <Route path="partners" element={<Partners />} />
 <Route path="contact" element={<Contact />} />
 <Route path="*" element={<NotFound />} />
 </Route>
 </Routes>
 <CookieConsent
 onAccept={handleCookieAccept}
 onDecline={handleCookieDecline}
 />
 </>
 );
};

export default App;