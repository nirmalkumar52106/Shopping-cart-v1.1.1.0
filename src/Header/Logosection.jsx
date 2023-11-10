import React from "react";
import { Dropdown } from "react-bootstrap";
import 'react-bootstrap'
import { Link } from "react-router-dom";
// import { useCart } from "react-use-cart";
// import { Bringnature2Data } from "../Data";
import { PopularData } from "../Data"



function Logo(props) {

    return (
        <>
            <div className="logosectionmain">
                <div className="logo">
                    <a href="home"> <img src={props.logoimg} alt="logo" /></a>
                </div>

                <div className="searchbar">
                    <form>
                        <h4>{props.heading1}</h4>
                        <span className="downicn"><i class="fa-solid fa-angle-down"></i></span>
                        <span className="text-search"> <input  
      type="text" placeholder=" Search for items...." name="search"  /> </span>
                        <button typeof="submit" className="srchicn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>


            </div>
        </>
    )
}

export { Logo }


function Cartsection(props) {


    return (
        <>

            <div className="cartsectionmain">
                <div className="cartmainin">
                    <Link to={props.cartlink}><span href="javascript:void(0)">{props.icon}</span>
                        <h6>{props.iconheading}</h6></Link>

                </div>
            </div>
        </>
    )
}

export { Cartsection }


//Account logout
function AccountLoGOUT() {
    return (
        <>

            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    <a href="javascript:void(0)"><i class="fa-solid fa-user"></i></a>
                    <h6>Account</h6>

                </Dropdown.Toggle>

                <Dropdown.Menu className="display-Dropdown">
                    <Dropdown.Item className="display-dropdownItem" href="#/action-1"><ul>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                <li>Nirmalkumar@gmail.com</li>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="display-Dropdown2">
                                <Dropdown.Item className="display-dropdownItem" href="#/action-1">
                                    <ul>

                                        <Link to="/"><li className="logout"><span><i class="fa-solid fa-right-to-bracket"></i></span>Logout</li></Link>
                                    </ul>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>

                    </ul></Dropdown.Item>

                </Dropdown.Menu>
            </Dropdown>



        </>
    )
}

export { AccountLoGOUT }