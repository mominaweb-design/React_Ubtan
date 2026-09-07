import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './styles/aboutuspage.css';

// Images Import
import aboutBackOne from '../assets/aboutbackone.png';
import aboutBackTwo from '../assets/aboutbacktwo.png';

const AboutUsPage = () => {
  return (
    <div className="about-us-wrapper d-flex flex-column min-vh-100">
      
      {/* 1. Header Navigation */}
      <Navbar />

      {/* 2. Top Hero Arch Section (Image 1) */}
      <section className="about-hero-section text-center py-4">
        <div className="container">
          <div className="arch-image-container mx-auto">
            <img 
              src={aboutBackOne} 
              alt="UBTANA Heritage & Tradition" 
              className="img-fluid hero-arch-img"
            />
          </div>
        </div>
      </section>

      {/* 3. Main Content & Features Section */}
      <section className="about-content-section py-4 flex-grow-1">
        <div className="container text-center">
          
          {/* Main Title */}
          <h2 className="about-main-title mb-4">
            Rooted in Tradition, Perfected by Science
          </h2>

          {/* 3 Value Pillars */}
          <div className="row g-3 justify-content-center mb-5">
            
            {/* Purity Card */}
            <div className="col-md-4 col-sm-6">
              <div className="pillar-card pillar-purity p-3 rounded-4 text-white">
                <div className="pillar-icon mb-1">🪷</div>
                <h5 className="fw-semibold mb-1">Purity</h5>
                <p className="small opacity-90 mb-0">
                  Sourcing whole botanicals, our honored ingredients.
                </p>
              </div>
            </div>

            {/* Lab Verified Card */}
            <div className="col-md-4 col-sm-6">
              <div className="pillar-card pillar-lab p-3 rounded-4">
                <div className="pillar-icon mb-1">🧪</div>
                <h5 className="fw-semibold mb-1">Lab Verified</h5>
                <p className="small text-muted mb-0">
                  Modern formulation with rigorous safety testing.
                </p>
              </div>
            </div>

            {/* Sustainability Card */}
            <div className="col-md-4 col-sm-6">
              <div className="pillar-card pillar-sustainability p-3 rounded-4 text-white">
                <div className="pillar-icon mb-1">🌿</div>
                <h5 className="fw-semibold mb-1">Sustainability</h5>
                <p className="small opacity-90 mb-0">
                  Eco-friendly packaging and fair trade sourcing.
                </p>
              </div>
            </div>

          </div>

 {/* 4. Timeline Section with Grid Background (Image 2) */}
<div 
  className="about-timeline-bg rounded-4 position-relative overflow-hidden p-3"
  style={{ backgroundImage: `url(${aboutBackTwo})` }}
>
  <div className="row align-items-center justify-content-between g-3 position-relative z-2">
    
    <div className="col-md-3 text-start">
      <div className="timeline-node">
        <span className="fw-bold text-dark d-block">1958: Grandmother's Rituals</span>
        <small className="text-muted">Grinding the first secret of botanical organic skincare ingredients.</small>
      </div>
    </div>

    <div className="col-md-3 col-6 text-center">
      <div className="timeline-node">
        <span className="fw-bold text-dark d-block">2019: Modern Sourcing Begins</span>
        <small className="text-muted">Incorporated sustainable sourcing and traditional wisdom.</small>
      </div>
    </div>

    <div className="col-md-3 col-6 text-end">
      <div className="timeline-node">
        <span className="fw-bold text-dark d-block">2021: First Formula Verified</span>
        <small className="text-muted">UBTANA's year-round quality ingredients testing passed.</small>
      </div>
    </div>

  </div>
</div>

        </div>
      </section>

      {/* 5. Footer Bar */}
      <Footer />

    </div>
  );
};

export default AboutUsPage;