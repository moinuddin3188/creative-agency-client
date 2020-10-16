import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard/ServiceCard';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-reaches-92319.herokuapp.com/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [services])

    return (
        <div className='services container'>
            <h2 className='text-center mb-5'><span className='black'>Provide awesome</span> <span style={{color: 'green'}}>services</span></h2>
            <div className="row justify-content-center">
                {
                    services.map((service, index) => <ServiceCard key={index} service={service} />)
                }
            </div>
        </div>
    );
};

export default Services;