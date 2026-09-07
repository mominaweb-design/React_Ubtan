import { useState } from 'react';
import Navbar from '../Components/Navbar';
import ProductTabs from '../Components/ProductTabs';
import Footer from '../Components/Footer';
import './styles/shop.css';

// Images Import
// import sidebarImg from '../assets/sidebarimg.jpg';
import jar1 from '../assets/jar1.png';
import jar2 from '../assets/jar2.png';
import jar3 from '../assets/jar3.png';
import jar4 from '../assets/jar4.png';

const productsData = [
  {
    id: 1,
    name: 'Gold Radiance Ubtan',
    category: 'Ubtan',
    price: 'PKR 1850',
    rating: 5,
    image: jar1,
  },
  {
    id: 2,
    name: 'Sargodha Rose Serum',
    category: 'Serums',
    price: 'PKR 1850',
    rating: 5,
    image: jar2,
  },
  {
    id: 3,
    name: 'Faegortita Face Masks',
    category: 'Face Masks',
    price: 'PKR 1750',
    rating: 5,
    image: jar3,
  },
  {
    id: 4,
    name: 'Sargodha Rose Serum',
    category: 'Serums',
    price: 'PKR 1850',
    rating: 5,
    image: jar4,
  },
  {
    id: 5,
    name: 'Traditional Clay Extraction',
    category: 'Face Masks',
    price: 'PKR 1750',
    rating: 5,
    image: jar2,
  },
  {
    id: 6,
    name: 'Gold Plehiane Face Serum',
    category: 'Serums',
    price: 'PKR 1850',
    rating: 5,
    image: jar1,
  },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter products by selected tab category
  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="shop-page-wrapper d-flex flex-column min-vh-100">
      
      {/* 1. Top Navbar */}
      <Navbar />

      <div className="container-fluid flex-grow-1 p-0">
        <div className="row g-0 h-100">
          
          {/* 2. Left Maroon Sidebar */}
          <aside className=" col-lg-3 col-md-4 shop-sidebar p-4 p-xl-5 text-white">
            <div className="sidebar-content sticky-top pt-3 ">
              
              {/* Illustration Image */}
              {/* <div className="sidebar-img-wrapper mb-4 text-center">
                <img 
                  src={sidebarImg} 
                  alt="Introducing UBTANA" 
                  className="img-fluid sidebar-illustration"
                />
              </div> */}

              {/* Sidebar Heading & Intro */}
              <h2 className="sidebar-title mb-3">
                Introducing<br />UBTANA.
              </h2>
              
              <p className="sidebar-text">
                Introducing UBTANA's brand and famous ingredients brand. With our product line, 
                we bring organic and pure botanical components to restore your natural glow.
              </p>

            </div>
          </aside>

          {/* 3. Right Product Area */}
          <main className="col-lg-9 col-md-8 shop-main-content p-3 p-md-4">
            
            {/* Category Filter Tabs Bar */}
            <ProductTabs onSelectCategory={(cat) => setSelectedCategory(cat)} />

            {/* Product Cards Grid */}
            <div className="row g-3 g-xl-4 mt-2">
              {filteredProducts.map((product) => (
                <div key={product.id} className="col-lg-4 col-sm-6">
                  <div className="product-card">
                    
                    {/* Image Box */}
                    <div className="product-img-box mb-3">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="img-fluid product-img"
                      />
                    </div>

                    {/* Product Info */}
                    <h5 className="product-title mb-1">{product.name}</h5>
                    
                    {/* Rating Stars */}
                    <div className="product-rating mb-1">
                      {'★'.repeat(product.rating)}
                    </div>
                    
                    <p className="product-price fw-bold mb-3">{product.price}</p>

                    {/* Quick Buy CTA */}
                    <button className="btn quick-buy-btn w-100">
                     Buy Now
                    </button>

                  </div>
                </div>
              ))}
            </div>

          </main>

        </div>
      </div>

      {/* 4. Footer Bar */}
      {/* <Footer /> */}

    </div>
  );
};

export default Shop;