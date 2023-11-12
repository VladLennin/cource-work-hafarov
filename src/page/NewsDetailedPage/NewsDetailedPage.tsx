import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {News} from "../../model/types";

const NewsDetailedPage = () => {

    const {id} = useParams()
    const [news, setNews] = useState<News>({} as News)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getNews = () =>{

    }

    return (
        <div>
            
        </div>
    );
};

export default NewsDetailedPage;