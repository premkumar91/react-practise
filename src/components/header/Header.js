import React from 'react'
import {Link} from "react-router-dom";
import navItems from './config.json'
class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen:false,
      servicesNavClass:'nav-item dropdown',
      servicesAriaExpanded:'false',
      servicesDropDownMenu:'dropdown-menu',
      navItems:this.updateGetNavItems(navItems.data)
    }
    this.toggle=this.toggle.bind(this);
    this.handleFacebook=this.handleFacebook.bind(this);
    this.mouseEnter=this.mouseEnter.bind(this);
    this.mouseLeave=this.mouseLeave.bind(this);
  }
  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }
  updateGetNavItems(navItems){
    let serviceNavItem = navItems.find((item)=>item.name === "SERVICES")
    let handler = {
      onMouseEnter : (e)=>{
        this.mouseEnter(serviceNavItem,e);
      },
      onMouseLeave : (e)=>{
        this.mouseLeave(serviceNavItem,e);
      }
    }
    serviceNavItem.listAttributes = {...serviceNavItem.listAttributes,...handler}    
    
    return navItems
  }
  handleFacebook(){
    
  }
  mouseEnter(item){
    // this.setState({
    //   servicesNavClass:'nav-item dropdown show',
    //   servicesAriaExpanded:'true',
    //   servicesDropDownMenu:'dropdown-menu show m-0'
    // })
    console.log(arguments);
  }
  mouseLeave(item){
    // this.setState({
    //   servicesNavClass:'nav-item dropdown',
    //   servicesAriaExpanded:'false',
    //   servicesDropDownMenu:'dropdown-menu m-0'
    // })
    console.log(arguments);
  }
  navDropDown(item){
    if(item && !item.isDropDown)
      return null;

    return (
      <div {...item.dropDownMenuAttributes}>
                {item.dropDownItems.map((dropDownItem)=>
                  <a {...dropDownItem.attributes}>{dropDownItem.name}</a>
                )}
      </div>
    )
  }
  navList(){
    let dropDown
    return (
      <>
      {this.state.navItems.map((item)=>
        <li {...item.listAttributes}>
          <a {...item.linkAtrributes}><i {...item.iconAttributes}></i>{item.name}</a>
          {this.navDropDown(item)}
        </li>
      )}
      </>
    )
  }

  render(){
    return (
      <>
        <div className="social-icon">
           <span>
            <a className="mr-1 text-light" href="https://twitter.com/premjec91" target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a className="mr-1 text-light" href="https://twitter.com/premjec91" target="_blank"><i className="fab fa-twitter"></i></a>
           </span>
        </div> 
        <div className="header-section d-none d-md-block">
          <div className="navbar header-skew">
            <div className="inverse-header text-light">
              <a className="mr-2" onClick={this.handleFacebook}><i className="fas fa-phone"></i>{' '}90909090</a>
              <a onClick={this.handleFacebook}><i className="fas fa-envelope"></i>{' '}xxx@xx.com</a>
            </div>            
          </div>           
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
            <ul className="navbar-nav text-right nav-cus-font font-weight-bold">
              {this.navList()}
              {/* <li className="nav-item active">
                <a className="nav-link" href="/"><i class="fas fa-home mr-1"></i>HOME<span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about"><i class="fas fa-user mr-1"></i>ABOUT</a>
              </li>
              <li className={this.state.servicesNavClass} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave}>
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.servicesAriaExpanded}>
                <i class="fab fa-servicestack mr-1"></i>SERVICES
                </a>
                <div className={this.state.servicesDropDownMenu} aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/freight_forwarding">Freight Forwarding</a>
                  <a className="dropdown-item" href="/tracking">Air & Sea Cargo Tracking</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact_us"><i class="fas fa-comment mr-1"></i>CONTACT</a>
              </li> */}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
export default Header