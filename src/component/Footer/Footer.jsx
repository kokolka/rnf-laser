import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <div className={s.main}>
            <div className={s.main__void}>

            </div>
            <div className={s.main__univer}>
                Институт и что-то ещё
            </div>
            <div className={s.main__dev}>
                <div className={s.dev__whoDev}>
                    Разработчик сайта: Балахонцев Кирилл
                </div>
            </div>
        </div>
    )
}

export default Footer;