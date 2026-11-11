import Navbar from '../Components/Navbar';
import './styles/landingpage.css';
import { Link } from 'react-router-dom';
import heroImage from '../assets/landingbackground.png';

const LandingPage = () => {
  return (
    <div className="landing-container">
      <Navbar />

      <section className="hero-section">
        <div className="container">
          <div className="hero-wrapper">

            <div className="hero-left">
              <h1 className="hero-title">
                Pure Organic
                <br />
                Skincare
              </h1>

              <p className="hero-subtitle">
                Discover the age-old secrets of natural glow with
                UBTANA’s handcrafted herbal formulas.
              </p>

              <div className="hero-buttons">
                <Link to="/shop" className="btn hero-btn-primary">
  Explore Shop
</Link>

<Link to="/about" className="btn hero-btn-secondary">
  Our Story
</Link>
              </div>
            </div>

            <div className="hero-right">
              <img
                src={heroImage}
                alt="UBTANA Products"
                className="hero-image"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;