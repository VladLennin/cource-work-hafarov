import React, {useEffect, useState} from 'react';
import {News} from "../../model/types";
import $api from "../../http";
import css from "./AllNewsPage.module.css"
import Skeleton from "../../component/Skeleton/Skeleton";
import NewsCard from "../../component/NewsCard/NewsCard";
import Title from "../../component/Title/Title";

const AllNewsPage = () => {

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
            <Title value={"Новини 🇺🇦"}/>
            <div className={css.newsContainer}>
                {
                    isLoading ? <Skeleton/> : news.map(item => (
                        <NewsCard news={item}/>
                    ))
                }
            </div>

        </div>
    );
};

export default AllNewsPage;