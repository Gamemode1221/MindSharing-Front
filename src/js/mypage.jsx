import React, { useState } from 'react';
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
    blogLinks: [], // 변경된 blogLinks state를 userData 객체에 반영
  };

  const [URLLinkInput, setURLLinkInput] = useState("");
  const [URLLinks, setURLLinks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleAddClick = () => {
    openModal();
  };

  const handleAddLink = () => {
    if (URLLinkInput) {
      setURLLinks([...URLLinks, URLLinkInput]); // 변경된 blogLinks state에 추가
      setURLLinkInput("");
    }
    setModalVisible(false); // 모달 닫기
  };

  const handleDeleteClick = (index) => {
    const newLinks = [...URLLinks];
    newLinks.splice(index, 1);
    setURLLinks(newLinks);
  };

  return (
    <div className="container">
      <div className="user-info">
        <div className="user-info__row">
          <div className="user-info__avatar">
            <img src={userData.profileImage} alt="프로필 이미지" />
          </div>
          <h3>{userData.name}님</h3>
          <SettingsIcon />
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
          <div className="user-info__value">
            {URLLinks.map((link, index) => ( // 변경된 blogLinks state를 사용하여 렌더링
              <div key={index}>
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
                <button
                className="delete-URL-Button"
                onClick={() => handleDeleteClick(index)}
              >
                X
              </button>
              </div>
            ))}
          </div>
          <button className='add-URL-Button' onClick={handleAddClick}>+</button>
          {/* 모달 창 */}
          {modalVisible && (
            <div className="modal">
              <div className="modal-content">
                <input
                  type="text"
                  value={URLLinkInput}
                  placeholder="URL 추가 입력"
                  onChange={(e) => setURLLinkInput(e.target.value)}
                />
                <div className="modal-buttons">
                  <button className="modal-add-button" onClick={handleAddLink}>추가하기</button>
                  <button className="modal-close-button" onClick={closeModal}>닫기</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="calendarApp">
        <Calendar />
      </div>
    </div>
  );
};

export default MyPage;