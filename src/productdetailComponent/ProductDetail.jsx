import React from "react";
import { Link, useParams } from "react-router-dom"
import { PopularData } from "../Data"
import logo from '../assests/images/logo.svg'
import {AddToCart} from "../Homecomponents/productActions/AddToCart";


function ProductDetail() {
    
    const { productId } = useParams()
    const thisProduct = PopularData.find(prod => prod.id == productId)
    console.log(thisProduct)
    return (
        <>
            <div className="productDeatailmain">
                <div className="logoSignup">
                    <div className="logomain">
                        <a href="#">  <img src={logo} alt="logo" /> </a>
                    </div>
                    <div className="Link-home-Cart-section">
                        <Link to="/home">Click here for more Shopping</Link>
                        <i class="fa-solid fa-cart-shopping"></i>
                        
                    </div>
                </div>

                <main class="container-Productdetail">

                    <div class="left-column">
                        <img src={thisProduct.itemimage} alt="img" />
                    </div>

                    <div class="right-column">
                        <div class="product-description">
                            <span>{thisProduct.itemname}</span>
                            <h1>{thisProduct.snackname}</h1>
                            <p>Our product mostly preferred for health related problems and Healthy product are very most important for our health.So this
                                product is very healthy for us
                            </p>
                        </div>


                        <div class="product-configuration">
                            <div class="product-color">
                                <div className="select-box">
                                    <label for="Weight">Choose a weight Qauntity:</label>
                                    <select name="Weight" id="Weight">
                                        <option value="200gm">200gm</option>
                                        <option value="500gm">500gm</option>
                                        <option value="1kg">1kg</option>
                                        <option value="2.5kg">2.5kg</option>
                                    </select>
                                </div>

                                <span>Choose a color:</span>

                                <div class="color-choose">
                                    <div>
                                        <input data-image="red" type="radio" id="red" name="color" value="red" checked />
                                        <label for="red"><span></span></label>
                                    </div>
                                    <div>
                                        <input data-image="blue" type="radio" id="blue" name="color" value="blue" />
                                        <label for="blue"><span></span></label>
                                    </div>
                                    <div>
                                        <input data-image="black" type="radio" id="black" name="color" value="black" />
                                        <label for="black"><span></span></label>
                                    </div>
                                </div>

                            </div>


                            <div class="cable-config">
                                <span>Product configuration</span>

                                <div class="cable-choose">
                                    <button>Fresh</button>
                                    <button>Cold</button>
                                    <button>Long-coiled</button>
                                </div>

                                <a href="#">How to configurate your products</a>
                            </div>
                        </div>


                        <div class="product-price">
                            <span>${thisProduct.price}</span>
        
                            <AddToCart/>
                           
                            
                          
                        </div>
                    </div>
                </main>

            </div>

        </>
    )
}

export { ProductDetail }