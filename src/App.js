import React from 'react';
// import logo from './logo.svg';
import covid19_response_icon from './assets/logo/covid19_response_icon.svg'
import './App.css';
import KingsIndex from './components/index'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <center>
      <div className='logoSec'>
        {/* <span><img src={covid19_response_icon} className={'App-logo'}></img></span> */}
        <span><h3 className={'headerSec'}><b>KINGS</b></h3></span>
      </div>
      <KingsIndex />
      </center>
      <footer>
      <label className='footer-desc'>Kings Em School</label>
        <label className='footer'>&copy; Kings</label>
      </footer>
    </div>
  );
}

export default App;
