import React from 'react';
import { Chart } from 'primereact/chart.js';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
const image = require('../assets/images/Kings_main.jpeg');
const correspondent = require('../assets/images/Correspondent2.png');
const estIcon = require('../assets/icons/established-icon-png.png');
const awardIcon = require('../assets/icons/award.png');
const bookIcon = require('../assets/icons/book.png');
const homeImg1 = require('../images/DSC_0400.JPEG');
const teachers = require('../images/DSC_0990.JPG');
const fare = require('../images/DSC_0871.JPG');
const skill = require('../images/DSC_0985.JPG');
class KingsHome extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'KINGS Home'
        }
    }

    render() {
        const header = <img alt="Card" src={correspondent} height='300' />;
        const footer = <span>
            <label>
                Chairman & correspondent of Kings Em School
                        </label>
        </span>;
        return (
            <div>
                <div class="overlay">
                    <img src={image} alt='Kings' height='auto' className="image" width='100%' />
                    <div class="middle">
                        <h1>KINGS Em School</h1>
                        <div className="row text">
                            <div className="column">
                                <div className="iconcard">
                                    <img src={estIcon} alt="Jane"  width='30%' className='iconsImg'/>
                                    <div className="overlay">
                                        <p className="title">Est: 1980</p>
                                        <p className='desc' >40 years of history in educational world</p>
                                        {/* <p><button className="button">Contact</button></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                            <div className="iconcard">
                            <img src={awardIcon} alt="Jane"  width='30%' className='iconsImg'/>
                                    <div className="overlay">
                                        <p className="title">Best institute</p>
                                        <p className='desc' >The best educational institute ever</p>
                                        {/* <p><button className="button">Contact</button></p> */}
                                    </div>
                                </div>
                            </div>

                            <div className="column">
                            <div className="iconcard">
                            <img src={bookIcon} alt="Jane"  width='30%' className='iconsImgbook'/>
                                    <div className="overlay">
                                        <p className="title">Quality education</p>
                                        <p className='desc' >Maintain standard quality in education</p>
                                        {/* <p><button className="button">Contact</button></p> */}
                                    </div>
                                </div>
                            </div>
                        </div>                    </div>
                </div>
                {/* <img src ={image}alt='Kings' height='auto' width='100%'/> */}
                <br />
                <br />
                <Card footer={footer} header={header} className='correspondent'>
                    <p className="title"><b>correspondent</b></p><b>SSK. Raja</b>
                </Card>
                <br />
                <div style={{'box-shadow': '0 4px 8px 0 rgba(0, 0, 0, 0.2)', 'margin-top': '50px'}}>
                <img src={skill} alt='img' width= '20%' style={{'margin-right': '50px'}}/>
                <img src={fare} alt='img' width= '20%'/>
                <img src={teachers} alt='img' width= '20%' style={{'margin': '50px'}}/>
                    <img src={homeImg1} alt='img' width= '20%'/>
                </div>
                <p>
                    {/* Kings english medium school has history of 35years. One of the top schools in chittoor providing quality education. */}
                    </p>
                {/* <h1>{this.state.name}</h1> */}
            </div>
        )
    };
}

export default KingsHome;
