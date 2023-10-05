import React from "react";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import './UserSignUp.css';
import HomeHeader from "../Header/HomeHeader"
import { Link } from "react-router-dom";

export default function UserSignUp() {
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
                                Already Have An Account?
                            </p>
                            {/* <button className="btn-reg text">Sign In</button> */}
                            <Link to='/login' ><span  className="btn-reg text" >SignIN</span></Link>
                        </div>
                    </div>
                    <div className="home-right">
                        <h2 className="form-head">Register</h2>

                        <form onSubmit className="">
                            <div class="register">
                                <input type="text" placeholder="name" />
                                <input type="text" placeholder="email" />
                                <input type="text" placeholder="phone" />
                                {/* <input type="text" placeholder="State"/> */}
                                <select id="state" name="state" placeholder="State">
                                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                                    <option value="Assam">Assam</option>
                                    <option value="Bihar">Bihar</option>
                                    <option value="Chhattisgarh">Chhattisgarh</option>
                                </select>
                                <select id="district" name="district" placeholder="District">
                                    <option value="district1">District 1</option>
                                    <option value="district2">District 2</option>
                                    <option value="district3">District 3</option>
                                </select>
                                {/* <input type="" placeholder="District"/> */}
                                <input type="text" placeholder="Address" />
                                <input type="text" placeholder="pincode" />
                                <input type="password" placeholder="Password" />
                                <input type="password" placeholder="Confirm Password" />

                            </div>
                            {/* <p className="forgot-pwd">forgot password?</p> */}
                            <div>
                                <input className="checkbox-sty" type="checkbox" id="terms" />
                                <label htmlFor="terms">I agree to Terms & Condition receiving marketing and promotional materials</label>
                            </div>
                            <div>
                                <button className="submit-sign-in">Register</button>
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
