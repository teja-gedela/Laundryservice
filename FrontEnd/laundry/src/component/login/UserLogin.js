import React from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import '../signup/UserSignUp.css';
import HomeHeader from "../Header/HomeHeader"
import { Link } from "react-router-dom";

export default function UserLogin() {
    return (
        <div className="home-page">
            <div>
                <HomeHeader />
            </div>
            <div className="home-cont">
                <div className="home-cont-reg">
                    <div className="home-left">
                        <h1 className="text">Laundry</h1>
                        <h1 className="text">Service</h1>
                        <p>Doorstep Wash & Dryclean Service</p>
                        <div>
                            <p>
                                Don't Have An Account?
                            </p>
                            {/* <button className="btn-reg text">Register</button> */}
                            <Link to='/register' ><span className="btn-reg text" >Create Account</span></Link>
                        </div>
                    </div>
                    <div className="home-right">
                        <h2 className="form-head">SignIn</h2>

                        <form onSubmit className="">
                            <div class="register">
                                <input type="text" placeholder="email/phone" />
                                {/* <input type="text" placeholder="State"/> */}
                                
                                <input type="password" placeholder="Password" />
                                <span >forgot password</span>
                            </div>
                            {/* <p className="forgot-pwd">forgot password?</p> */}
    
                            <div>
                                <button className="submit-sign-in">SignIn</button>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
            <div className="footer-1">
                <h5 className="text">Now Refer & Earn ₹500 for every referral*</h5>
                <p>* Terms and conditions will be applied</p>
            </div>
            <div className="footer-2">
            * Terms and conditions will be applied* Terms and conditions will be applied* Terms and conditions will be applied* Terms and conditions will be applied* Terms and conditions will be applied* Terms and conditions will be applied
            </div>
            
        </div>

    )
}
