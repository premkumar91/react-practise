import React from 'react'
function FreightServicesPromo(){
    return (
        <>
        <div className="row">
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                  <img src="flight1_576x324.jpeg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Air Freight</h5>
                    {/* <p className="card-text">We partner with the global air carriers to deliver the goods on time with competitive pricing.</p> */}
                    <p className="card-text">With round-the-clock operations, our Air- freight services, are solid and skillful. We guarantee prompt and cost effective delivery of your goods. Our accompliance with global airline pioneers, targets flat prices and deligent delivery of goods. Customer's delight is our motto.</p>
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                  <img src="truck1_576x324.jpeg" className="card-img-top" alt="..."/>
                  <div className="card-body">
                    <h5 className="card-title">Land Freight</h5>
                    {/* <p className="card-text">Our land freight services are smooth,fast and efficient solutions to your business needs.</p> */}
                    <p className="card-text">Road Freight Services is our main player that relies upon efficient and reliable services. 
                      Port to port, door to door, door to port or door services, any mode of services is done. Regardless of size, we value customer the most hence growing along with them is our growth.
                    </p>
                  </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <div className="card" className="w-100 shadow-sm p-3 mb-5 bg-white rounded">
                <img src="ship3_576x324.jpeg" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">Sea Freight</h5>
                  {/* <p className="card-text">Seamless and competive sea freight services from end to end.</p> */}
                  <p className="card-text">With multitude of global sea frieght services, we offer seamless logistics to small -scale to fortune companies. we are an intrinsic part of our customers import/export departments, offering flawless logistics solutions for enormous variety of cargos, ensuring fast transit time and full control over it. we have an elegant tracking system to keep your business on track.</p>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default FreightServicesPromo;