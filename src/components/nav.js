/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

class KingsNav extends React.Component {
    constructor(props) {
        super(props)
        this.state = { details: props.details }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <nav className ="navbar navbar-expand-sm bg-primary navbar-dark">
  <a className ="navbar-brand" href="#">KINGS</a>

  <ul className ="navbar-nav floatRight" >
    <li className ="nav-item">
      <a className ="nav-link" href="#">Link 1</a>
    </li>
    <li className ="nav-item">
      <a className ="nav-link" href="#">Link 2</a>
    </li>

    <li className ="nav-item dropdown">
      <a className ="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div className ="dropdown-menu">
        <a className ="dropdown-item" href="#">Link 1</a>
        <a className ="dropdown-item" href="#">Link 2</a>
        <a className ="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
</nav>
</div>
        )
     };
}

export default KingsNav;
