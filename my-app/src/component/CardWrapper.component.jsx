import React from 'react';
import './CardWrapper.style.css';

function CardWrapper(props) {
  return (
    <div className={props.className}>
      <h2>{props.title}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.description}</p>
    </div>
  );
}

export default CardWrapper;
