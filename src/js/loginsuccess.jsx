import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import '../css/Loginsuccess.css';
import Setting from './setting';

function Loginsuccess() {
    const [menuOpen, setMenuOpen] = useState(false);

    const userData = {
        name: "이현종",
        profileImage: "https://via.placeholder.com/150",
      };

    const handleMenuButtonClick = () => {
      setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
      };

  return (
    <div className="Menu">
      <button className="menu-button" onClick={handleMenuButtonClick}>
        <a>▷</a>
      </button>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className='menu-list'>
            <li>
                <div>
              <div className='user-information'>
                <div className="user-info__avatar2">
                        <img src={userData.profileImage} alt="프로필 이미지" />
                    </div>
                <h3>{userData.name}님</h3>
                <h6 className='user-mypage'>MY PAGE</h6>
              </div>
              </div>
            </li>
        </ul>
        <div className='login-setting'>
            <span><Link to ="../setting">설정</Link></span>
          </div>
        <button className="menu-close" onClick={handleMenuClose}>
          <a>◁</a>
        </button>    
      </div>
          <Routes>
            <Route exact path="../setting" component={Setting}></Route>
          </Routes>
    </div>
  );
}

export default Loginsuccess;