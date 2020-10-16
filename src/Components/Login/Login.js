import React, { useContext } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../Firebase/Firebase.config';
import { UserContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);


const Login = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()

    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleLogin = () => {
        firebase.auth().signInWithPopup(provider)
        .then(function(result) {
            var user = result.user;
            setUserInfo({...userInfo, email: user.email, name: user.displayName, photo: user.photoURL})
            history.replace(from);
          })
          
          .catch(function(error) {
            var errorMessage = error.message;
          });
    }

    return (
        <div className='d-flex justify-content-center'>
            <div className='mt-5 text-center'>
                <Link to='/'>
                    <img width='120px' src="https://i.imgur.com/4BktyDR.png" alt="" />
                </Link>
                <div className="login">
                    <h5>Login with</h5>
                    <button onClick={handleLogin} className='text-left p-2'>
                        <FontAwesomeIcon style={{marginRight: '100px', color: 'red', fontSize: '20px'}} icon={faGoogle} />
                        <span>Google</span>
                    </button>
                    <p>Don't have a account? <span onClick={handleLogin}>Create an account</span> </p>
                </div>
            </div>
        </div>
    );
};

export default Login;