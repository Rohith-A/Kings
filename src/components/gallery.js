import React from 'react';
import numeral from 'numeral';
import Gallery from 'react-grid-gallery';

// import logo from './logo.svg';
// import './App.css';
const skill = [
    require('../images/26.JPG'),
    require('../images/27.JPG'),
    require('../images/28.JPG'),
    require('../images/29.JPG'),
    require('../images/1.JPG'),
    require('../images/2.JPG'),
    require('../images/3.JPG'),
    require('../images/4.JPG'),
    require('../images/5.JPG'),
    require('../images/6.JPG'),
    require('../images/25.JPG'),
    require('../images/7.JPG'),
    require('../images/8.JPG'),
    require('../images/9.JPG'),
    require('../images/10.JPG'),
    require('../images/11.JPG'),
    require('../images/12.JPG'),
    require('../images/13.JPG'),
    require('../images/14.JPG'),
    require('../images/15.JPG'),
    require('../images/16.JPG'),
    require('../images/17.JPG'),
    require('../images/18.JPG'),
    require('../images/19.JPG'),
    require('../images/20.JPG'),
    require('../images/21.JPG'),
    require('../images/22.JPG'),
    require('../images/23.JPG'),
    require('../images/24.JPG'),
    require('../images/30.JPG'),
    require('../images/31.JPG'),
    require('../images/32.JPG'),
    require('../images/33.JPG'),
    require('../images/34.JPG'),
    require('../images/35.JPG'),
    require('../images/36.JPG'),
    require('../images/37.JPG'),
    require('../images/38.JPG'),
    require('../images/39.JPG'),
    require('../images/40.JPG')
];

class KingsGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state={images:
            []}
    }
    renderImages() {
        const imgs = [];
       for (let index = 0; index < skill.length; index++) {
           imgs.push({
            src: skill[index],
            thumbnail: skill[index],
            thumbnailWidth: 350,
            thumbnailHeight: 220
           })
           
       }
       this.setState({images: imgs});
    }
    componentDidMount(){
        this.renderImages();
    }
    render() {
        return(
    <div className='gallery'>
         <h1 style={{
                    'margin-top': '6%',
                    'margin-bottom': '3%'
                }}>Gallery</h1>
    <div>
   <Gallery images={this.state.images}/>
   </div>
   <footer class="page-footer font-small blue">

  <div class="footer">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> &nbsp;KINGS em school</a>
  </div>
</footer>
    </div>)
     };
}

export default KingsGallery;
