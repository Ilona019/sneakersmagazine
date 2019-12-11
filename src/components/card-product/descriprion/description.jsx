import React from 'react';
import './description.css';

function Description(props) {

  return (
      <div className = "desc-class">{props.desc}</div>
  );
}

export default Description;