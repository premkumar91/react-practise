import React from 'react';
import FreightServicesPromo from '../content/FreightServicesPromo';
function Contact(){
    let mapStyle = {
      border:'0'
    }  
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
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31085.2174576993!2d80.2488595!3d13.121207!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265054291a09b%3A0x276fe51caf7b48d3!2sPerambur%2C+Chennai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1546447214212" width="600" height="450" frameborder="0" style={mapStyle} allowfullscreen></iframe>
        </div>
        <p className="text-center font-weight-bolder">Our Freight Forwarding Services</p>        
        <div className="row">
          <FreightServicesPromo/>
        </div> 
        
      </div>
      </>
    )
  }
  export default Contact;