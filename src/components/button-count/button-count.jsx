import React, {useState} from 'react';
import './button-count.css';

// import ImgBlueHeart from './../imgBlueHeart/imgBlueHeart';

function ButtonCount(props) {
  const [count, setCount] = useState(0);
  const fun = () => setCount(count + 1);
  
  // onClick={() => setCount(count + 1)}
  return (
      <span className = "button-count-class">
        {/* {ImgBlueHeart.className = "img-blue-heart" ? count = (count + 1) : count = (count - 1)} */}
        {count}
      </span>
  );
}

export default ButtonCount;