import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faTaxi, faCommentDots, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className='col-4 col-lg-2 col-md-3 d-flex flex-column sidebar'>
            <div className='col pl-0'>
                <Link to='/'>
                    <img width='120px' class="mb-5" src="https://i.imgur.com/4BktyDR.png" alt=""/>
                </Link>
                <Link to='/placeOrder' class="text-decoration-none">
                    <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faCartPlus} />Order</p>
                </Link>
                <Link to='/orderStatus' class="text-decoration-none">
                    <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faTaxi} />Service List</p>
                </Link>
                <Link to='/review' class="text-decoration-none">
                    <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faCommentDots} />Review</p>
                </Link>
            </div>
            <div className='d-flex align-items-end pl-2'>
                <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faSignOutAlt} />Sign out</p>
            </div>
        </div>
    );
};

export default Sidebar;