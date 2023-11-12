import React from 'react';
import {Route, Routes} from "react-router-dom";
import {RouterNames} from "./RouterNames";
import HomePage from "../page/HomePage/HomePage";
import NewsDetailedPage from "../page/NewsDetailedPage/NewsDetailedPage";
import AddNewsPage from "../page/AddNewsPage/AddNewsPage";
import EditNewsPage from "../page/EditNewsPage/EditNewsPage";
import AllNewsPage from "../page/AllNewsPage/AllNewsPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={RouterNames.HOME} element={<HomePage/>}/>
            <Route path={RouterNames.NEWS} element={<AllNewsPage/>}/>
            <Route path={RouterNames.ADD_NEWS} element={<AddNewsPage/>}/>
            <Route path={RouterNames.EDIT_NEWS} element={<EditNewsPage/>}/>
            <Route path={RouterNames.NEWS + "/:id"} element={<NewsDetailedPage/>}/>
            <Route path={"*"} element={<HomePage/>}/>
        </Routes>
    );
};

export default AppRouter;