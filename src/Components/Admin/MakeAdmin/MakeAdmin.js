import React from 'react';
import './MakeAdmin.css';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://tranquil-reaches-92319.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        console.log(data);
    }

    return (
        <div className='row make-admin'>
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h6 className="ml-4 mb-2 mt-3">Add Services</h6>
                <div className='make-admin-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-row">
                            <div class="form-group col-12 col-md-6">
                                <input type="email" name='email' class="form-control " placeholder="Email" ref={register({ required: true })} />
                                {errors.email && <span>Email is required</span>}
                            </div>
                            <div className='col-12 col-md-6'>
                                <button className="btn btn-success pl-3 pr-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;