import React from 'react';

const Location = ({ domisili }) => {
  return (
    <div className="location-section">
      <span className="location-tag">{domisili}</span>
    </div>
  );
};

export default Location;