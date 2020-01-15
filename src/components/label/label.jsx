import React from 'react';
import './label.css';

class Label extends React.Component{
    render(){
    return <div className = {this.props.className}>{this.props.nameOfLabel}</div>
    }
}

export default Label;