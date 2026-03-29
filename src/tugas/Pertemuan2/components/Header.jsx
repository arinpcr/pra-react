import React from 'react';

const Header = ({ nama, status, kampus }) => {
  return (
    <div className="header-section">
      <h1>{nama} </h1>
      <p className="status-text">{status} <br/> {kampus}</p>
    </div>
  );
};

export default Header;