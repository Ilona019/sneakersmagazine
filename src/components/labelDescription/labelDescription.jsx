import React from 'react';
import './labelDescription.css';

function LabelDescription(props) {
  return (
    <div className = "labelDescription-class">{props.description}</div>
  );
}

export default LabelDescription;