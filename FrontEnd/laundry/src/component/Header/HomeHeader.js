import React from 'react';
import './HomeStyle.css';
export default function HomeHeader(){
    return <div>
        <header>
            <nav id='page-nav'>
                <div className="left-cont">
                    <h2>Laundry</h2>
                </div>
                <div className='right-cont'>
                    <button className='btn-home'>Home</button>
                    <button className='btn-home'>Pricing</button>
                    <button className='btn-home'>Career</button>
                    <button className='btn-home'>Sign In</button>
                </div>
            </nav>
        </header>
    </div>
}









