import React, {useEffect, useState} from 'react';
import css from "./EditNewsPage.module.css"
import Title from "../../component/Title/Title";
import Skeleton from "../../component/Skeleton/Skeleton";
import NewsCard from "../../component/NewsCard/NewsCard";
import {News} from "../../model/types";
import $api from "../../http";

const EditNewsPage = () => {

    const [news, setNews] = useState<News[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const getNews = () => {
        $api.get<News[]>("/news").then(res => {
            setNews(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }


    useEffect(() => {
        getNews()
    }, []);

    return (
        <div className={css.container}>
            <Title value={"Менеджмент Новин 🔧"}/>
            <div className={css.newsContainer}>
                {
                    isLoading ? <Skeleton/> : news.reverse().map(item => (
                        <NewsCard forEdit news={item}/>
                    ))
                }
            </div>

        </div>
    );
};

export default EditNewsPage;