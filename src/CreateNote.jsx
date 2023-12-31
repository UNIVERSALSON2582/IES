import React,{useEffect} from "react";
import { useState } from "react";
import Sidebar from "./SideBar";
import Button from "./Button";
import Input from "./Input";
import axios from 'axios';
import Acknw from "./Acknw";

function CreateNote() {
    const [file, setFile] = useState(null); // Initialize file as null
    const currentDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');

    const [upload, setUpload] = useState({
        file_name: "",
        file_description: "",
        file_type: "pdf",
        file_uploader: "me",
        file_uploaded_on: currentDate,
        file_uploaded_to: "CS",
        file: null, // Initialize file as null
        status: "approved"
    });

    const [show, setShow]= useState(false);
    console.log(upload);

    const handleFileChange = (event) => {
        const uploadedFile = event.target.files[0];
        setFile(uploadedFile);
    }

    const handleChange = (e) => {
        setUpload((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const uploadFile = async (req, res) => {
        const formData = new FormData();
        formData.append("file", file);
        console.log(formData, "yes");
        axios.post('http://localhost:8800/uploadNote', formData).then(
            res => { }
        ).catch(
            er => console.log(er)
        )
    }

    const handleClick = async (e) => {
        e.preventDefault();
        const currentDate = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
        setUpload((prev) => ({ ...prev, file_uploaded_on: currentDate, file: file }));
    
        try {
            const formData = new FormData();
            formData.append("file_name", upload.file_name);
            formData.append("file_description", upload.file_description);
            formData.append("file_type", upload.file_type);
            formData.append("file_uploader", upload.file_uploader);
            formData.append("file_uploaded_on", upload.file_uploaded_on);
            formData.append("file_uploaded_to", upload.file_uploaded_to);
            formData.append("file", file.name); // Append the entire file object
            formData.append("status", upload.status);

            let data={};

            // Display form data for debugging
            for (var pair of formData.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
                const key=pair[0];
                const value=pair[1];
                data={...data,[key]:value};
                
            }

            console.log("data",JSON.stringify(data));
            // data=JSON.stringify(data);
            
            
            // Send the FormData object directly in the request
            await axios.post("http://localhost:8800/uploads", data);
            uploadFile();

            setShow(true);
            
            setTimeout(()=>{
                setShow(false);
            },3000);
        } catch (err) {
            console.log(err);
        }
    };
        return (
        <div className="flex gap-2">
            <Sidebar />

            <div className="flex flex-col h-screen">
                <h1 className="text-3xl">Create Note</h1>
                <label className="text-xl" htmlFor="subject">Subject</label>
                <Input onChange={handleChange} placeholder="Subject" name="file_name" type="text" />
                <label className="text-xl" htmlFor="desc">Description</label>
                <Input onChange={handleChange} placeholder="Description" name="file_description" type="text" />
                <label className="text-xl" htmlFor="PdfFile">Upload Notes</label>
                <Input name="type" className="px-4 py-2 border border-gray-400 hover:border-yellow font-mono" onChange={handleFileChange} accept=".pdf" type="file" id="pdfFile" />
                <Button onClick={handleClick}>Submit</Button>
                {show && <Acknw/>}
            </div>
        </div>
    )
}

export default CreateNote;
