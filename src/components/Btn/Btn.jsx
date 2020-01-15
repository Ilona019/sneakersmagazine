import React from 'react';
import './Btn.css';

class Btn extends React.Component{
    render(){
    return <div className = {this.props.className}>{this.props.nameOfButton}</div>
    }
}

export default Btn;