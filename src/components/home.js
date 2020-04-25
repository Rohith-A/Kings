import React from 'react';
import {Chart} from 'primereact/chart.js';

class KingsHome extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name : 'KINGS Home'
            }
    }
    render() {
        return(
            <div className='charts'>
                <center>
                    <h1>{this.state.name}</h1>
                </center>
            </div>
        )
     };
}

export default KingsHome;
