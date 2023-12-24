import react from "react";
import {Route,Routes,BrowserRouter} from "react-router-dom"


export function Main(){
    return(
        <>
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/home" element={<home/>}/>
                <Route path="/home" element={<test/>}/>
            </Routes>
            </BrowserRouter>
        </div>
        </>
    )
}