import React from 'react';
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
            <div className="jumbotron bg-dark text-white footer">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                     ABOUT US
                     <span className="underline-block">
                        <span className="underline underline-color"></span>
                     </span>
                     <p className="pl-5 pr-5 text-justify">Whether you are a small or big firm, thinking of to export or import your goods anywhere in the world. No Worry! We are here to provide dock to door services in an ease manner.</p>
                     <a className="mr-3 text-light" href="https://twitter.com/premjec91" target="_blank"><i className="fab fa-facebook-f"></i></a>
                     <a className="mr-3 text-light" href="https://twitter.com/premjec91" target="_blank"><i className="fab fa-twitter"></i></a>   
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                    QUICK LINKS
                    <span className="underline-block footer-mb">
                        <span className="underline underline-color"></span>
                    </span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item footer-link"><i className="fas fa-home mr-1"></i><a href="#" className="text-white">HOME</a></li>
                        <li className="list-group-item footer-link"><i className="fas fa-user mr-1"></i><a href="#" className="text-white">ABOUT US</a></li>
                        <li className="list-group-item footer-link"><i className="fab fa-servicestack mr-1"></i><a href="#" className="text-white">SERVICES</a></li>
                        <li className="list-group-item footer-link"><i className="fas fa-comment mr-1"></i><a href="#" className="text-white">CONTACT</a></li>
                    </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    CONTACT US<span className="underline-block"><span className="underline underline-color"></span></span>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item footer-link">
                            <span>
                                <i className="fas fa-map-marker-alt mr-1"></i>
                                Floor No.5 Address ,state pincode - 000000
                            </span>
                        </li>
                        <li className="list-group-item footer-link"><span><i className="fas fa-phone mr-1"></i>9090909090</span></li>
                        <li className="list-group-item footer-link"><span><i className="fas fa-envelope mr-1"></i>xxlogistic@gmail.com</span></li>
                    </ul>
                    </div>
                </div>
                <p className="text-center">&copy; 2019 GSS Freight Forwarders</p>               
            </div>
            </>
        )
    }
}
export default Footer;