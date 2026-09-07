import { useState } from 'react';
import './producttabs.css'
const ProductTabs = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Face Masks', 'Serums', 'Ubtan'];

  const handleTabClick = (category) => {
    setActiveTab(category);
    if (onSelectCategory) {
      onSelectCategory(category);
    }
  };

  return (
    <div className="product-tabs-bar py-3">
      <div className="container d-flex align-items-center justify-content-start gap-2 overflow-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
            onClick={() => handleTabClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;