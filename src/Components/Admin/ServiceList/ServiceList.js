import React from 'react';
import './ServiceList.css';
import Sidebar from '../../Admin/Sidebar/Sidebar';
import { useState } from 'react';
import { useEffect } from 'react';

const ServiceList = () => {

    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        fetch('https://tranquil-reaches-92319.herokuapp.com/servicesList')
            .then(res => res.json())
            .then(data => setServicesList(data))
    }, [servicesList])

    return (
        <div className='service-list row'>
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h6 className="ml-4 mb-2 mt-3">Services List</h6>
                <div className='all-services-list'>
                    <div className="table-container">
                        {
                            servicesList.length === 0 ?
                                <div className="text-center">
                                    <img width="50px" className='mt-4' src="https://i.imgur.com/HMgSowb.gif" alt="" />
                                </div>
                                :
                                <table>
                                    <tr>
                                        <th className='rounded-left'>Name</th>
                                        <th>Email</th>
                                        <th>Service</th>
                                        <th>Project Details</th>
                                        <th className='rounded-right'>Status</th>
                                    </tr>
                                    {
                                        servicesList.map((service =>
                                            <tr>
                                                <td>{service.name}</td>
                                                <td>{service.email}</td>
                                                <td>{service.category}</td>
                                                <td>{service.details}</td>
                                                <td>
                                                    <select style={{ color: service.color }}>
                                                        <option value="Pending" selected>Pending</option>
                                                        <option value="On going">On going</option>
                                                        <option value="Done">Done</option>
                                                    </select>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </table>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceList;