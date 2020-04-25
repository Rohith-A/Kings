import React from 'react';
import axios from 'axios';
import { Dropdown } from 'primereact/dropdown';

class KingsContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name : 'Contact'
        }
    }
    render() {
        return (
            <div className="App">
                <h1>Contact</h1>
                </div>)
    };
}

export default KingsContact;
