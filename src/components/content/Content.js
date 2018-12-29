import React from 'react';
class Content extends React.Component{
    constructor(props){
      super(props)
    }
    render(){
      return (
        // <img src="flight_1024x358.jpg" className="w-100" alt="Responsive image"/>
        <picture>
          <source media="(min-width:0px) and (max-width:320px)" srcset="flight_320x180.jpg"/>
          <source media="(min-width:321px) and (max-width:576px)" srcset="flight_576x324.jpg"/>
          <source media="(min-width:577px) and (max-width:768px)" srcset="flight_768x268.jpg"/>
          <source media="(min-width:769px) and (max-width:1024px)" srcset="flight_1024x358.jpg"/>
          <source media="(min-width:1025px) and (max-width:1200px)" srcset="flight_1200x420.jpg"/>
          <source media="(min-width:1201px)" srcset="flight_1440x504.jpg"/>
          <img src="flight_1024x358.jpg" className="w-100" alt="Responsive image"/>
        </picture>
        //  <img src="flight_320x180.jpg" className="w-100" alt="Responsive image"/>
        //  <img src="flight_576x324.jpg" className="w-100" alt="Responsive image"/>
        //  <img src="flight_768x268.jpg" className="w-100" alt="Responsive image"/>
        //  <img src="flight_768x268.jpg" className="w-100" alt="Responsive image"/>
        //  <img src="flight_1200x420.jpg" className="w-100" alt="Responsive image"/>
        //  <img src="flight_1440x504.jpg" className="w-100" alt="Responsive image"/>
         
      )
    }
  }
export default Content;