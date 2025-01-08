import { useState, useEffect } from 'react';
import '../css/Header.css';

const Header = () => {

    return (
        <>
            <div className='header'>
                <div className='headerLeft'>
                    <div className='logo'><img className='logoCon' src='icon/logo.png'/></div>
                    <div className='iconBox'><img className='icon' src='icon/home.png'/></div>
                    <div className='iconBox'><img className='icon' src='icon/add.png'/></div>
                </div>
                <div className='searchBar'>검색창</div>
                <div className='headerRight'>
                    <div className='iconBox'><img className='icon' src='icon/bell.png'/></div>
                    <div className='iconBox'><img className='icon' src='icon/typing.png'/></div>
                    <div className='iconBox'>프로필</div>
                    <div className='iconBox'><img className='icon' src='icon/down.png'/></div>
                </div>
            </div>
        </>
    )
}
export default Header;