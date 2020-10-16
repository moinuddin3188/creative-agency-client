import React from 'react';
import './Footer.css';
import { useForm } from "react-hook-form";

const Footer = () => {

    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h2 className="black">Let us handle your project professionally</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, natus.ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, natus.</p>
                    </div>
                    <div className="col-lg-6 col-12 mt-lg-0 mt-5">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="form-group">
                                <input type="text" name='email' class="form-control " placeholder="Your email*" ref={register({ required: true, pattern: /\S+@\S+\.\S+/ })} />
                                {errors.email && <span>First name is required</span>}
                            </div>
                            <div class="form-group">
                                <input type="text" name='name' class="form-control " placeholder="Your name / Company's name*" ref={register({ required: true })} />
                                {errors.name && <span>First name is required</span>}
                            </div>
                            <div class="form-group">
                            <textarea class="form-control" name="message" placeholder='Your message*' rows="11" ref={register({ required: true })} />
                                {errors.message && <span>First name is required</span>}
                            </div>
                            <button type="submit" className='send-btn'>Send</button>
                        </form>
                    </div>
                </div>
                <p className='copy-right m-0'>Copyright 2020 All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;