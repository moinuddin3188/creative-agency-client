import React from 'react';
import './Sponsors.css';

const Sponsors = () => {
    return (
        <div className="container-lg sponsor">
            <div className="row">
                <div className="col-2 p-lg-4 p-md-2 p-xs-1 offset-1 d-flex align-items-center">
                    <img className="img-fluid w-100" src="https://i.imgur.com/Ovv0Vmb.png" alt=""/>
                </div>
                <div className="col-2 p-lg-4 p-md-2 p-xs-1 d-flex align-items-center">
                    <img className="img-fluid w-100" src="https://i.imgur.com/4mYMuLk.png" alt=""/>
                </div>
                <div className="col-2 p-lg-5 -md-2 p-xs-1 d-flex align-items-center">
                    <img className="img-fluid w-100" src="https://i.imgur.com/rUfCkvT.png" alt=""/>
                </div>
                <div className="col-2 p-lg-4 p-md-2 p-xs-1 d-flex align-items-center">
                    <img className="img-fluid w-100" src="https://i.imgur.com/F5cLjs7.png" alt=""/>
                </div>
                <div className="col-2 p-lg-4 p-md-2 p-xs-1 d-flex align-items-center">
                    <img className="img-fluid w-100 mr-0" src="https://i.imgur.com/QSFWVMB.png" alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Sponsors;