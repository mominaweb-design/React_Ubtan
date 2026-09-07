import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaStar, FaCheckCircle } from 'react-icons/fa';
import './styles/reviewspage.css';

// Background Image
import reviewsBg from '../assets/reviewsback.png';

// Dummy Review Images (Aap apni images path replace kar sakte hain)
import prod1 from '../assets/jar1.png';
import prod2 from '../assets/jar2.png';

const reviewsData = [
  {
    id: 1,
    name: 'Sarah J.',
    rating: 5,
    title: 'The Radiant Serum changed my life! I look younger.',
    comment: 'Radiant serum changed my life! I look younger and my skin glows every day.',
    product: 'GLOWELLE Radiant Vitamin C Serum',
    images: [prod1, prod2],
    helpfulYes: 45,
    helpfulNo: 3,
  },
  {
    id: 2,
    name: 'Liam P.',
    rating: 5,
    title: 'Hydrating & Effective - my new daily moisturizer.',
    comment: 'Hydrating milky moisturizer. Kept my skin so soft throughout the day.',
    product: 'GLOWELLE Hydrating Milky Moisturizer',
    images: [prod2, prod1],
    helpfulYes: 45,
    helpfulNo: 3,
  },
  {
    id: 3,
    name: 'Mia L.',
    rating: 5,
    title: 'Blemish Buster works wonders overnight. Must-have!',
    comment: 'Even works wonders overnight. Cleared up my breakout in just one day.',
    product: 'GLOWELLE Hydrating Milky Moisturizer',
    images: [prod1, prod2],
    helpfulYes: 45,
    helpfulNo: 3,
  },
  {
    id: 4,
    name: 'Nara L.',
    rating: 5,
    title: 'Blemish Buster works wonders overnight. Must-have!',
    comment: 'Blemish Buster works wonders overnight. The texture and scent are amazing!',
    product: 'GLOWELLE Radiant Vitamin C Serum',
    images: [prod2, prod1],
    helpfulYes: 45,
    helpfulNo: 3,
  },
  {
    id: 5,
    name: 'Mia L.',
    rating: 5,
    title: 'Hydrating & Effective - my new daily moisturizer.',
    comment: 'Hydrating, clean - my new daily moisturizer and daily stance.',
    product: 'GLOWELLE Hydrating Milky Moisturizer',
    images: [prod1, prod2],
    helpfulYes: 45,
    helpfulNo: 3,
  },
  {
    id: 6,
    name: 'Mara F.',
    rating: 5,
    title: 'Hydrating metlife ty radiant serums & nonosal',
    comment: 'I have a bottle open every few seconds, my mind and glow without worry.',
    product: 'GLOWELLE Hydrating Milky Moisturizer',
    images: [prod2, prod1],
    helpfulYes: 45,
    helpfulNo: 3,
  },
];

