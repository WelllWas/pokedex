import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../pages/Home/Home";
import ManageTeams from "../../pages/ManageTeams/ManageTeams";

export function Router(){
    return(
        <BrowserRouter>
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/teams" element={<ManageTeams />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </Fragment>
        </BrowserRouter>
    )
}