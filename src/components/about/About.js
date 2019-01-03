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
        <p class="text-center display-4 mt-2">WHAT WE DO</p>
        <span class="underline-block"><span class="underline"></span></span>
        <p className="text-justify p-3">GSS freight Forwarder always works closely with the customers to provide a best possible solution for their business needs which strives a great success for customers. whether you are a small or big firm, thinking of to export or import your goods anywhere in the world, no worry! we are here to provide dock to door freight forwarding services in an ease manner. we provide a full range of services including tracking inland transportation, preparation of shipping and export documents, warehousing, booking cargo space, negotiating freight charges, freight consolidation, cargo insurance, and filing of insurance claims. we have an established relationships with carriers, from air freighters and trucking companies, to rail freighters and ocean liners, giving the best possible price to move your goods along the most economical route by working out various bids and choosing the one that best balances speed, cost, and reliability.</p>
        <h1 class="display-4 text-center mb-2">Freight Forwarding Services</h1>
        <p class="lead mb-5 mt-5 text-justify">Our freight forwarding services are built for any size of firms. we strive hard to make our customers happy by understanding their needs and deliver the best solutions. From ocean shipments to airfreight and inland transportation, our established carrier network ensure complete safety, fast transit times and hassle free shipment to destination.</p>
          <FreightServicesPromo/>
          {/* <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                  <img src="flight1_576x324.jpeg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Air Freight</h5>
                    <p class="card-text">We partner with the global air carriers to deliver the goods on time with competitive pricing.</p>
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                  <img src="truck1_576x324.jpeg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Land Freight</h5>
                    <p class="card-text">Our land freight services are smooth,fast and efficient solutions to your business needs.</p>
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                <img src="ship3_576x324.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Sea Freight</h5>
                  <p class="card-text">Seamless and competive sea freight services from end to end.</p>
                </div>
              </div>
            </div>
          </div> */}
      </div>
      </>
    )
  }
export default About;