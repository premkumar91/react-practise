import React from 'react';
import About from '../about/About'
import FreightServicesPromo from '../content/FreightServicesPromo'
class FreightForwarding extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <div className="jumbotron mb-0">
                <h1 className="display-4 text-center mb-2">Our Freight Forwarding Services</h1>
                {/* <p className="lead mb-5 mt-5 text-justify">Our freight forwarding services are built for any size of firms. we strive hard to make our customers happy by understanding their needs and deliver the best solutions. From ocean shipments to airfreight and inland transportation, our established carrier network ensure complete safety, fast transit times and hassle free shipment to destination.</p> */}
                <p className="lead mb-5 mt-5 text-justify">
                    Our freight forwarding business always work closely with customers to provide finest solution for their business needs. We strive for customer's prosperity. Thinking of import/export goods across the globe, we deliver with ease dock to door.
                    Our affiliation with world class carriers, affirms best feasible costs to move goods. From sea freighters and trucking companies, to air frieghters and ocean liners, our array of alliance is the most economical route that balances speed, cost and trustworthiness.  
                </p>
                <FreightServicesPromo/>
            </div>
            </>
        )
    }
}
export default FreightForwarding;