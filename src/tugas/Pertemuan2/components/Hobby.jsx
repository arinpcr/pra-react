import React from 'react';

const Hobby = ({ hobi }) => {
  return (
    <div className="info-box">
      <h3></h3>
      <ul>
        {hobi.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobby;