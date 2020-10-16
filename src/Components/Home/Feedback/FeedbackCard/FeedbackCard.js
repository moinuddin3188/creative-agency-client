import React from 'react';
import './FeedbackCard.css';

const FeedbackCard = (props) => {

    const {img, name, companyName, description} = props.feedback;

    return (
        <div className="col-lg-4 col-md-6 col-12 mt-4">
            <div className="feedback-card card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-auto pb-2 pr-0">
                            <img width="65px" src={img} alt="" />
                        </div>
                        <div className="col d-flex align-items-center">
                            <div>
                                <h5>{name}</h5>
                                <h6>{companyName}</h6>
                            </div>
                        </div>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default FeedbackCard;