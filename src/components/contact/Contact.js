import React from 'react'
function Contact(){
    
    return (
      <>
      Contact
      <div className="jumbotron">
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
            <label htmlFor="message">Phone Number</label>
            <textarea class="form-control" aria-label="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
      </>
    )
  }
  export default Contact;