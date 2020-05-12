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
  <h1>About Us</h1>
  <p>Established in 1981 with few numbers, Kings’ nurtured innumerable children who are spread around the world earning a good living.</p>
  <p>It’s determination to support children had kept it on-going till date. A good ambience with caring teaching faculty and staff are its strength.</p>
  <p>Dedication of our teaching faculty, support staff & vision of our beloved S.S.K Raja sir, had resulted to what is present Kings’.</p>
</div>

<h2 >Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team1.jpg" alt="Jane"  width='100%' /> */}
      <div className="container">
        <h2>Niranjan Kumar</h2>
        <p className="title">Vice-Principal</p>
        <p>A dedicated teacher who is addressing the teaching staff requirements apart from taking care of Children needs.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team2.jpg" alt="Mike" width='100%' /> */}
      <div className="container">
        <h2>ILM</h2>
        <p className="title">Associated Partner</p>
        <p>We have associated with the esteemed ILM organization to nurture the soft skills of students.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
  
  <div className="column">
    <div className="card">
      {/* <img src="/w3images/team3.jpg" alt="John"  width='100%' /> */}
      <div className="container">
        <h2>ALUMNI</h2>
        <p className="title">Biggest Asset</p>
        <p>Our ex-students settled across the world are sharing the expertise with their younger ones.</p>
        <p>kings201914@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</div>
    </div>)
     };
}

export default KingsAbout;
