import React from 'react';
import PropTypes from 'prop-types';
import './Card.scss';

function Card({name, title, photo}) {
  return (
    <div className="card">
      <div className="card-header">
        <img src={photo} className="card-img" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="card-text">{title}</p>
        <button className="card-button">Learn more</button>
    </div>
  </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  photo: PropTypes.string
};

export default Card;
