import React from 'react';
import s from './AboutLaser.module.css';

const AboutLaser = () => {
    return (
        <div className={s.main}>
            <div className={`${s.main__content} ${s.main__content_shadow}`}>
                <div className={s.content__name}>
                    О лазере
                </div>
                <div className={s.content__info}>
                    <div className={s.info__img}>
                        <img src='https://tyumen.restobar.ru/upload/iblock/b83/cc9ky1aezwgygvzdr3pjy4qgez6o33k5.jpg' />
                    </div>
                    <div className={s.info__text}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et.</p>
                    </div>
                </div>
                <div className={`${s.content__info} ${s.content__info_revers}`}>
                    <div className={s.info__img}>
                        <img src='https://tyumen.restobar.ru/upload/iblock/b83/cc9ky1aezwgygvzdr3pjy4qgez6o33k5.jpg' />
                    </div>
                    <div className={s.info__text}>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet enim facere quod voluptatum fuga illo quos nisi iste corporis dolores doloremque dolore odio numquam perspiciatis delectus, at obcaecati id et.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutLaser;