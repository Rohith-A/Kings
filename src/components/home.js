import React from 'react';
import {Chart} from 'primereact/chart.js';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';
const image = require('../assets/images/Kings_main.jpeg');
const correspondent = require('../assets/images/Correspondent2.png');
class KingsHome extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            name : 'KINGS Home'
            }
    }
    
    render() {
        const header = <img alt="Card" src={correspondent} height='300'/>;
        const footer = <span>
                        <label>
                            Chairman & correspondent of Kings Em School
                        </label>
                     </span>;
        return(
            <div>
                    <img src ={image}alt='Kings' height='auto' width='100%'/>
                    <br/>
                    <br/>
                    <Card footer={footer} header={header}>
                    <b>correspondent:</b> SSK. Raja
                    </Card>
                    <br />
                    <br />
                    <p>
                        Kings english medium school has history of 35years. One of the top schools in chittoor providing quality education. 
                    </p>
                    {/* <h1>{this.state.name}</h1> */}
            </div>
        )
     };
}

export default KingsHome;
