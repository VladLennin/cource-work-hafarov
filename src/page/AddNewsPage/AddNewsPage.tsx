import React, {useState} from 'react';
import {News} from "../../model/types";
import Title from "../../component/Title/Title";
import css from "./AddNewsPage.module.css"
import $api from "../../http";
import Toast from "../../component/Toast/Toast";
import {useNavigate} from "react-router-dom";
import {RouterNames} from "../../router/RouterNames";

const AddNewsPage = () => {
    const [showToast, setShowToast] = useState(false);
    const navigate = useNavigate()
    const handleShowToast = () => {
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const [news, setNews] = useState<News>({
        title: "",
        images: [""],
        content: [""],
        date: new Date()
    } as News)

    const [rerenderToggle, setRerenderToggle] = useState(false);
    const forceRerender = () => {
        setRerenderToggle(prev => !prev);
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        $api.post("/news", news).then(() => {
            handleShowToast()
        }).then(()=>{
            navigate(RouterNames.NEWS)
        }).catch(e => {
            console.log(e)
        })
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <Title value={"Створення новини ✍️"}/>
                <div className={css.createNewsContainer}>
                    <div className={css.section}>
                        <span className={css.subtitle}>Заголовок</span>
                        <input required className={css.titleInput} onChange={e => {
                            setNews({...news, title: e.target.value})
                        }}/>
                    </div>

                    <div className={css.section}>
                        <div className={css.subtitle}>
                            <span>Зображення</span>
                            <span onClick={() => {
                                setNews({...news, images: [...news.images, ""]})
                            }}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                   className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                        </span>
                        </div>
                        <div className={css.imagesContainer}>
                            {news.images.map((item, index) => (
                                <div className={css.imageDiv}>
                                    {index + 1}. <input required className={css.textInput} value={item}
                                                        onChange={(e) => {
                                                            news.images[index] = e.target.value
                                                            setNews(news)
                                                            forceRerender()
                                                        }}/>
                                    <span onClick={() => {
                                        news.images = news.images.filter((item, index1) => index1 !== index)
                                        forceRerender()
                                    }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash" viewBox="0 0 16 16">
  <path
      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                            </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={css.section}>
                        <div className={css.subtitle}>
                            <span> Параграфи</span>
                            <span onClick={() => {
                                setNews({...news, content: [...news.content, ""]})
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg>
                        </span>
                        </div>

                        <div style={news.content.length < 2 ? {gridTemplateColumns: "1fr"} : {}}
                             className={css.contentContainer}>
                            {news.content.map((item, index) => (
                                <div className={css.contentDiv}>
                                    {index + 1}. <textarea required className={css.contentInput} value={item}
                                                           onChange={(e) => {
                                                               news.content[index] = e.target.value
                                                               setNews(news)
                                                               forceRerender()
                                                           }}/>
                                    <span onClick={() => {
                                        news.content = news.content.filter((item, index1) => index1 !== index)
                                        forceRerender()
                                    }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-trash" viewBox="0 0 16 16">
  <path
      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
  <path
      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
</svg>
                            </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={css.createBtnContainer}>
                        <button type={"submit"} className={css.createBtn}>Створити</button>
                    </div>

                </div>

            </div>
            <Toast message="Новина успішно додана" showToast={showToast} handleClose={() => setShowToast(false)}/>
        </form>
    );
};

export default AddNewsPage;