import React from 'react';
import css from "./Header.module.css"
import logo from "../../../assets/logo.png"
import {Link} from "react-router-dom";
import {RouterNames} from "../../../router/RouterNames";

const Header = () => {
    return (
        <div className={css.container}>
            <div className={css.logoContainer}>
                <img className={css.logo} src={logo} alt=""/>
                <span className={css.title}>Національна гвардія України</span>
            </div>

            <div className={css.linksContainer}>
                <Link to={RouterNames.HOME}>Головна</Link>
                <Link to={RouterNames.NEWS}>Новини</Link>
                <Link to={RouterNames.ADD_NEWS}>Додати Новину</Link>
                <Link to={RouterNames.EDIT_NEWS}>Менеджмент новин</Link>
            </div>
        </div>
    );
};

export default Header;