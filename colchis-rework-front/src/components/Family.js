import React from 'react';
import Card from '../components/Card';
import aeetes_photo from '../images/aeetes.jpg';
import idyia_photo from '../images/idyia.jpg';
import madeas_photo from '../images/madeas.jpg';
import './Family.scss';

function Family() {
  return (
    <div className="family-content">
      <h1>The Royal Family</h1>
      <div className="card-content">
        <Card name="Aeetes" title="King" photo={aeetes_photo} />
        <Card name="Idyia" title="Queen" photo={idyia_photo} />
        <Card name="Madeas" title="Princess" photo={madeas_photo} />
      </div>
    </div>
  );
}

export default Family;
