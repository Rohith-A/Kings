/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import KingsHome from './home';
import KingsContact from './Contact'
import KingsAbout from './About';
class KingsNav extends React.Component {
  constructor(props) {
    super(props)
    this.state = { details: props.details }
  }
  componentDidMount() {

  }
  kingsHome() {
    return <KingsHome />;
  }
  
  kingsAbout() {
    debugger
    return <KingsAbout />;
  }
  
  KingsContact() {
    return <KingsContact />;
  }
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
            <a className="navbar-brand" href="#">KINGS</a>

            <ul className="navbar-nav floatRight" >
              <li className="nav-item">
              <Link to="/" className="nav-link">
                Home 
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
                </Link>
              </li>
              <li className="nav-item" >
              <Link to="/contact" className="nav-link">
                Contact
                </Link>
              </li>

              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                  Dropdown link
      </a>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">Link 1</a>
                  <a className="dropdown-item" href="#">Link 2</a>
                  <a className="dropdown-item" href="#">Link 3</a>
                </div>
              </li> */}
            </ul>
          </nav>
          <Switch>
            <Route path="/" component={KingsHome} exact>
             
            </Route>
            <Route path="/about"  component={KingsAbout}>
            </Route>
            <Route path="/contact"  component={KingsContact}>
            </Route>
          </Switch>
        </div>
      </Router>

    )
  };
}

export default KingsNav;
