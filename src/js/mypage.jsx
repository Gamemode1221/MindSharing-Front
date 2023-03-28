import React from 'react';
import '../css/mypage.css';
import Calendar from './calendar';

const MyPage = () => {
  const userData = {
    name: "이현종",
    email: "guswhd284@email.daelim.ac.kr",
    password: "********",
    profileImage: "https://via.placeholder.com/150", // 프로필 이미지 주소
    github: "https://github.com/Brem0827",
  };

  return (
    <div className="container">
      <div className="user-info">
      <div className="user-info__row">
        <div className="user-info__avatar">
          <img src={userData.profileImage} alt="프로필 이미지" />
        </div>
      <h3>{userData.name}님</h3>
      <span className="user-info__email">{userData.email}</span>
      </div>
        <div className="user-info__row">
          <span className="user-info__icon">&#9993;</span>
          <span className="user-info__value">{userData.email}</span>
        </div>
        <div className="user-info__row">
            <div className="github-icon">
            <i className="fab fa-github"></i>
            </div>
            <span className="user-info__value">{userData.github}</span>
        </div>
      </div>
      <div>
        <div className='calendarApp'>
            <Calendar />
        </div>
      </div>
    </div>
  );
}

export default MyPage;