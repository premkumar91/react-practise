import React from 'react';
import FreightServicesPromo from '../content/FreightServicesPromo';
import Map from '../map/Map'
class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      mapStyle:{
        border:"0"
      }
    }  
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
                <input type="text" className="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter name"/>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo">Phone Number</label>
                <input type="tel" className="form-control" id="phoneNo" aria-describedby="phoneHelp" placeholder="Enter phone number"/>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" aria-label="message"></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">Send</button>
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