import React from 'react';
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <>
            <div className="jumbotron jumbotron-fluid bg-dark text-white footer">
                <div className="row text-center">
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                     ABOUT US<span class="underline-block"><span class="underline underline-color"></span></span>
                     <p className="pl-5 pr-5 text-justify">Whether you are a small or big firm, thinking of to export or import your goods anywhere in the world. No Worry! We are here to provide dock to door services in an ease manner.</p>
                     <a class="mr-3"><i class="fab fa-facebook-f"></i></a>
                     <a class="mr-3"><i class="fab fa-twitter"></i></a>   
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 mb-3">
                    QUICK LINK<span class="underline-block"><span class="underline underline-color"></span></span>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item footer-link"><i class="fas fa-home mr-1"></i><a href="#" className="text-white">HOME</a></li>
                        <li class="list-group-item footer-link"><i class="fas fa-user mr-1"></i><a href="#" className="text-white">ABOUT US</a></li>
                        <li class="list-group-item footer-link"><i class="fab fa-servicestack mr-1"></i><a href="#" className="text-white">SERVICES</a></li>
                        <li class="list-group-item footer-link"><i class="fas fa-comment mr-1"></i><a href="#" className="text-white">CONTACT</a></li>
                    </ul>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4">
                    CONTACT US<span class="underline-block"><span class="underline underline-color"></span></span>
                    <ul class="list-group list-group-flush">
                    <li class="list-group-item footer-link"><span><i class="fas fa-phone mr-1"></i>Floor No.5 Address ,state pincode - 000000</span></li>
                        <li class="list-group-item footer-link"><span><i class="fas fa-phone mr-1"></i>9090909090</span></li>
                        <li class="list-group-item footer-link"><span><i class="fas fa-envelope mr-1"></i>xxlogistic@gmail.com</span></li>
                    </ul>
                    </div>
                </div>
                {/* <div className="p-5">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div> */}
            </div>
            </>
        )
    }
}
export default Footer;