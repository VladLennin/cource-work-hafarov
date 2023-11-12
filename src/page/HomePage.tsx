import React, {useEffect, useState} from 'react';
import {News} from "../model/types";
import $api from "../http";

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

            {isLoading ? <div>Loading...</div> : news.map(item => (
                <div>
                    {item.images.map(img => (
                        <img src={img} alt=""/>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default HomePage;