import React from 'react';
// import logo from './logo.svg';
// import covid19_response_icon from './assets/logo/covid19_response_icon.svg'
import './App.css';
import KingsIndex from './components/index'
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
  return (
    <div className="App">
      <meta charset="utf-8" />
 


      <center>
      <KingsIndex />
      </center>
<footer class="page-footer font-small blue">

  <div class="footer">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
</footer>

      {/* <footer>
      <label className='footer-desc'>Kings Em School</label>
        <label className='footer'>&copy; Kings</label>
      </footer> */}
    </div>
  );
}

export default App;
