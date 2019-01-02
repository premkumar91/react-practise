import React from 'react'
function FreightServicesPromo(){
    return (
        <>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                  <img src="flight1_576x324.jpeg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Air Freight</h5>
                    <p class="card-text">We partner with the global air carriers to deliver the goods on time with competitive pricing.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                  <img src="truck1_576x324.jpeg" class="card-img-top" alt="..."/>
                  <div class="card-body">
                    <h5 class="card-title">Land Freight</h5>
                    <p class="card-text">Our land freight services are smooth,fast and efficient solutions to your business needs.</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div class="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                <img src="ship3_576x324.jpeg" class="card-img-top" alt="..."/>
                <div class="card-body">
                  <h5 class="card-title">Sea Freight</h5>
                  <p class="card-text">Seamless and competive sea freight services from end to end.</p>
                  {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default FreightServicesPromo;