import React from "react";
import SideBar from "./SideBar";
import {Routes,Route} from "react-router-dom";
import YourNotes from "./YourNotes";
import CreateNote from "./CreateNote";

function Dashboard(){

    return(
        <div>
            <SideBar/>
            {/* <Routes>
            <Route path="/YourNotes" element={<YourNotes/>}/>
            <Route path="CreateNote" element={<CreateNote/>}/>
            </Routes> */}

        </div>
    )
}

export default Dashboard;