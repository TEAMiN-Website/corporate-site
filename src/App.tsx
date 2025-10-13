import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import './i18n';

function App() {
 return (
 <Router>
 <AppContent />
 </Router>
 );
}

const AppContent: React.FC = () => {
 const handleCookieAccept = () => {
 localStorage.setItem('cookie-consent', 'accepted');
 };

 const handleCookieDecline = () => {
 localStorage.setItem('cookie-consent', 'declined');
 };

 return (
 <>
 <ScrollToTop />
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