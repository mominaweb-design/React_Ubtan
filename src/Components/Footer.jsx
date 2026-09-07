import { FaInstagram, FaFacebookF, FaYoutube } from 'react-icons/fa';
import './footer.css';

const Footer = () => {
  return (
    <footer className="ubtana-footer">
      <div className="container-fluid h-100 d-flex flex-column align-items-end justify-content-center px-4 px-md-5">
        
        {/* Social Media Icons */}
        <div className="d-flex align-items-center gap-2 mb-1">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="Facebook">
            <FaFacebookF />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon-btn" aria-label="YouTube">
            <FaYoutube />
          </a>
        </div>

        {/* Footer Subtext / Copyright */}
        <p className="footer-subtext mb-0">
          UBTANA | Company | Ubtana
        </p>

      </div>
    </footer>
  );
};

export default Footer;