/* eslint-disable no-undef */
import React from 'react';

class KingsContact extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div className="App">
                <h1 style={{
                    'margin-top': '6%',
                    'margin-bottom': '3%'
                }}>Contact</h1>
                <div>
                    <center className='contactdet'>
                        {/* <MapContainer/> */}
                        <span style={{'padding-left': '10%'}} >
                            <span style={{'display': 'flex'}}>
                            <p className="title" style={{
                                'font-size': '22px'
                            }}><b>Address:</b></p>
                        &nbsp;
                        <p style={{ 'text-align': 'start', 'padding-left': '35px', 'font-size': '20px' }}>
                                Ganganapalli,<br />
                        Ram Nagar Colony,<br />
                        Chittoor,<br />
                        Andhra Pradesh 517001<br />
                            </p>
                            </span>
                            <span style={{'display': 'flex'}}>
                            <p className="title" style={{
                                'font-size': '22px'
                            }}><b>Phone:</b></p>
                        &nbsp;
                        <p style={{ 'text-align': 'start', 'padding-left': '46px', 'font-size': '20px' }}>
                        <a href="tel:+91 1234567890">1234567890</a>
                                
                            </p>
                            </span>
                            <span style={{'display': 'flex'}}>
                            <p className="title" style={{
                                'font-size': '22px'
                            }}><b>Email:</b></p>
                        &nbsp;
                        <p style={{ 'text-align': 'start', 'padding-left': '50px', 'font-size': '20px' }}>
                        <p><a href="mailto:someone@example.com">KingsEm@gmail.com</a></p>                                
                            </p>
                            </span>
                        </span>
                        <div style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 'margin-left': '140px'}}>
                        <iframe title='kings' src={'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3884.226785376999!2d79.08378911473748!3d13.211073613152916!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xe4832c7212b3685f!2sKings%20English%20Mideam%20School!5e0!3m2!1sen!2sin!4v1590222831021!5m2!1sen!2sin'}
                        width={"400"} height={"305"} frameborder={"0"} style={{'border':'0','allowfullscreen':'true', 'aria-hidden':"false",'tabindex':"0", 'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}></iframe>
                        </div>
                    </center>
                    <div>
                    </div>
                    <div>
                </div>
                </div>
            </div>)
    };
}

export default KingsContact;
