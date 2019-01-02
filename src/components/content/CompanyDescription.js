import React from 'react';
class CompanyDescription extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <>
            <span className="underline-block">
                <h6 className="pt-5">WELCOME TO </h6>
                <h1 className="display-5 pt-1"> GSS Freight Forwarders </h1>
                <footer class="blockquote-footer">we value your business</footer>
                <span className="underline"></span>
                <p className="text-justify p-3">Our freight forwarding business always works closely with the customers to provide a best possible solution for their business needs which strives a great success for customers. whether you are a small or big firm, thinking of to export or import your goods anywhere in the world, no worry! we are here to provide dock to door freight forwarding services in an ease manner.
                we provide a full range of services including tracking inland transportation, preparation of shipping and export documents, warehousing, booking cargo space, negotiating freight charges, freight consolidation, cargo insurance, and filing of insurance claims.
                we have an established relationships with carriers, from air freighters and trucking companies, to rail freighters and ocean liners, giving the best possible price to move your goods along the most economical route by working out various bids and choosing the one that best balances speed, cost, and reliability.                
                </p>
            </span>
            </>
        )
    }
}

export default CompanyDescription;