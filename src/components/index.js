import React from 'react';
import KingsHome from './home';
import KingsContact from './Contact'
import KingsNav from './nav'
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
                 <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFLSRQenfxKVPJiVKdlEl82CLGEVpnEKk&callback=initMap"
  type="text/javascript"></script>
  <script src='https://maps.googleapis.com/maps/api/js?v=3' sensor='false'
    callback='initialize'></script>
                <KingsNav />
                {/* <KingsHome />
                <KingsContact />
                <KingsAbout /> */}
            </div>
        )
     };
}

export default KingsIndex;
