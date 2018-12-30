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
                <h1 className="display-5 pt-1"> XXX Logistics </h1>
                <span className="underline"></span>
                <p className="lead text-justify p-3">Whether you are a small or big firm, thinking of to export or import your goods anywhere in the world. No Worry! We are here to provide dock to door services in an ease manner.
                We provide a full range of services including tracking inland transportation, preparation of shipping and export documents, warehousing, booking cargo space, negotiating freight charges, freight consolidation, cargo insurance, and filing of insurance claims.
                We have an extensive relationships with carriers, from air freighters and trucking companies, to rail freighters and ocean liners, giving the best possible price to move shippers goods along the most economical route by working out various bids and choosing the one that best balances speed, cost, and reliability.
                </p>
                {/* <hr className="my-4"/> */}
                {/* <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
            </span>
            <div className="jumbotron mb-0">
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
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 overflow-hidden">
                        <img src="air_ban_1280x960.jpeg" className="w-100 zoom" alt="Responsive image"/>
                    </div> 
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 class="text-center font-weight-light">Air Freight</h1>
                        <p className="lead">In order to provide competitive value added package service to both our clients & partners, we also provide DSR, trucking, warehousing, custom clearing and other door to door delivery related services.</p>
                        <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    </div>    
                </div>   
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 class="text-center font-weight-light">Land Freight</h1>
                        <p className="lead">In order to provide competitive value added package service to both our clients & partners, we also provide DSR, trucking, warehousing, custom clearing and other door to door delivery related services.</p>
                        <hr className="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p><span className="text-center">Content</span>
                    </div>  
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 overflow-hidden">
                        <img src="truck_ban_1280x960.jpeg" className="w-100 zoom" alt="Responsive image"/>
                    </div>   
                </div> 
                <div className="row pt-5">
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 overflow-hidden">
                        <img src="ship3_1280x960.jpeg" className="w-100 zoom" alt="Responsive image"/>
                    </div> 
                    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6">
                        <h1 class="text-center font-weight-light">Sea Freight</h1>
                        <p className="lead">We are providing expert international sea freight forwarding services to companies big & small worldwide. We are an integral part of our clients export/import departments, offering custom tailored ocean/sea freight logistics solutions for a wide variety of cargos.</p>
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
