import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import '../css/Loginsuccess.css';
import Setting from './setting';

function Loginsuccess() {
    const [menuOpen, setMenuOpen] = useState(false);

    const userData = {
        name: "이현종",
        profileImage: "https://avatars.githubusercontent.com/u/62270266?v=4?s=100",
      };

    const teamData = {
      teamname1 : "한이음 팀",
      teamname2 : "회사 프로젝트",
      teammind1 : "최종 최종본",
      teammind2 : "202030212 과제",
    };

    const handleMenuButtonClick = () => {
      setMenuOpen(!menuOpen);
    };

    const handleMenuClose = () => {
        setMenuOpen(false);
      };

  return (
    <div className="loginMenu">
      <button className="menu-button" onClick={handleMenuButtonClick}>
        <a>▷</a>
      </button>
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
        <ul className='loginmenu-list'>
            <li>
                <div>
              <div className='user-information'>
                <div className="user-info__avatar2">
                        <img src={userData.profileImage} alt="프로필 이미지" />
                    </div>
                <h3>{userData.name}님</h3>
                <a href="../mypage">
                  <h6 className='user-mypage'>MY PAGE</h6>
                </a>
              </div>
              </div>
            </li>
            <li>
              <div className='user-team-list'>
                <h3 className='user-team-title'>TEAM</h3>
                <h4 className='team-data-name'>- {teamData.teamname1}</h4>
                <h4 className='team-data-name'>- {teamData.teamname2}</h4>
              </div>
              <div className='user-mind-list'>
                <h3 className='user-team-mind'>보유 마인드</h3>
                <h4 className='team-data-mind'>- {teamData.teammind1}</h4>
                <h4 className='team-data-mind'>- {teamData.teammind2}</h4>
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