import React from 'react';
import numeral from 'numeral';
// import logo from './logo.svg';
// import './App.css';

class KingsAbout extends React.Component {
    constructor(props) {
        super(props)
        this.state={details: props.details}
    }
    
    render() {
        return(
    <div className="details">
    <h1>About</h1>
    </div>)
     };
}

export default KingsAbout;
