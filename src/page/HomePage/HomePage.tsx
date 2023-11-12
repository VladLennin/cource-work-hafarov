import React, {useEffect, useState} from 'react';
import {News} from "../../model/types";
import $api from "../../http";
import NewsCard from "../../component/NewsCard/NewsCard";
import css from "./HomePage.module.css"
const HomePage = () => {

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
        <div>
            <h1>
                Вітаємо на порталі новин Національної Гвардії України
            </h1>

            <div className={css.newsContainer}>
                {isLoading ? <div>Loading...</div> : news.map(item => (
                    <NewsCard news={item}/>
                ))}
            </div>

        </div>
    );
};

export default HomePage;