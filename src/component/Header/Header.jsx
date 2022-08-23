import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <div className={s.main}>
            <div>

            </div>
            <div className={s.main__BoxLinks}>
                <div className={s.BoxLinks__element}>
                    <a href='#contacts'>Контакты</a>
                </div>
                <div className={s.BoxLinks__element}>
                    <a href='#examples'>Примеры визуализации</a>
                </div>
                <div className={s.BoxLinks__element}>
                    <a href='#aboutLaser'>О лазере</a>
                </div>
            </div>
        </div>
    )
}

export default Header;