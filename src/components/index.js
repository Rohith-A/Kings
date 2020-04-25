import React from 'react';
import KingsHome from './home';
import KingsContact from './Contact'
// import Covidcountries from'./countries';
// // import logo from './logo.svg';
// // import './App.css';
// import {Dropdown} from 'primereact/dropdown';
import KingsAbout from './About';
class KingsIndex extends React.Component {
    constructor(props) {
        super(props)
        this.state={details: props.details}
    }
    componentDidMount() {
        
    }
    render() {
        return(
            <div>
                <KingsHome />
                <KingsContact />
                <KingsAbout />
            </div>
        )
     };
}

export default KingsIndex;
