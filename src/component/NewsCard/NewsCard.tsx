import React, {FC} from 'react';
import {News} from "../../model/types";
import css from "./NewsCard.module.css"
import ImageComponent from "../ImageComponent/ImageComponent";
import {formatDate} from "./lib/fotmatDate";
import {Link} from "react-router-dom";
import {RouterNames} from "../../router/RouterNames";

interface NewsProps {
    news: News;
    forEdit?: boolean;
}

const NewsCard: FC<NewsProps> = ({news, forEdit}) => {
    return (
        <Link to={forEdit ? `${RouterNames.EDIT_NEWS}/${news.id}` : `${RouterNames.NEWS}/${news.id}`}
              className={css.card}>
            <div className={css.date}>{formatDate(news.date)}</div>
            <ImageComponent src={news.images[0]}/>
            <div className={css.title}>{news.title}</div>
        </Link>
    );
};

export default NewsCard;