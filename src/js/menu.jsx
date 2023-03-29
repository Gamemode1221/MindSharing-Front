import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import '../css/Menu.css';
import Login from '../js/login';
import SignUp from '../js/signup';
import MyPage from '../js/mypage';
import Team from '../js/team';
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
        <ul>
            <li>
            <div className="login-button">
                <PersonIcon />
                <span className="login-text">
                    <Link to="./login">로그인 하시오</Link>
                </span>
            </div></li>
          <li><Link to="./login">로그인</Link></li>
          <li><Link to="./signup">회원가입</Link></li>
          <li><Link to="./mypage">마이페이지</Link></li>
          <li><Link to="./team">팀</Link></li>
        </ul>
        <button className="menu-close" onClick={handleMenuClose}>
          <a>◁</a>
        </button>    
      </div>
          <Routes>
            <Route exact path="./login" component={Login}></Route>
            <Route exact path="./signup" component={SignUp}></Route>
            <Route exact path="./mypage" component={MyPage}></Route>
            <Route exact path="./team" component={Team}></Route>
          </Routes>
    </div>
  );
}

export default Menu;