const ReviewsPage = () => {
  const [sortBy, setSortBy] = useState('Most Recent');

  return (
    <div className="reviews-page-wrapper d-flex flex-column min-vh-100">
      
      {/* 1. Main Navbar */}
      <Navbar />

      {/* 2. Main Reviews Section */}
      <main 
        className="reviews-main-content flex-grow-1 py-5"
        style={{ backgroundImage: `url(${reviewsBg})` }}
      >
        <div className="container">
          
          {/* Header Title */}
          <div className="text-center mb-5">
            <h2 className="reviews-main-heading">Customer Reviews</h2>
          </div>

          <div className="row g-4 align-items-start">
            
            {/* Left Column: Rating Summary Card */}
            <div className="col-lg-3 col-md-4">
              <div className="rating-summary-card p-4 rounded-4 shadow-sm text-center">
                <h5 className="summary-title mb-1">Overall Rating</h5>
                <h1 className="display-3 fw-bold summary-score mb-0">4.9</h1>
                <p className="small text-muted mb-2">out of 5 stars</p>

                {/* Stars */}
                <div className="stars-wrapper mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="star-filled" />
                  ))}
                </div>
                <p className="small text-muted mb-4">Based on 1200+ Verified Reviews</p>

                {/* Progress Bars */}
                <div className="rating-bars-list mb-4 text-start">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="bar-label">1000+ 5-Star</span>
                    <div className="progress flex-grow-1"><div className="progress-bar bar-5"></div></div>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="bar-label">180+ 4-Star</span>
                    <div className="progress flex-grow-1"><div className="progress-bar bar-4"></div></div>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="bar-label">120+ 3-Star</span>
                    <div className="progress flex-grow-1"><div className="progress-bar bar-3"></div></div>
                  </div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="bar-label">80+ 2-Star</span>
                    <div className="progress flex-grow-1"><div className="progress-bar bar-2"></div></div>
                  </div>
                  <div className="d-flex align-items-center gap-2">
                    <span className="bar-label">0+ 1-Star</span>
                    <div className="progress flex-grow-1"><div className="progress-bar bar-1"></div></div>
                  </div>
                </div>

                {/* Performance Donut Legend */}
                <div className="product-perf-box text-start pt-3 border-top">
                  <h6 className="fw-bold small mb-2">Product Performance</h6>
                  <ul className="list-unstyled small mb-0 legend-list">
                    <li><span className="dot dot-texture"></span> Texture</li>
                    <li><span className="dot dot-glow"></span> Glow</li>
                    <li><span className="dot dot-depth"></span> Depth</li>
                    <li><span className="dot dot-butter"></span> Butter</li>
                  </ul>
                </div>

              </div>
            </div>

            {/* Right Column: Review Cards Grid */}
            <div className="col-lg-9 col-md-8">
              
              {/* Reviews Grid */}
              <div className="row g-3">
                {reviewsData.map((rev) => (
                  <div key={rev.id} className="col-lg-4 col-sm-6">
                    <div className="review-card p-3 rounded-3 shadow-sm h-100 d-flex flex-column">
                      
                      {/* Header: Stars & Verified Badge */}
                      <div className="d-flex align-items-center justify-content-between mb-2">
                        <div className="stars-sm">
                          {[...Array(rev.rating)].map((_, i) => (
                            <FaStar key={i} className="star-filled-sm" />
                          ))}
                        </div>
                        <span className="verified-badge d-flex align-items-center gap-1">
                          <FaCheckCircle className="check-icon" /> Verified Buyer
                        </span>
                      </div>

                      {/* User Name */}
                      <p className="reviewer-name fw-bold mb-1">{rev.name}</p>

                      {/* Title & Comment */}
                      <h6 className="review-title mb-1">{rev.title}</h6>
                      <p className="review-comment small mb-3 flex-grow-1">{rev.comment}</p>

                      {/* Product Media Images */}
                      <div className="d-flex gap-2 mb-2">
                        {rev.images.map((imgSrc, idx) => (
                          <div key={idx} className="review-img-thumb">
                            <img src={imgSrc} alt="User Review" className="img-fluid rounded" />
                          </div>
                        ))}
                      </div>

                      {/* Product Tag */}
                      <span className="product-tag d-block small text-muted mb-3">{rev.product}</span>

                      {/* Helpful Button Bar */}
                      <div className="d-flex align-items-center justify-content-between border-top pt-2 mt-auto">
                        <span className="small text-muted">Was this review helpful?</span>
                        <div className="d-flex gap-1">
                          <button className="btn btn-sm btn-helpful">Yes ({rev.helpfulYes})</button>
                          <button className="btn btn-sm btn-helpful">No ({rev.helpfulNo})</button>
                        </div>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Actions: Load More & Sorting */}
              <div className="d-flex flex-wrap align-items-center justify-content-between mt-4 pt-3">
                <button className="btn load-more-btn mx-auto mx-md-0 mb-3 mb-md-0">
                  Load More Reviews
                </button>
                
                <div className="sort-by-wrapper d-flex align-items-center gap-2 ms-auto">
                  <span className="small fw-medium">Sort By:</span>
                  <button 
                    className={`btn btn-link p-0 small text-decoration-none ${sortBy === 'Most Recent' ? 'fw-bold text-dark border-bottom border-dark' : 'text-muted'}`}
                    onClick={() => setSortBy('Most Recent')}
                  >
                    Most Recent
                  </button>
                  <button 
                    className={`btn btn-link p-0 small text-decoration-none ${sortBy === 'Highest Rating' ? 'fw-bold text-dark border-bottom border-dark' : 'text-muted'}`}
                    onClick={() => setSortBy('Highest Rating')}
                  >
                    Highest Rating
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      {/* 3. Footer */}
      <Footer />

    </div>
  );
};

export default ReviewsPage;