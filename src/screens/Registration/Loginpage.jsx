import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function Loginpage() {

    const navigate = useNavigate();

    const Login = (e) => {

       toast.success("your id has been successfully login....")
       setTimeout(()=>{
navigate("/home")
       },3000)
    }

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
        
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }

    return (
        <>
            <div className="loginpagemain">
                <div className="loginpagein">
                    <ToastContainer position="top-center" />
                    <h1>Login</h1>
                    <h2>Don't have an account?<span><a href="#"><Link to="/registration">Create Account</Link></a></span></h2>
                    <div className="usernamebar">
                        <span className="usericon"><i class="fa-solid fa-user"></i></span> <input type="text" placeholder="enter username:" />
                        <span className="check"><i class="fa-solid fa-check"></i></span><br />
                    </div>
                    <div className="passwordbar">
                        <span className="lockicon"><i class="fa-solid fa-lock"></i></span>   <input type={passwordType} onChange={handlePasswordChange} value={passwordInput} name="password" class="form-control" placeholder="Password" />

                        <button className="btnnnnn" onClick={togglePassword}>
                            {passwordType === "password" ? <i className="fa-solid fa-eye-slash"></i> : <i class="fa-solid fa-eye"></i>}
                        </button>

                    </div>
                    <div className="forgot">
                        <Link to="/forgotpassword">Forgot your password?</Link>

                        <Link to="/signup">Sign up</Link>
                    </div><br />
                    <div className="btn">
                        <button onClick={Login} ><span className="btnicon"> <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        </span>Login</button>
                    </div>
                    <div className="loginwithsocail">
                        <h3>Login With</h3>
                        <div className="sociallogin">
                            <div className="facebook">
                                <a href="https://www.facebook.com/login" target="_blank"><i class="fa-brands fa-facebook"></i></a>

                            </div>
                            <div className="google">
                                <a href="https://www.google.com/signup" target="_blank"> <i class="fa-brands fa-google-plus-g"></i></a>

                            </div>
                            <div className="twitter">
                                <a href="https://www.twitter.com/signup" target="_blank">  <i class="fa-brands fa-twitter"></i></a>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export { Loginpage }