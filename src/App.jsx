import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Pages Import (folder naam 'pages' hai, lowercase - path yahin se match karega)
import LandingPage from './pages/LandingPage';
import AboutUsPage from './pages/AboutUsPage';
import LocationPage from './pages/LocationPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import Shop from './pages/Shop';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home / Landing Page */}
        <Route path="/" element={<LandingPage />} />

        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />

        {/* Koi bhi ghalat/unknown URL ho to Home par wapas bhej do */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;