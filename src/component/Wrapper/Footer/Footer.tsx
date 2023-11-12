import React from 'react';
import css from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={css.siteFooter}>
            <div className={css.footerContent}>
                <div className={css.footerSection}>
                    <h3>Контактна інформація</h3>
                    <p>Адреса: вул. Прикладна, Київ, 01001</p>
                    <p>Email: info@ngu.gov.ua</p>
                    <p>Телефон: +380 44 123 4567</p>
                </div>

                <div className={css.footerSection}>
                    <h3>Посилання</h3>
                    <ul>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/about">Про нас</a></li>
                        <li><a href="/services">Послуги</a></li>
                        <li><a href="/news">Новини</a></li>
                    </ul>
                </div>

                <div className={css.footerSection}>
                    <h3>Соціальні мережі</h3>
                    <ul>
                        <li><a href="https://www.facebook.com/ngu" target="_blank"
                               rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://twitter.com/ngu" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                        <li><a href="https://www.instagram.com/ngu" target="_blank"
                               rel="noopener noreferrer">Instagram</a></li>
                    </ul>
                </div>
            </div>

            <div className={css.footerBottom}>
                <p>&copy; 2023 Національна гвардія України. Усі права захищені.</p>
            </div>
        </footer>
    );
};

export default Footer;

