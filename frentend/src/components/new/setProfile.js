

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FileUploader } from "react-drag-drop-files";

import Button from './button';
import axios from 'axios';

const fileTypes = ["JPG", "PNG", "GIF"];

function SetProfile() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
        console.log(file);
    };

    const upload= async ()=>{

        const formData= new FormData();
        formData.append('image',file);

        try{

           const response= await axios.post('/api/upload',formData,{
            headers:{
                "Content-Type":'multipart/form-data'
            }
           })
           console.log(response);
           alert(response.data.message)
        //    if(response.status==200){

        //    }


        }
        catch(error){
            alert(error.response.data.message)
            console.log(error);
        }

    };


    return (
        <>
            {/* <h1>setprofile</h1> */}
            <div className="ncontainer">

                <div className="nwapper">
                    <div className="icon icon1" button>
                        <button type="button" className="icon">
                            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
                        </button>

                    </div>
                    <div>

                        <h2>Upload your profile picture</h2>
                        <span >select the picture to upload</span>
                        <form className="input-form">

                            <div className="input-field">
                                <FileUploader classes="file_selector" handleChange={handleChange} hoverTitle="Drop here" name="file" types={fileTypes} />
                                {/* <input type="file"  id="input-email"/> */}

                            </div>

                        </form>
                    </div>
                    <Button onClick={upload} >Submit</Button>
                    {/* <button type="button">upload</button> */}
                </div>
            </div>
        </>
    )

}

export default SetProfile