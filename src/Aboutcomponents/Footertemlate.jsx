import React from "react";
//  import myphoto from '../assests/images/20210216_223721.jpg'
import { Socialicon } from "../Heading/Socialicon";

function FooterTemplate() {
    return (
        <>
            <div className="footertemplatemain">
                <div className="bx1">
                    <h5>© 2022, <span>Nest</span> - HTML Ecommerce Template</h5>
                    <h6>Copyright All right reserved By  <span><a href="Tel:9518405826">Nirmal kumar</a></span></h6>
                    <h6>Designed and Developed By  <span><a href="Tel:8053088725">Nirmal kumar</a></span></h6>
                </div>
                <div className="bx2">
                    <div className="bx2inist">
                        <div className="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="text">
                            <h1>1800-666</h1>
                            <h2>working 8:00-22:00</h2>
                        </div>
                    </div>
                    <div className="bx2in2nd">
                        <div className="icon">
                            <i class="fa-solid fa-phone"></i>
                        </div>
                        <div className="text">
                            <h1>1800-888</h1>
                            <h2>Customer support 24/7</h2>
                        </div>
                    </div>
                </div>
                <div className="bx3">
                    <div className="bx3ist">
                        <h1>Follow us </h1>
                        <div className="footersocial">
                        <Socialicon />
                        </div>
                    </div>
                    <div className="bx32nd">
                        <h4>Upto 15% discount on your first subscription</h4>
                    </div>
                </div>
            </div>
        </>
    )
}

export { FooterTemplate }