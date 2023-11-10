import React from "react";
import logo from './assests/images/logo.svg'
import erorimg from './assests//images/meditation.png'
import { Link } from "react-router-dom";


function Error404() {
    return (
        <>
            <div className="error">
                <div className="container">
                    <div className="logoSignup">
                        <div className="logomain">
                          <a href="/">  <img src={logo} alt="logo" /> </a>
                        </div>
                        <div className="loginSignup">
                          <Link to="/">  <a className="Errorhomepage" href="#">Log in</a></Link>
                          <Link to="/home">  <a className="Errorhomepage" href="#">Home page</a> </Link>
                        </div>
                    </div>
                    <div className="errorMainimg">
                        <img src={erorimg} alt="errorimg" />
                    </div>
                    <div className="errorText">
                        <h1>Something's wrong here.</h1>
                        <p>This is a 404 error, which means you've clicked on a bad link or entered an invalid URL. </p>

                    </div>
                </div>
            </div>
        </>
    )
}
export { Error404 }