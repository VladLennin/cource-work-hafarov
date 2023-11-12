import React, {useEffect, useState} from 'react';
import {News} from "../../model/types";
import $api from "../../http";
import NewsCard from "../../component/NewsCard/NewsCard";
import css from "./HomePage.module.css"
import Carousel from "react-multi-carousel";
import ImageComponent from "../../component/ImageComponent/ImageComponent";
import Title from "../../component/Title/Title";

const HomePage = () => {

    const [news, setNews] = useState<News[]>([])
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3
        },
    }

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
            <Title value={" Вітаємо на порталі новин Національної Гвардії України 🪖"}/>

            <Carousel responsive={responsive}>
                {news.slice(0, 10).map(item => (
                    <div style={{margin: "0 20px"}}>
                        <ImageComponent src={item.images[0]}/>
                    </div>
                ))}
            </Carousel>

            <div className={css.section}>
                <span className={css.subtitle}>Останні новини</span>
                <div className={css.newsContainer}>
                    {isLoading ? <div>Loading...</div> : news.slice(0,6).map(item => (
                        <NewsCard news={item}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomePage;