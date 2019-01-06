import React from 'react';
class CompanyDescription extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <div className="jumbotron m-0 p-0 pl-1 pr-1">
                <span className="underline-block mb-0">
                    <h6 className="pt-5">WELCOME TO </h6>
                    <h1 className="display-5 pt-1"> GSS Freight Forwarders </h1>
                    <footer className="blockquote-footer">we value your business</footer>
                    <span className="underline"></span>
                    <div className="text-justify p-4">
                        <p>
                            Our freight forwarding business always work closely with customers to provide finest solution for their business needs. We strive for customer's prosperity. Thinking of import/export goods across the globe, we deliver with ease dock to door.                 
                        </p>
                        <p className="m-0">
                            Our service spectrum has it all. Naming a few...
                        </p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Tracking inland transportation</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Preparation of shipping and export documents</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Warehousing</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Booking cargo space</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Negotiating freight charges</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Freight consolidation</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Cargo insurance</li>
                            <li className="list-group-item list-item-unset"><i className="fa fa-check" aria-hidden="true"></i>Filing of insurance claims </li>
                        </ul>
                        <p className="mt-2">
                            Our affiliation with world class carriers, affirms best feasible costs to move goods. From air frieghters and trucking companies, to rail frieghters and ocean liners, our array of alliance is the most economical route that balances speed, cost and trustworthiness. 
                        </p>
                    </div>    
                </span>
            </div>    
            
            </>
        )
    }
}

export default CompanyDescription;