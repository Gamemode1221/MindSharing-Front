import React, { useState } from 'react';
import '../css/mindmaplist.css';
import Menu from '../js/menu';
import background from '../img/background-gray.jpg';

function Mindmaplist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);
  const [isMindModalOpen, setIsMindModalOpen] = useState(false);
  const [titles, setTitles] = useState([]);
  const [announcement, setAnnouncement] = useState([]);

  const userData = {
    teamname: '공유마인드',
    teamLeaderName : '최용호',
    teamMemberName : '이진아, 이현종, 박소영',
    teamGithub : 'https://github.com/Gamemode1221/MindSharing',
    teamGithubFront : 'https://github.com/Gamemode1221/MindSharing-Front',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openAnnouncementModal = () => {
    setIsAnnouncementModalOpen(true);
  };

  const openMindModal = () => {
    setIsMindModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeAnnouncementModal = () => {
    setIsAnnouncementModalOpen(false);
  };

  const closeMindModal = () => {
    setIsMindModalOpen(false);
  };

  const handleAddClick = () => {
    openModal();
  };

  const handleAnnouncementAddClick = () => {
    openAnnouncementModal();
  };

  const handleMindAddClick = () => {
    openMindModal();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTitle = event.target.title.value;
    setTitles([...titles, newTitle]);
    closeModal();
  };

  return (
    <div className="MindMap-List">
      <div className="MindMap-List-header">
        <h4 className='MindMap-List-Title'>생성된 마인드 맵</h4>
        <button className="MindMap-List-add-button" onClick={handleAddClick}>
          + 추가
        </button>
        <Menu />
        <div className="team-info">
          <button className="team-name-button" onClick={handleMindAddClick}>{userData.teamname}</button>
          <button className="notice-button" onClick={handleAnnouncementAddClick}>공지사항</button>
        </div>
      </div>

      {isAnnouncementModalOpen && (
        <div className="Announcement-List-modal-overlay">
          <div className="Announcement-List-modal">
            <form >
              <div className="Announcement-List-modal-header">
                <h3>공지사항</h3>
                <p className='Announcement-List'>5시까지 제출!</p>
                <p className='Announcement-List'>4월 22일에비대면 회의 있습니다.~필수참여!! 불참시 벌금</p>
                <p className='Announcement-List'>(대충 공지사항이라는 내용)</p>
                <button className="Announcement-List-close-button" onClick={closeAnnouncementModal}>
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isMindModalOpen && (
        <div className="Mind-List-modal-overlay">
          <div className="Mind-List-modal">
            <form >
              <div className="Mind-List-modal-header">
                <h3>{userData.teamname}</h3>
                <p className='Mind-List'>{userData.teamLeaderName}</p>
                <p className='Mind-List'>{userData.teamMemberName}</p>
                <p className='Mind-List'>{userData.teamGithub}</p>
                <p className='Mind-List'>{userData.teamGithubFront}</p>
                <button className="Mind-List-close-button" onClick={closeMindModal}>
                  확인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div className="MindMap-List-modal-overlay">
          <div className="MindMap-List-modal">
            <form onSubmit={handleFormSubmit}>
              <div className="MindMap-List-modal-header">
                <h3>제목을 입력해주세요</h3>
                <p>제목은 12글자 까지만 입력이 가능합니다.</p>
                <div className="MindMap-List-modal-body">
                  <input type="text" className="MindMap-title" name="title" required /><br />
                </div>
                <div className="MindMap-List-modal-footer">
                  <button className='MindMap-List-Submit-button' type="submit">완료</button>
                  <button className="MindMap-List-close-button" onClick={closeModal}>
                    닫기
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {titles.map((title) => (
        <div className="mindlist-item" key={title}>
          <img
            src={background}
            style={{ width: '140px', height: '140px', borderRadius: 20 }}
          />
          <div className="mindlist-title">{title}</div>
        </div>
      ))}
    </div>
  );
}

export default Mindmaplist;