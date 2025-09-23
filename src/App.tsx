import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
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
    <ThemeProvider>
      <Router>
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
      </Router>
    </ThemeProvider>
  );
}

export default App;