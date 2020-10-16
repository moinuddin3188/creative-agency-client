import React, { useState } from 'react';
import './PlaceOrder.css';
import Sidebar from '../Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../../App';

const PlaceOrder = () => {

    const [userInfo, setUserInfo] = useContext(UserContext)

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info}
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = e => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = e => {

        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name || userInfo.name)
        formData.append('email', info.email || userInfo.email)
        formData.append('category', info.category)
        formData.append('details', info.details)
        formData.append('price', info.price)
        formData.append('status', 'Pending')
        formData.append('color', 'red')
        formData.append('bg', '#ff10104f')

        fetch('https://tranquil-reaches-92319.herokuapp.com/placeOrder', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault();
    }

    return (
        <div className="row order">
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h6 className="ml-4 mb-2 mt-3">Orders</h6>
                <div className="place-order-form">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" name='name' class="form-control " placeholder="Your name / Company's name*" />
                        </div>

                        <div class="form-group">
                            <input onBlur={handleBlur} type="email" name='email' class="form-control" defaultValue={userInfo.email} placeholder="Your email*" />
                        </div>

                        <div class="form-group">
                            <input onBlur={handleBlur} type="text" name='category' class="form-control" placeholder="category*" />
                        </div>

                        <div class="form-group">
                            <textarea onBlur={handleBlur} class="form-control" name="details" placeholder='Order Details*' rows="5" />
                        </div>

                        <div className="form-row">
                            <div class="form-group col-12 col-md-6">
                                <input onBlur={handleBlur} type="text" name='price' class="form-control " placeholder="price*" />
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <input onChange={handleFileChange} type="file" name="file" class="custom-file-input" id="validatedCustomFile" />
                                <label class="custom-file-label" for="validatedCustomFile">Upload file</label>
                            </div>
                        </div>
                        <button type="submit" className="send-btn">Send</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default PlaceOrder;