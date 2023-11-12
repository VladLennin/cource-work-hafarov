import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "./RouterNames";
import HomePage from "../page/HomePage/HomePage";
import NewsDetailedPage from "../page/NewsDetailedPage/NewsDetailedPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.NEWS+"/:id"} element={<NewsDetailedPage/>}/>
            <Route path={"*"} element={<HomePage/>}/>
        </Routes>
    );
};

export default AppRouter;