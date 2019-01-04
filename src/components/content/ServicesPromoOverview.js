import React from 'react';
import CompanyDescription from './CompanyDescription'
class ServicesPromoContent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <CompanyDescription/>
            <div className="jumbotron mb-0">
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src="promo_1280x960.jpg" className="w-100" alt="Responsive image"/>
                        <span className="card-bottom-caption">
                            <i className="fa fa-truck" aria-hidden="true"></i>
                            <span className="pl-1 font-weight-bold">GROUND DELIVERY</span>
                        </span>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src="promo3_1280x960.jpeg" className="w-100" alt="Responsive image"/>
                        <span className="card-bottom-caption">
                            <i className="fa fa-plane" aria-hidden="true"></i>
                            <span className="pl-1 font-weight-bold">AIR DELIVERY</span>
                        </span>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                        <img src="promo1_1280x960.jpeg" className="w-100" alt="Responsive image"/>
                        <span className="card-bottom-caption">
                            
                            <i className="fa fa-ship" aria-hidden="true"></i>
                            <span className="pl-1 font-weight-bold">SEA DELIVERY</span>
                        </span>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 overflow-hidden">
                        <img src="air_ban_1280x960.jpeg" className="w-100 zoom" alt="Responsive image"/>
                    </div> 
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <h1 className="text-center font-weight-light">Air Freight</h1>
                        <p className="lead">With round-the-clock operations, our Air- freight services, are solid and skillful. We guarantee prompt and cost effective delivery of your goods. Our accompliance with global airline pioneers, targets flat prices and deligent delivery of goods. Customer's delight is our motto.</p>
                        <p className="mb-2 font-weight-bold ">Our Customised Services are</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>World wide consolidation services</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Cargo from warehouse to shipper</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Expediting/ Vendor management</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Export/Import clearance</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Documentation specialists</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Tracking system</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Safe handling of cargo</li>
                        </ul>
                    </div>    
                </div>   
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mb-2">
                        <h1 className="text-center font-weight-light">Land Freight</h1>
                        <p className="lead text-justify">
                            Road Freight Services is our main player that relies upon efficient and reliable services. 
                            Port to port, door to door, door to port or door services, any mode of services is done. Regardless of size, we value customer the most hence growing along with them is our growth.</p>
                        <p className="mb-2 font-weight-bold ">Our Customised Services are</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Door to Door services.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Port to Port services.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Port to Door services.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Door to Port services.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Customized transportation for your business needs.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Goods tracking systems.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Zero limitation to your size.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Reliable booking and pickup.</li>                            
                        </ul>
                    </div>  
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 overflow-hidden">
                        <img src="truck_ban_1280x960.jpeg" className="w-100 zoom" alt="Responsive image"/>
                    </div>   
                </div> 
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 overflow-hidden">
                        <img src="ship3_1280x960.jpeg" className="w-100 zoom" alt="Responsive image"/>
                    </div> 
                    <div className="col-sm-12 col-md-6 col-lg-6 col-xl-6 mt-2">
                        <h1 className="text-center font-weight-light">Sea Freight</h1>
                        <p className="lead text-justify">With multitude of global sea frieght services, we offer seamless logistics to small -scale to fortune companies. we are an intrinsic part of our customers import/export departments, offering flawless logistics solutions for enormous variety of cargos, ensuring fast transit time and full control over it. we have an elegant tracking system to keep your business on track.</p>
                        <p className="mb-2 font-weight-bold ">Our Customised Services are</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Flexible FCL/LCL load services.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Competitive ocean shipping from end to end.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Export/Import clearance.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Documentation specialists.</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Elegant tracking system.</li>
                        </ul>
                    </div>    
                </div>   
            </div>            
            </>
        )
    }
}

export default ServicesPromoContent
