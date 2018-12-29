import React from 'react';
class ServicesPromoContent extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <span className="underline-block">
                <h6 className="pt-5">WELCOME TO </h6>
                <h1 className="pt-1"> XXX Logistics </h1>
                <span className="underline"></span>
            </span>
            <div className="jumbotron">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        {/* <div className="card" className="w-100">
                            <img src="flight_320x180.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                        <img src="promo_1280x960.jpg" className="w-100" alt="Responsive image"/>
                        <span className="card-bottom-caption">
                            <i className="fa fa-plane" aria-hidden="true"></i>
                            <span className="pl-1 font-weight-bold">GROUND DELIVERY</span>
                        </span>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        <img src="promo3_1280x960.jpeg" className="w-100" alt="Responsive image"/>
                        <span className="card-bottom-caption">
                            <i className="fa fa-ship" aria-hidden="true"></i>
                            <span className="pl-1 font-weight-bold">AIR DELIVERY</span>
                        </span>
                        {/* <div className="card" className="w-100">
                            <img src="flight_320x180.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                        {/* <div className="card" className="w-100">
                            <img src="flight_320x180.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div> */}
                        <img src="promo1_1280x960.jpeg" className="w-100" alt="Responsive image"/>
                        <span className="card-bottom-caption">
                            <i className="fa fa-truck" aria-hidden="true"></i>
                            <span className="pl-1 font-weight-bold">SEA DELIVERY</span>
                        </span>
                    </div>
                </div>
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src="air_ban_1280x960.jpeg" className="w-100" alt="Responsive image"/>
                    </div> 
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 className="display-4 text-center">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>    
                </div>   
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 className="display-4 text-center">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p><span className="text-center">Content</span>
                    </div>  
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src="truck_ban_1280x960.jpeg" className="w-100" alt="Responsive image"/>
                    </div>   
                </div> 
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <img src="promo_1280x960.jpg" className="w-100" alt="Responsive image"/>
                    </div> 
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 className="display-4 text-center">Hello, world!</h1>
                        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                        <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>    
                </div>   
            </div>            
            </>
        )
    }
}

export default ServicesPromoContent
