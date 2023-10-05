import React from 'react';
import '../Header/HomeStyle.css';
export default function UserHeader(){
    return <div>
        <header>
            <nav id='page-nav'>
                <div className="left-cont">
                    <h2>Laundry</h2>
                </div>
                <div className='right-cont'>
                    <button className='btn-home'>Pricing</button>
                    <button className='btn-home'>Career</button>
                    <div><img src="fddd.jpg" alt='ok'/>Harika</div>
                </div>
            </nav>
        </header>
    </div>
}
