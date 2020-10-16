import React, { useContext } from 'react';
import './Review.css';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';

const Review = () => {

    const [userInfo, setUserInfo] = useContext(UserContext);
    const { register, errors, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('https://tranquil-reaches-92319.herokuapp.com/giveFeedback', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({...data, img: userInfo.photo})
        })
        console.log(data);
    }

    return (
        <div className='order row'>
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h6 className="ml-4 mb-2 mt-3">Review</h6>
                <div className='review-form'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-group">
                            <input type="text" name='name' class="form-control " placeholder="Name*" ref={register({ required: true })} />
                            {errors.name && <span>Your name is required</span>}
                        </div>

                        <div class="form-group">
                            <input type="text" name='companyName' class="form-control " placeholder="Company's name, Designation*" ref={register({ required: true })} />
                            {errors.companyName && <span>Company's name is required</span>}
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" name="description" placeholder='Description*' rows="5" ref={register({ required: true })} />
                            {errors.description && <span>Your comment is required</span>}
                        </div>
                        <button type="submit" className="send-btn">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Review;