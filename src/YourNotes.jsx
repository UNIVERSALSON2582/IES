import React, { useEffect, useState } from 'react';
import Sidebar from './SideBar';
import axios from 'axios';
import { GrView } from "react-icons/gr";
import { RiDeleteBin6Fill } from "react-icons/ri";


function YourNotes() {
    const [notes, setNotes] = useState([]);
    console.log(notes);

    useEffect(() => {
        const getNotes = async () => {
            try {
                const res = await axios.get("http://localhost:8800/YourNotes");
                console.log(res);
                setNotes(res.data);
            } catch (err) {
                console.log(err);
            }
        }
        getNotes();
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8800/note/${id}`);
            setNotes((prevNotes) => prevNotes.filter((note) => note.file_id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='flex h-screen'>
            <Sidebar />
            <div className='mx-6 my-2'>
                <h1 className='font-bold text-4xl'>Your Notes</h1>

                <table className='mt-4'>
                    <thead>
                        <tr className='bg-orange-600 text-white text-center border border-green-400'>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Uploaded on</th>
                            <th>Status</th>
                            <th>View</th>
                            <th>Delete</th>
                        </tr>
                        {
                            notes.map((i) => {
                                return <tr className='font-bold text-center border border-green-400'>
                                    <td>{i.file_name}</td>
                                    <td>{i.file_description}</td>
                                    <td>{i.file_type}</td>
                                    <td>{i.file_uploaded_on}</td>
                                    <td>{i.status}</td>
                                    <td><GrView className='text-red-600' /></td>
                                    <td><button onClick={() => { handleDelete(i.file_id) }}><RiDeleteBin6Fill className='text-red-600' /></button></td>
                                </tr>
                            })
                        }
                    </thead>
                </table>
            </div>

        </div>
    )
}

export default YourNotes;