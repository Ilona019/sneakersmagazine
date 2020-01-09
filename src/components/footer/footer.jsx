import React from 'react';
import './footer.css';

class Footer extends React.Component {
  render(){
    return (
      <div className = "footer-class">
          <div className = "tech">ТЕХПОДДЕРЖКА:</div>
          <div className = "block">
            <div className = "mosc">8 495 634-12-18, Москва</div>
            <div className = "yar">8 4852 799-35-70, Ярославль</div>
          </div>
      </div>
  );
  }
}

export default Footer;