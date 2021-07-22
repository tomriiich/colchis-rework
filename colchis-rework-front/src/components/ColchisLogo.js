import React from 'react';
import colchis_logo from '../images/colchis-logo.png';
import './ColchisLogo.scss';

function ColchisLogo() {
  return (
    <div className="logo-content">
      <img src={colchis_logo} className="colchis-logo" alt="colchis-logo" />
    </div>
  );
}

export default ColchisLogo;
