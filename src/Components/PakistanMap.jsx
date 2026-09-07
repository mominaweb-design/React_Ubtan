import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import './pakistanmap.css';

// Map Background Image Import
import mapBg from '../assets/loctionback.png';

const locationsData = [
  {
    id: 1,
    title: 'Nettle from Northern Areas',
    type: 'pin-card',
  
    arrowDirection: 'left',
    top: '7%',
    left: '78%',
    pinTop: '3%',
    pinLeft: '77%',
  },
  {
    id: 2,
    city: 'Rawalpindi',
    type: 'city',
    top: '28%',
    left: '72%',
  },
  {
    id: 3,
    title: 'Sargodha Rose Fields',
    type: 'pin-card',
  
    arrowDirection: 'right',
    top: '40%',
    left: '32%',
    pinTop: '36%',
    pinLeft: '30%',
  },
  {
    id: 4,
    city: 'Lahore',
    type: 'city',
    top: '56%',
    left: '78%',
  },
  {
    id: 5,
    title: 'Traditional Clay Extraction',
    type: 'pin-card',
   
    arrowDirection: 'right',
    top: '59%',
    left: '36%',
    pinTop: '56%',
    pinLeft: '30%',
  },
  {
    id: 6,
    title: 'Organic Herbs Sourcing',
    type: 'pin-card',

    arrowDirection: 'right',
    top: '87%',
    left: '35%',
    pinTop: '83%',
    pinLeft: '33%',
  },
];

const PakistanMap = () => {
  return (
    <div className="map-container-wrapper mx-auto my-3">
      <div 
        className="map-canvas overflow-hidden rounded-4 shadow-sm position-relative"
        style={{ backgroundImage: `url(${mapBg})` }}
      >
        {locationsData.map((item) => (
          <React.Fragment key={item.id}>
            {item.type === 'city' ? (
              /* City Marker (Black Pin + Text) */
              <div
                className="map-pin-point position-absolute d-flex align-items-center gap-1"
                style={{ top: item.top, left: item.left }}
              >
                <FaMapMarkerAlt className="black-pin-icon" />
                <span className="city-name fw-bold">{item.city}</span>
              </div>
            ) : (
              /* Ingredient Speech Bubble Card + Separate Maroon Pin */
              <>
                <div
                  className="map-pin-point position-absolute"
                  style={{ top: item.top, left: item.left }}
                >
                  <div className={`speech-card arrow-${item.arrowDirection} d-flex align-items-center gap-2`}>
                    <span className="card-icon">{item.icon}</span>
                    <span className="card-title fw-bold text-start">{item.title}</span>
                  </div>
                </div>

                {/* Maroon Map Pin Pointer */}
                <div 
                  className="position-absolute"
                  style={{ top: item.pinTop, left: item.pinLeft, zIndex: 4 }}
                >
                  <FaMapMarkerAlt className="maroon-pin-icon" />
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default PakistanMap;