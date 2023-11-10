import React from "react";
import logo from '../assests/images/logo.svg'
import playstore from '../assests/images/app-store - Copy.jpg'
import playstore2 from '../assests/images/google-play - Copy.jpg'
import paymentmethod  from '../assests/images/payment-method - Copy.png'

function Footerlogosectionn() {
    return (
        <>
            <div className="footerlogosection">
                <div className="logo">
                    <a href="logo"> <img src={logo} alt="logo" /> </a>
                </div>
                <h1>Awesome grocery store website template</h1>

                <a href="https://www.google.com/maps/place/Jaipur,+Rajasthan/@26.8851417,75.6504723,11z/data=!3m1!4b1!4m5!3m4!1s0x396c4adf4c57e281:0xce1c63a0cf22e09!8m2!3d26.9124336!4d75.7872709"><i class="fa-solid fa-location-dot"></i>Adress:</a><span><h3 className="import">5171 W Campbell Ave undefined Kent, United States</h3></span>
                <a href="Tel:8053088725"><i class="fa-solid fa-headphones"></i>Call us:</a><span><h3>(+91) - 540-025-124553</h3></span>
                <a href="mailto:kumarnirmal52106@gmail.com"><i class="fa-solid fa-paper-plane"></i>Email:</a><span><h3>dummysale@Nest.com</h3></span>
                <a href="hours"><i class="fa-solid fa-clock"></i>Hours:</a><span><h3>10:00 - 18:00, Mon - Sat</h3></span>
            
            </div>
        </>
    )
}

export { Footerlogosectionn }


function FuterContent(props) {
    return (
        <>
            <div className="footercontent">
                <h1>{props.contentheading}</h1>
                <ul>
                    <li><a href="content">{props.content1}</a></li>
                    <li><a href="content">{props.content2}</a></li>
                    <li><a href="content">{props.content3}</a></li>
                    <li><a href="content">{props.content4}</a></li>
                    <li><a href="content">{props.content5}</a></li>
                    <li><a href="content">{props.content6}</a></li>
                    <li><a href="content">{props.content7}</a></li>
                </ul>
            </div>
        </>
    )
}

export { FuterContent }



function Paymentmethod(){
    return(
        <>
        <div className="paymentmethod">
                    <h3>Install App</h3>
                    <h4>From app store $ google Play</h4>
                    <div className="playstoreimg">
                        <img src={ playstore} alt="playstore" />
                        <img src={ playstore2} alt="playstore" />
                    </div>
                    <h5>Secured payment gateway</h5>
                    <img src={paymentmethod} alt="payment"/>
                </div>
        
        </>
    )
}

export{Paymentmethod}