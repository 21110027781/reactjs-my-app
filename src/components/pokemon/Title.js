import React, { Component } from 'react';
import './Title.css';

class Title extends Component {
    render() {
        return (<div>
        	<h1 className="title">{this.props.text1}</h1>
        </div>);
    }
}

export default Title;
