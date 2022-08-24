import React from 'react';
import s from './Contacts.module.css';

const Contacts = () => {
    return (
        <div className={s.main}>
            <div className={s.main__content}>
                <div className={s.content__name}>
                    Контакты
                </div>
                <div className={s.content__info}>
                    <div className={s.info__text}>
                        <p>Телефон: +7(777)777-77-77</p>
                    </div>
                    <div className={s.info__text}>
                        <p>email: email@email.com</p>
                    </div>
                    {/* <div className={s.info__img}>
                        <img src='https://tyumen.restobar.ru/upload/iblock/b83/cc9ky1aezwgygvzdr3pjy4qgez6o33k5.jpg' />
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Contacts;