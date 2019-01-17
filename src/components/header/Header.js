import React from 'react'
import {Link} from "react-router-dom";
import navItems from './config.json'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isOpen:false,
      navItems:this.updateGetNavItems(navItems.data),
      website:navItems.website
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
    navItems.forEach(item => {
      let handler = {
        onClick : (e) => {
          this.onClick(item,e)
        }
      }
      item.listAttributes = {...item.listAttributes,...handler}
      
    });
    //console.log("nav items init",navItems);
    return navItems
  }
  handleFacebook(){
    
  }

  onClick(item,event){
    //alert('hello');
    // let prevNavItems = [...this.state.navItems]
    // prevNavItems.forEach(prevNavitem => {
    //   if(prevNavitem.name === item.name){
    //     prevNavitem.listAttributes.className = "nav-item active"
    //   }
    //   else{
    //     prevNavitem.listAttributes.className = "nav-item"
    //   }
    // })
    // this.setState({
    //   navItems:prevNavItems
    // })
    //console.log(item);
  }

  mouseEnter(item,event){
    let prevNavItems = [...this.state.navItems]
    if(item && item.listAttributes)
    {
      prevNavItems[item.listAttributes.key-1].className = "nav-item dropdown show";
      prevNavItems[item.listAttributes.key-1]["aria-expanded"] = true;
      prevNavItems[item.listAttributes.key-1].dropDownMenuAttributes.className = "dropdown-menu m-0 show";    
      this.setState({
        navItems:prevNavItems
      });  
    }
  }
  mouseLeave(item,event){

    let prevNavItems = [...this.state.navItems]
    if(item && item.listAttributes)
    {
      prevNavItems[item.listAttributes.key-1].className = "nav-item dropdown";
      prevNavItems[item.listAttributes.key-1].linkAtrributes["aria-expanded"] = false;
      prevNavItems[item.listAttributes.key-1].dropDownMenuAttributes.className = "dropdown-menu m-0";    
      this.setState({
        navItems:prevNavItems
      });  
    }
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
  componentDidMount(){
    this.updateActiveRoutes();
  }

  
  getActiveNavItems(navItems,pathName){
    return navItems.find(item=>{
        if(item.linkAtrributes.href === pathName){
          return true
        }else if(item.dropDownItems){
          let dropDownMatchedItems = item.dropDownItems.filter(dropDownItem=>dropDownItem.attributes.href === pathName)
              return dropDownMatchedItems.length > 0;
        }
        return false;
    })
  }
  updateActiveRoutes(){
    let pathName = window.location.pathname;
    let prevNavItems = [...this.state.navItems];
    let activeClass = "active";
    
    let activeItem = this.getActiveNavItems(prevNavItems,pathName);
    if(activeItem && !this.isBegginingWord(activeItem.listAttributes.className,activeClass)
          && !this.isMiddleOrEndOfWord(activeItem.listAttributes.className,activeClass)
      ){
        activeItem.listAttributes.className += " active";
       }
    
    prevNavItems.forEach(item=>{
      if(item.name !== activeItem.name)
      {
        if(this.isBegginingWord(item.listAttributes.className,activeClass)
          || this.isMiddleOrEndOfWord(item.listAttributes.className,activeClass)
          ){
            item.listAttributes.className = this.replaceString(item.listAttributes.className,item.listAttributes.className.indexOf(activeClass),"",activeClass.length)
          }
      }
      return item;
    })   
    this.setState({
      navItems:prevNavItems
    }) 
  }

  replaceString(text,index,replacement,length){
    return text.substr(0,index) + replacement + text.substr(index+length)
  }

  isBegginingWord(words,word){
    let length = word.length;
    let startIndex = words.indexOf(word);
    let endIndex = startIndex + length;
    if(words.charAt(startIndex-1) === ""
      && (words.charAt(endIndex) === "" || words.charAt(endIndex) === " ")
      ){
        return true;
    }
    return false;
  }

  isMiddleOrEndOfWord(words,word){
    let length = word.length;
    let startIndex = words.indexOf(word);
    let endIndex = startIndex + length;
    if(words.charAt(startIndex-1) === " "
      && (words.charAt(endIndex) === "" || words.charAt(endIndex) === " ")
      ){
        return true;
      }
    return false;  
  }

  render(){
    return (
      <>
        <div className="social-icon d-none d-md-block">
           <span>
            <a className="mr-1 text-light" href={this.state.website.facebook_page_link} target="_blank"><i className="fab fa-facebook-f"></i></a>
            <a className="mr-1 text-light" href={this.state.website.twitter_page_link} target="_blank"><i className="fab fa-twitter"></i></a>
           </span>
        </div> 
        <div className="header-section d-none d-md-block">
          <div className="navbar header-skew">
            <div className="inverse-header text-light">
              <a className="mr-2" onClick={this.handleFacebook}><i className="fas fa-phone"></i>{' '}{this.state.website.mobile_no}</a>
              <a onClick={this.handleFacebook}><i className="fas fa-envelope"></i>{' '}{this.state.website.email}</a>
            </div>            
          </div>           
        </div>         
        <nav className="navbar navbar-expand-md navbar-light">
          <a className="navbar-brand logo-margin nav-logo" href="/">
            <img src={this.state.website.logo} width="50" height="50" className="d-inline-block align-middle" alt=""/>
            <span className="align-middle">{' '}{this.state.website.name}</span>
          </a>
          <ul className="ml-auto"/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav text-right nav-cus-font font-weight-bold">
              {this.navList()}
            </ul>
          </div>
        </nav>
      </>
    )
  }
}
export default Header