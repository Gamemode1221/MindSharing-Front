import React from 'react';
import '../css/mypage.css';
import Calendar from './calendar';
import SettingsIcon from './SettingIcon';

const MyPage = () => {
  const userData = {
    name: "이현종",
    email: "guswhd284@email.daelim.ac.kr",
    password: "********",
    profileImage: "https://avatars.githubusercontent.com/u/62270266?v=4?s=100", // 프로필 이미지 주소
    github: "https://github.com/Brem0827",
    blog: "https://velog.io/@yongho1221",
  };

  return (
    <div className="container">
      <div className="user-info">
      <div className="user-info__row">
        <div className="user-info__avatar">
          <img src={userData.profileImage} alt="프로필 이미지" />
        </div>
      <h3>{userData.name}님</h3><SettingsIcon />
      <span className="user-info__email">{userData.email}</span>
      </div>
      <div className="user-info_input">
          <input type="text" id="userinput" placeholder="상태창 입력"></input>
        </div>
        <div className="user-info__row">
          <span className="user-info__icon">&#9993;</span>
          <span className="user-info__value">{userData.email}</span>
        </div>
        <div className="user-info__row">
        <div className="naver-blog-icon"></div>
          <span className="user-info__value">{userData.blog}</span>
        </div>
        <div className="user-info__row">
            <div className="github-icon">
            <i className="fab fa-github"></i>
            </div>
            <span className="user-info__value">{userData.github}</span>
        </div>
      </div>
      <div>
      </div>
      <div className='calendarApp'>
            <Calendar />
        </div>
    </div>
  );
}

export default MyPage;