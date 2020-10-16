import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTaxi, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className='col-4 col-lg-2 col-md-3 d-flex flex-column sidebar'>
            <div className='col pl-0'>
                <Link to='/'>
                    <img width='120px' class="mb-5" src="https://i.imgur.com/4BktyDR.png" alt=""/>
                </Link>
                <Link to='/servicesList' class="text-decoration-none">
                    <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faTaxi} />Service List</p>
                </Link>
                <Link to='/addServices' class="text-decoration-none">
                    <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faPlus} />Add Service</p>
                </Link>
                <Link to='/makeAdmin' class="text-decoration-none">
                    <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faUser} />Make Admin</p>
                </Link>
            </div>
            <div className='d-flex align-items-end pl-2'>
                <p className='pl-2'><FontAwesomeIcon className='mr-1' icon={faSignOutAlt} />Sign out</p>
            </div>
        </div>
    );
};

export default Sidebar;