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
      <>
        <span className="social-header d-none d-md-block">
          <a className="mr-1"><i className="fab fa-facebook-f"></i></a>
          <a className="mr-1"><i className="fab fa-twitter"></i></a>
        </span>
        <div className="header-section d-none d-md-block">
          <div className="navbar header-skew">
            <div className="inverse-header text-light">
              <a className="mr-2" onClick={this.handleFacebook}><i className="fas fa-phone"></i>{' '}90909090</a>
              <a onClick={this.handleFacebook}><i className="fas fa-envelope"></i>{' '}xxx@xx.com</a>
            </div>            
          </div>
          {/* <div className="social-icon">
            <a class="mr-1"><i class="fab fa-facebook-f"></i></a>
            <a class="mr-1"><i class="fab fa-twitter"></i></a>
          </div> */}
        </div>         
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand logo-margin nav-logo" href="/">
            <img src="icon1.png" width="50" height="50" className="d-inline-block align-middle" alt=""/>
            <span className="align-middle">{' '}GSS freight Forwarders</span>
          </a>
          <ul className="ml-auto"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            {/* <ul className="navbar-nav mr-auto"/> */}
            <ul className="navbar-nav text-right nav-cus-font font-weight-bold">
              <li className="nav-item active">
                <a className="nav-link" href="/"><i class="fas fa-home mr-1"></i>HOME<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about"><i class="fas fa-user mr-1"></i>ABOUT US</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i class="fab fa-servicestack mr-1"></i>SERVICES
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/freight_forwarding">Freight Forwarding</a>
                  <a className="dropdown-item" href="/tracking">Air & Sea Cargo Tracking</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact_us"><i class="fas fa-comment mr-1"></i>CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
export default Header