import React from 'react'
import CompanyDescription from '../content/CompanyDescription';
import Content from '../content/Content';
import FreightServicesPromo from '../content/FreightServicesPromo'
function About(){
    return (
      <>
      <Content/>
      <CompanyDescription/>
      <div className="jumbotron mb-0">
        <h1 class="display-4 text-center mb-2">Freight Forwarding Services</h1>
        <p class="lead text-center mb-5 mt-5">Our freight forwarding services are built for any size of firms. we strive hard to make our customers happy by understanding their needs and deliver the best solutions. From ocean shipments to airfreight and inland transportation, our established carrier network ensure complete safety, fast transit times and hassle free shipment to destination.</p>
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