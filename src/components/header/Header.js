import React from 'react'
import {Link} from "react-router-dom";
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen:false
    }
    this.toggle=this.toggle.bind(this);
    this.handleFacebook=this.handleFacebook.bind(this);
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  handleFacebook(){
    alert('hi')
  }
  render(){
    return (
      <div>
        <div>
          <nav className="navbar header-skew">
            <div className="inverse-header text-light">
              <a className="mr-2" onClick={this.handleFacebook}><i className="fas fa-phone"></i>{' '}90909090</a>
              <a onClick={this.handleFacebook}><i className="fas fa-envelope"></i>{' '}xxx@xx.com</a>
              <a className="ml-5"onClick={this.handleFacebook}><i className="fab fa-facebook-f"></i></a>
              <a onClick={this.handleFacebook}><i className="fab fa-twitter"></i></a>
            </div>            
          </nav>
        </div>         
        <nav className="navbar navbar-expand-md navbar-light bg-light">
          <a className="navbar-brand logo-margin" href="/">
            <img src="one.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
            {' '}Logistics
          </a>
          <ul className="ml-auto"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            {/* <ul className="navbar-nav mr-auto"/> */}
            <ul className="navbar-nav text-right">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Services
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Freight Forwarding</a>
                  <a className="dropdown-item" href="#">Another action</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">Contact us</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default Header