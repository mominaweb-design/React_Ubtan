import Navbar from '../Components/Navbar';
import PakistanMap from '../Components/PakistanMap';
import Footer from '../Components/Footer';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import './styles/locationpage.css';

const LocationPage = () => {
  return (
    <div className="location-page-wrapper d-flex flex-column min-vh-100">
      
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Main Content Split Layout */}
      <main className="container-fluid flex-grow-1 p-0">
        <div className="row g-0 h-100 align-items-stretch">
          
          {/* Left Side: Address & Details */}
          <div className="col-lg-5 col-md-6 left-details-section p-4 p-xl-5 d-flex flex-column justify-content-center">
            
            <h2 className="section-title mb-4">Location and Sourcing</h2>

            {/* Lahore Headquarters Card */}
            <div className="branch-card mb-4">
              <div className="d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="branch-icon mt-1" />
                <h5 className="branch-name mb-0">Lahore Headquarters</h5>
              </div>
              <p className="branch-text mb-2">
                123 Street, Headquarter Road,<br />Lahore, Pakistan
              </p>
              <div className="d-flex align-items-center gap-2 branch-info mb-1">
                <FaPhoneAlt className="info-icon" />
                <span>+92 23XXXXXXX</span>
              </div>
              <div className="d-flex align-items-center gap-2 branch-info mb-3">
                <FaClock className="info-icon" />
                <span>Working Hours 9:00 to 7:00 pm</span>
              </div>
              <button className="btn directions-btn">Directions</button>
            </div>

            {/* Rawalpindi Branch Card */}
            <div className="branch-card">
              <div className="d-flex align-items-start gap-2 mb-2">
                <FaMapMarkerAlt className="branch-icon mt-1" />
                <h5 className="branch-name mb-0">Rawalpindi Branch</h5>
              </div>
              <p className="branch-text mb-2">
                105 Street, Rawalpindi Pattern Road,<br />Rawalpindi Branch
              </p>
              <div className="d-flex align-items-center gap-2 branch-info mb-1">
                <FaPhoneAlt className="info-icon" />
                <span>+92 23XXXXXXX</span>
              </div>
              <div className="d-flex align-items-center gap-2 branch-info mb-3">
                <FaClock className="info-icon" />
                <span>Working Hours 9:00 to 7:00 pm</span>
              </div>
              <button className="btn directions-btn">Directions</button>
            </div>

          </div>

          {/* Right Side: Map Container */}
          <div className="col-lg-7 col-md-6 right-map-section p-3 p-xl-4 d-flex align-items-center justify-content-center">
            <PakistanMap />
          </div>

        </div>
      </main>

      {/* 3. Footer Bar */}
      <Footer />

    </div>
  );
};

export default LocationPage;