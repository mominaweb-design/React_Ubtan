import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar py-3">
      <div className="container">
        
        {/* Brand Logo */}
        <Link className="navbar-brand brand-title" to="/">
          UBTANA
        </Link>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav gap-3">

            <NavLink 
                to="/" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Home
              </NavLink>
          
            <li className="nav-item">
              <NavLink 
                to="/shop" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Shop
              </NavLink>
            </li>
            <li>
               <NavLink 
                to="/location" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Location
              </NavLink>
            </li>
            <li className="nav-item">
              {/* <NavLink 
                to="/ritual" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                The Ritual
              </NavLink> */}
            </li>
            <li className="nav-item">
              <NavLink 
                to="/about" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/reviews" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Reviews
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                to="/contact" 
                className={({ isActive }) => isActive ? "nav-link active-link" : "nav-link"}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Shop Now Button */}
        <Link to="/shop" className="btn nav-shop-btn d-none d-lg-block">
          Shop Now
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;