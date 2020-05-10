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
    <div className="about-section">
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane"  width='100%' /> */}
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" width='100%' /> */}
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team3.jpg" alt="John"  width='100%' /> */}
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>)
     };
}

export default KingsAbout;
