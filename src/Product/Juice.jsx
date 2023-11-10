import React from "react";
import imagebnner from '../assests/images/bannerjuice.png'


function Juice(props) {
    return (
        <>
            <div className="juicemain">
                <div className="juiceimage">
                    <img src={imagebnner} alt="bannerimg" />
                </div>
                <div className="bannertextsection">
                    <h4>organic</h4>
                    <h1>save 17% on <span>organic</span> juice</h1>
                </div>
            </div>
        </>
    )
}
export { Juice }