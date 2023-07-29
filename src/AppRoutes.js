import React from "react";
import{Routes,Route} from "react-router-dom"
import Details from "./ClassDetails";

function AppRoutes(){
    return(
        <Routes>
            <Route path="/ff/classes/:id" element={<Details/>}/>
        </Routes>
    )
}
export default AppRoutes