import React, { useState } from 'react';
import s from './Header.module.css';
import iconOpenMenuOff from '../../assets/img/iconMenuOff.png';
import iconCloseMenuOff from '../../assets/img/iconCloseOff.png';
import iconOpenMenuOn from '../../assets/img/iconMenuOn.png';
import iconCloseMenuOn from '../../assets/img/iconCloseOn.png';

const Header = () => {

    let [isOpenMenu, toggleOpenMenu] = useState(false);
    let [openImg, setOpenImg] = useState(iconOpenMenuOff);
    let [closeImg, setCloseImg] = useState(iconCloseMenuOff);

    const openMenu = () => {
        toggleOpenMenu(true);
    }
    const closeMenu = () => {
        toggleOpenMenu(false);
    }

    return (
        <div className={s.main}>
            <div className={s.main__BoxLinks}>
                <div onClick={() => {openMenu()}} className={`${`${isOpenMenu ? s.BoxLinks__mobile_off : s.BoxLinks__mobile_on}`} ${s.BoxLinks__mobile}`}>
                    <img onMouseLeave={()=>{setOpenImg(iconOpenMenuOff)}} onMouseEnter={()=>{setOpenImg(iconOpenMenuOn)}} src={openImg} alt="M" />
                </div>
                <div onClick={() => {closeMenu()}} className={`${`${isOpenMenu ? s.BoxLinks__mobile_on : s.BoxLinks__mobile_off}`} ${s.BoxLinks__mobile}`}>
                    <img onMouseLeave={()=>{setCloseImg(iconCloseMenuOff)}} onMouseEnter={()=>{setCloseImg(iconCloseMenuOn)}} src={closeImg} alt="X" />
                </div>
                <div onClick={() => {closeMenu()}} className={`${isOpenMenu ? s.Links : s.Links_off}`}>
                    <div className={s.Links__element}>
                        <a href='#contacts'>Контакты</a>
                    </div>
                    <div className={s.Links__element}>
                        <a href='#examples'>Примеры визуализации</a>
                    </div>
                    <div className={s.Links__element}>
                        <a href='#aboutLaser'>О лазере</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;