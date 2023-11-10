import React from "react";

import { Route, Routes } from "react-router-dom";
 import './App.css'
import 'react-bootstrap'
import { Product } from "./screens/Product";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import { Loginpage } from "./screens/Registration/Loginpage";
import 'react-chatbot-kit/build/main.css';
import {Error404} from "./Error404";
import { ProductDetail } from "./productdetailComponent/ProductDetail";
import {  Account } from "./Homecomponents/Account";
import { Signup } from "./screens/Registration/Signup";
import { RegistrationForm } from "./screens/Registration/RegistrationForm";
import { ForgotPage } from "./screens/Registration/ResetPassword";
 import { Cart } from "./screens/Cart";
import { Erorr } from "./Homecomponents/Error404dummy";
import { Payment } from "./screens/Payment";


function App() {

  return (
    <>
  
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="/productdetail/:productId" element={<ProductDetail/>}/>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/registration" element={<RegistrationForm/>}/>
        <Route path="/Forgotpassword" element={<ForgotPage/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route excat path="*" element={<Error404/>}/>
          <Route excat path="/errordummy" element={<Erorr/>}/>
          <Route excat path="/payment" element={<Payment/>}/>
          
      </Routes>


    </>
  )
}

export { App } 