import React, { useState } from 'react';
import '../css/mindmaplist.css';
import Menu from '../js/menu';
import background from '../img/background-gray.jpg';

function Mindmaplist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAnnouncementModalOpen, setIsAnnouncementModalOpen] = useState(false);
  const [titles, setTitles] = useState([]);
  const [announcement, setAnnouncement] = useState([]);

  const userData = {
    teamname: '공유마인드',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const openAnnouncementModal = () => {
    setIsAnnouncementModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const closeAnnouncementModal = () => {
    setIsAnnouncementModalOpen(false);
  };

  const handleAddClick = () => {
    openModal();
  };

  const handleAnnouncementAddClick = () => {
    openAnnouncementModal();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTitle = event.target.title.value;
    setTitles([...titles, newTitle]);
    closeModal();
  };

  const handleAnnouncementAddSubmit = (event) => {
    event.preventDefault();
    const newAnnouncement = event.target.title.value;
    setAnnouncement([...announcement, newAnnouncement]);
    closeAnnouncementModal();
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
          <button className="team-name-button">{userData.teamname}</button>
          <button className="notice-button" onClick={handleAnnouncementAddClick}>공지사항</button>
        </div>
      </div>

      {isAnnouncementModalOpen && (
        <div className="Announcement-List-modal-overlay">
          <div className="Announcement-List-modal">
            <form onSubmit={handleAnnouncementAddSubmit}>
              <div className="Announcement-List-modal-header">
                <h3>공지사항</h3>
              </div>
              <div className="Announcement-List-modal-body">
                <input type="text" className="Announcement-title" name="title" required />
              </div>
              <div className="Announcement-List-modal-footer">
                <button className="Announcement-List-Submit-button" type="submit">
                  완료
                </button>
                <button className="Announcement-List-close-button" onClick={closeAnnouncementModal}>
                  닫기
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
      {announcement.map((title) => (
        <div className="Announcement-item" key={title}>
          <img
            src={background}
            style={{ width: '140px', height: '140px', borderRadius: 20 }}
          />
          <div className="Announcement-title">{title}</div>
        </div>
      ))}
    </div>
  );
}

export default Mindmaplist;