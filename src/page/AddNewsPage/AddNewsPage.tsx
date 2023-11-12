import React, {useState} from 'react';
import {News} from "../../model/types";
import Title from "../../component/Title/Title";
import css from "./AddNewsPage.module.css"
const AddNewsPage = () => {

    const [news, setNews] = useState<News>({
        title: "",
        images: [""],
        content: [""],
        date: new Date()
    } as News)

    return (
        <div>
            <Title value={"Створення новини ✍️"}/>

              <div className={css.createNewsContainer}>
                  <div>
                      <span>Заголовок</span>
                      <input/>
                  </div>

                  <div>
                      <span>Заголовок</span>
                      <input/>
                  </div>
              </div>
        </div>
    );
};

export default AddNewsPage;