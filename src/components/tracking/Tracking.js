import React from 'react'
function Tracking(){
    return (
        <>
        <div  className="jumbotron mb-0">
            <h1  className="display-4 text-center"><i  className="fas fa-map-marker-alt mr-2"></i>Track your cargo</h1>
            <p  className="lead text-center">Check your business is on track</p>
            <hr  className="my-4"/>
            <p  className="text-center">
                <a  className="btn btn-primary btn-lg" href="https://www.track-trace.com/container" role="button" target="_blank"><i  className="fa fa-ship mr-1" aria-hidden="true"></i>Sea Cargo Tracking</a>
            </p> 
            <p  className="text-center">
                <a  className="btn btn-primary btn-lg" href="https://aaiclas-ecom.org/ImportCargoTrackingNew.aspx" role="button" target="_blank"><i  className="fa fa-plane mr-1" aria-hidden="true"></i>Air Cargo Tracking</a>
            </p> 
        </div>
        </>
    )
}
export default Tracking;