import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {News} from "../../model/types";
import $api from "../../http";
import Skeleton from "../../component/Skeleton/Skeleton";
import Title from "../../component/Title/Title";
import Carousel from "react-multi-carousel";
import ImageComponent from "../../component/ImageComponent/ImageComponent";
import css from "./NewsDetailedPage.module.css"
import {formatDate} from "../../component/NewsCard/lib/fotmatDate";

const NewsDetailedPage = () => {

    const {id} = useParams()
    const [news, setNews] = useState<News>({} as News)
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const getNews = () => {
        $api.get(`/news/${id}`).then(res => {
            setNews(res.data)
        }).then(() => {
            setIsLoading(false)
        }).catch(e => {
            console.log(e)
        })
    }

    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 3
        },
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
        <>
            {isLoading ? <Skeleton/> :
                <>
                    <div className={css.date}>
                        {formatDate(news.date)}
                    </div>
                    <Title value={news.title}/>
                    <div className={css.carouselContainer}>
                        <Carousel responsive={responsive}>
                            {news.images.map(img => (
                                <div style={{margin: "0 20px"}}>
                                    <ImageComponent src={img}/>
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <div className={css.contentContainer}>
                        {news.content.map(item => (
                            <div>
                                {item}
                            </div>
                        ))}
                    </div>


                </>
            }

        </>
    );
};

export default NewsDetailedPage;