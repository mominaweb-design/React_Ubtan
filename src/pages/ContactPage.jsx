import { useState } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './styles/contactpage.css';

// Background Image Import
import contactBg from '../assets/contact.png';

const MAX_NAME_LENGTH = 80;
const MAX_MESSAGE_LENGTH = 1000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Topic',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear that field's error as the user fixes it
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (data) => {
    const newErrors = {};
    const name = data.name.trim();
    const email = data.email.trim();
    const message = data.message.trim();

    if (!name) {
      newErrors.name = 'Please enter your name.';
    } else if (name.length > MAX_NAME_LENGTH) {
      newErrors.name = `Name must be under ${MAX_NAME_LENGTH} characters.`;
    }

    if (!email) {
      newErrors.email = 'Please enter your email.';
    } else if (!EMAIL_REGEX.test(email)) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (data.topic === 'Topic') {
      newErrors.topic = 'Please select a topic.';
    }

    if (!message) {
      newErrors.message = 'Please enter a message.';
    } else if (message.length > MAX_MESSAGE_LENGTH) {
      newErrors.message = `Message must be under ${MAX_MESSAGE_LENGTH} characters.`;
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('submitting');

    // NOTE: There is no backend wired up yet. Replace this block with a real
    // API call (e.g. fetch('/api/contact', { method: 'POST', body: ... }))
    // or a third-party form service (Formspree, EmailJS, etc.) once ready.
    // IMPORTANT: never put a private API key directly in frontend code —
    // use a backend endpoint or a public-safe key meant for client use, and
    // always re-validate/sanitize this data again on the server, since
    // client-side checks can be bypassed.
    try {
      await new Promise((resolve) => setTimeout(resolve, 600)); // placeholder
      setStatus('success');
      setFormData({ name: '', email: '', topic: 'Topic', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="contact-page-wrapper d-flex flex-column min-vh-100">
      
      {/* 1. Navbar Header */}
      <Navbar />

      {/* 2. Main Content Section with Background Image */}
      <main 
        className="contact-main-content flex-grow-1 d-flex align-items-center py-5"
        style={{ backgroundImage: `url(${contactBg})` }}
      >
        <div className="container">
          <div className="row align-items-center g-4 justify-content-between">
            
            {/* Left Side: Info & Mini Map Card */}
            <div className="col-lg-6 col-md-6 text-start">
              <span className="contact-subheading d-block mb-1">Get In Touch</span>
              <h2 className="contact-heading mb-4">Customer Support</h2>

              {/* Phone & Email Info */}
              <div className="contact-info-list mb-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <div className="info-icon-circle">
                    <FaPhoneAlt />
                  </div>
                  <span className="info-text">+92 42 123 4567</span>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="info-icon-circle">
                    <FaEnvelope />
                  </div>
                  <span className="info-text">hello@ubtana.com</span>
                </div>
              </div>

              {/* Mini Map Card Frame */}
              <div className="mini-map-card">
                <div className="map-placeholder-content d-flex align-items-center justify-content-around h-100">
                  <div className="text-centerone">
                    <FaMapMarkerAlt className="mini-pin-icon" />
                    <span className="d-block fw-semibold small mt-2">Lahore HQ</span>
                  </div>
                  <div className="text-centertwo">
                    <FaMapMarkerAlt className="mini-pin-icon" />
                    <span className="d-block fw-semibold small mt-2">Rawalpindi Branch</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Rounded Terracotta Contact Form */}
            <div className="col-lg-5 col-md-6">
              <div className="contact-form-card p-4 p-md-5 rounded-5 shadow-sm">
                <form onSubmit={handleSubmit} noValidate>

                  {status === 'success' && (
                    <div className="alert alert-success py-2" role="status">
                      Thank you! Your message has been sent.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="alert alert-danger py-2" role="alert">
                      Something went wrong. Please try again.
                    </div>
                  )}

                  {/* Name Input */}
                  <div className="mb-3">
                    <label className="form-label form-custom-label">Name</label>
                    <input 
                      type="text" 
                      name="name" 
                      className={`form-control form-custom-input${errors.name ? ' is-invalid' : ''}`}
                      value={formData.name}
                      onChange={handleChange}
                      maxLength={MAX_NAME_LENGTH}
                      aria-invalid={!!errors.name}
                      required
                    />
                    {errors.name && <div className="invalid-feedback d-block">{errors.name}</div>}
                  </div>

                  {/* Email Input */}
                  <div className="mb-3">
                    <label className="form-label form-custom-label">Email Address</label>
                    <input 
                      type="email" 
                      name="email" 
                      className={`form-control form-custom-input${errors.email ? ' is-invalid' : ''}`}
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      required
                    />
                    {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
                  </div>

                  {/* Topic Dropdown */}
                  <div className="mb-3">
                    <label className="form-label form-custom-label">Topic</label>
                    <select 
                      name="topic" 
                      className={`form-select form-custom-input${errors.topic ? ' is-invalid' : ''}`}
                      value={formData.topic}
                      onChange={handleChange}
                      aria-invalid={!!errors.topic}
                    >
                      <option value="Topic">Topic</option>
                      <option value="Order Inquiry">Order Inquiry</option>
                      <option value="Product Question">Product Question</option>
                      <option value="Feedback">Feedback</option>
                    </select>
                    {errors.topic && <div className="invalid-feedback d-block">{errors.topic}</div>}
                  </div>

                  {/* Message Input */}
                  <div className="mb-4">
                    <label className="form-label form-custom-label">Message</label>
                    <textarea 
                      name="message" 
                      rows="4" 
                      className={`form-control form-custom-input${errors.message ? ' is-invalid' : ''}`}
                      value={formData.message}
                      onChange={handleChange}
                      maxLength={MAX_MESSAGE_LENGTH}
                      aria-invalid={!!errors.message}
                      required
                    ></textarea>
                    {errors.message && <div className="invalid-feedback d-block">{errors.message}</div>}
                  </div>

                  {/* Submit Button */}
                  <button type="submit" className="btn submit-msg-btn w-100" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Sending…' : 'Send Message'}
                  </button>

                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* 3. Footer Bar */}
      <Footer />

    </div>
  );
};

export default ContactPage;