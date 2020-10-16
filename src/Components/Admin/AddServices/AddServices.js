import React, { useState } from 'react';
import './AddServices.css';
import Sidebar from '../Sidebar/Sidebar';


const AddServices = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newInfo = {...info};
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
        formData.append('title', info.title)
        formData.append('description', info.description)

        fetch('https://tranquil-reaches-92319.herokuapp.com/addService', {
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
        <div className="row add-services">
            <Sidebar />
            <div className="col-8 col-lg-10 col-md-9">
                <h6 className="ml-4 mb-2 mt-3">Add Services</h6>
                <div className='add-services-form'>
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div class="form-group col-12 col-md-6">
                                <input onBlur={handleBlur} type="text" name='title' class="form-control " placeholder="price*" />
                            </div>

                            <div class="form-group col-12 col-md-6">
                                <input onChange={handleFileChange} type="file" name="file" class="custom-file-input" id="validatedCustomFile" />
                                <label class="custom-file-label" for="validatedCustomFile">Upload file</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <textarea  onBlur={handleBlur} class="form-control" name="description" placeholder='Order Details*' rows="5" />
                        </div>
                        <div className='text-right'>
                            <button type="submit" className="btn btn-sm btn-success pl-3 pr-3">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServices;