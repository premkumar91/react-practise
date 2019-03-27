import React from 'react'
import CompanyDescription from '../content/CompanyDescription';
import Content from '../content/Content';
import FreightServicesPromo from '../content/FreightServicesPromo'
function About(){
    return (
      <>
      {/* <Content/> */}
      
      {/* <CompanyDescription/> */}
      <div className="jumbotron mb-0">
        <p className="text-center display-4 mt-2">WHAT WE DO</p>
        <span className="underline-block"><span className="underline"></span></span>
        {/* <p className="text-justify p-3">GSS freight Forwarder always works closely with the customers to provide a best possible solution for their business needs which strives a great success for customers. whether you are a small or big firm, thinking of to export or import your goods anywhere in the world, no worry! we are here to provide dock to door freight forwarding services in an ease manner. we provide a full range of services including tracking inland transportation, preparation of shipping and export documents, warehousing, booking cargo space, negotiating freight charges, freight consolidation, cargo insurance, and filing of insurance claims. we have an established relationships with carriers, from air freighters and trucking companies, to rail freighters and ocean liners, giving the best possible price to move your goods along the most economical route by working out various bids and choosing the one that best balances speed, cost, and reliability.</p> */}
        <p className="text-justify p-3">Our freight forwarding business always work closely with customers to provide finest solution for their business needs. We strive for customer's prosperity. Thinking of import/export goods across the globe, we deliver with ease dock to door.</p>
        <h1 className="display-4 text-center mb-2">Freight Forwarding Services</h1>
        {/* <p className="lead mb-5 mt-5 text-justify">Our freight forwarding services are built for any size of firms. we strive hard to make our customers happy by understanding their needs and deliver the best solutions. From ocean shipments to airfreight and inland transportation, our established carrier network ensure complete safety, fast transit times and hassle free shipment to destination.</p> */}
        <p className="lead mb-5 mt-5 text-justify">
          Our affiliation with world class carriers, affirms best feasible costs to move goods. From sea freighters and trucking companies, to air frieghters and ocean liners, our array of alliance is the most economical route that balances speed, cost and trustworthiness.  
        </p>
        <FreightServicesPromo/>
      </div>
      </>
    )
  }
export default About;