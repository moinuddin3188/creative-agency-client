import React, { useState } from 'react';
import { useEffect } from 'react';
import './Feedback.css';
import FeedbackCard from './FeedbackCard/FeedbackCard';

const Feedback = () => {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-reaches-92319.herokuapp.com/feedback')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [feedback])

    return (
        <div className="container">
            <div className='feedback'>
                <h2 className='text-center'><span className='black'>Clients </span><span style={{ color: 'green' }}>Feedback</span></h2>
                <div className="row justify-content-center">
                    {
                        feedback.map((feedback, index) => <FeedbackCard key={index} feedback={feedback} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Feedback;