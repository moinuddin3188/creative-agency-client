import React from 'react';
import './HeaderMain.css';
import './HeaderMain.css';

const HeaderMain = () => {
    return (
        <div className="row header-main">
            <div className="col-12 col-lg-5 pr-lg-5 d-flex align-items-center">
                <div>
                    <h1>Let's Grow Your Brand To The Next Level</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, asperiores. Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                    <button>Hire us</button>
                </div>
            </div>
            <div className="col-12 col-lg-7 pl-lg-5 pb-2 pt-lg-0 pt-5">
                <img width='100%' src="https://i.imgur.com/Fj0Be0l.png" alt=""/>
            </div>
        </div>
    );
};

export default HeaderMain;