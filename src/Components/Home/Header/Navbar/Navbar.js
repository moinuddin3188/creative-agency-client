import React, { useContext, useState } from 'react';
import './Navbar.css';
import { Link, useHistory } from 'react-router-dom';
import { UserContext } from '../../../../App';

const Navbar = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);

    const history = useHistory()
    const goHome = () => {
        history.push('/');
    }

    const admin = userInfo.admins.filter(admin => admin.email === userInfo.email);

    return (
        <nav class="navbar navbar-expand-lg navbar-light pl-0 pr-0 pt-3">
            <img onClick={() => goHome} style={{cursor: 'pointer', width:"130px"}} src="https://i.imgur.com/4BktyDR.png" alt=""/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active mr-5">
                        <a onClick={() => goHome} class="nav-link">Home</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our Portfolio</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Our teem</a>
                    </li>
                    <li class="nav-item mr-5">
                        <a class="nav-link" href="#">Contact us</a>
                    </li>
                    {
                        userInfo.email ?
                        <li  class="nav-item mr-5">
                            <a class="nav-link" href="#">{userInfo.name} </a>
                        </li>
                        :
                        <Link class="nav-item" to='/login'>
                            <button class='login-btn'>Login</button>
                        </Link>
                    }
                    {
                        admin.length > 0 &&
                        <Link to='/servicesList'>
                            <button class='login-btn'>Admin</button>
                        </Link>
                    }
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;