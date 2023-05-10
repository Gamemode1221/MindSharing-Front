import React, { useState } from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import '../css/Loginsuccess.css';
import Setting from './setting';

function Loginsuccess() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [teamList, setTeamList] = useState(['한이음 팀', '회사 프로젝트']);
  const [mindList, setMindList] = useState(['두이음 팀', '학교 프로젝트']);
  const [newTeamName, setNewTeamName] = useState('');
  const [newMindName, setNewMindName] = useState('');

  const userData = {
    name: "이현종",
    profileImage: "https://avatars.githubusercontent.com/u/62270266?v=4?s=100",
  };

  const handleMenuButtonClick = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  const handleNewTeamNameChange = (event) => {
    setNewTeamName(event.target.value);
  };

  const handleNewMindNameChange = (event) => {
    setNewMindName(event.target.value);
  };

  const handleAddTeamClick = () => {
    if (newTeamName !== '') {
      setTeamList([...teamList, newTeamName]);
      setNewTeamName('');
    }
  };

  const handleAddMindClick = () => {
    if (newMindName !== '') {
      setMindList([...mindList, newMindName]);
      setNewMindName('');
    }
  };

  const handleRemoveTeamClick = (index) => {
    const newList = [...teamList];
    newList.splice(index, 1);
    setTeamList(newList);
  };

  const handleRemoveMindClick = (index) => {
    const newList = [...mindList];
    newList.splice(index, 1);
    setMindList(newList);
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
              {teamList.map((teamName, index) => (
                <div key={index} className='team-data'>
                  <h4 className='team-data-name'>- {teamName}</h4>
                  <button className='team-data-remove' onClick={() => handleRemoveTeamClick(index)}>-</button>
                </div>
              ))}
              <div className='team-data-add'>
                <input className='user-team-input' type='text' value={newTeamName} onChange={handleNewTeamNameChange} placeholder='팀 이름 추가' />
                <button className='team-data-add-button' onClick={handleAddTeamClick}>+</button>
              </div>
            </div>
          </li>
          <li>
            <div className='user-mind-list'>
              <h3 className='user-mind-title'>보유마인드</h3>
              {mindList.map((mindName, index) => (
                <div key={index} className='mind-data'>
                  <h4 className='mind-data-name'>- {mindName}</h4>
                  <button className='mind-data-remove' onClick={() => handleRemoveMindClick(index)}>-</button>
                </div>
              ))}
              <div className='mind-data-add'>
                <input className='user-mind-input' type='text' value={newMindName} onChange={handleNewMindNameChange} placeholder='마인드맵 추가' />
                <button className='mind-data-add-button' onClick={handleAddMindClick}>+</button>
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