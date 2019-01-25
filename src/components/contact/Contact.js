import React from 'react';
import FreightServicesPromo from '../content/FreightServicesPromo';
import Map from '../map/Map';
import _ from 'lodash';
class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mapStyle:{
        border:"0"
      },
      contact:{
        message:"",
        name:"",
        mail:"",
        contactNumber:""
      }
    }  
    this.addBindings();
  }
  addBindings(){
    this.sendEmail = this.sendEmail.bind(this);   
    //this.handleMessageChange = this.handleMessageChange(this); 
  }
  componentDidMount(){
    
  }
  handleMessageChange(event,prop){
    if(!_.has(event,'target.value') || _.isEmpty(prop)){
      return false;
    }
    //console.log('prop',prop,this.state);
    let prevContactState = {...this.state.contact}
    prevContactState[prop] = event.target.value;
    this.setState({contact:prevContactState});
  }
  sendEmail(e){
    e.preventDefault();
    let url = "http://localhost:5002";
    let data = {
      contact:this.state.contact
    }
    //console.log("mail data",data);
    if(_.isEmpty(data.contact) || _.isEmpty(data.contact.name) || _.isEmpty(data.contact.message)
      || _.isEmpty(data.contact.mail) || _.isEmpty(data.contact.contactNumber)){
        return false;
    }
    let payload = {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    window.fetch(url,payload).then(response => {
        response.json().then(data=>{
          console.log("send",data);
        })
      })
  }
  render(){
    return (
      <>
      <div className="jumbotron mb-0">
        <h1 className="text-center">Contact us</h1>
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" onChange={(e) => this.handleMessageChange(e,'name')} className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" onChange={(e) => this.handleMessageChange(e,'mail')} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input type="tel" className="form-control" onChange={(e) => this.handleMessageChange(e,'contactNumber')} id="phoneNo" aria-describedby="phoneHelp" placeholder="Enter phone number"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea value={this.state.contact.message} onChange={(e) => this.handleMessageChange(e,'message')} className="form-control" aria-label="message"/>
              </div>
              <div className="text-center">
                <button className="btn btn-primary" onClick={this.sendEmail}>Send</button>
              </div>                
            </form>
          </div> 
        </div>
        <div className="row mt-5 mb-5 d-flex justify-content-center">
          <Map styles = {this.state.mapStyle}/>
        </div>
        <p className="text-center font-weight-bolder">Our Freight Forwarding Services</p>        
        <div className="row">
          <FreightServicesPromo/>
        </div> 
        
      </div>
      </>
    )
  } 
    
  }
  export default Contact;