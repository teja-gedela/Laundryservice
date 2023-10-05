import React from "react";
// import HomeHeader from "../../Header/HomeHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger, faHouse, faPlus } from '@fortawesome/free-solid-svg-icons'
import UserHeader from "../../login/UserHeader";
import "./createorder.css"
export default function CreateOrder(){
    return <div>
        <UserHeader/>
        <div className="order-cont">
                <div className="side-bar">
                    <div className="icons">
                        {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                        <FontAwesomeIcon icon={faHouse} />
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faPlus} />
                    </div>
                    <div className="icons">
                        <FontAwesomeIcon icon={faBurger}/>
                    </div>
                </div>
                <div className="order-section">
                    <div>
                        <h5>Orders | 0</h5>
                        <input type="text" placeholder=""/>
                    </div>

                </div>
            </div>
</div>
}



    
