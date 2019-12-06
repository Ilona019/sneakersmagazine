import React from 'react';
import './labelName.css';

function LabelName(props) {
  return (
    <div className = "labelName-class">{props.name}</div>
  );
}

export default LabelName;