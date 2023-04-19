import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import '../css/Menu.css';
import Login from '../js/login';
import SignUp from '../js/signup';
import MyPage from '../js/mypage';
import Team from '../js/team';
import Setting from './setting';
import PersonIcon from '../js/Personicon';

function Menu() {
    const [menuOpen, setMenuOpen] = useState(false);

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
            <div className='Icon'>
              <PersonIcon />
              </div>
              <span className="login-text">
                  로그인이 필요합니다.
              </span>
            </li>
          <li>
            <span className="login-link"><Link to="./login">로그인하러가기 ▶</Link></span></li>
        </ul>
        <div className='login-setting'>
            <span><Link to ="../setting">설정</Link></span>
          </div>
        <button className="menu-close" onClick={handleMenuClose}>
          <a>◁</a>
        </button>    
      </div>
          <Routes>
            <Route exact path="../team" component={Team}></Route>
            <Route exact path="../setting" component={Setting}></Route>
          </Routes>
    </div>
  );
}

export default Menu;