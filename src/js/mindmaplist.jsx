import React, { useState } from 'react';
import '../css/mindmaplist.css';
import Menu from '../js/menu';
import background from '../img/background-gray.jpg';
import axios from 'axios';

function Mindmaplist() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [titles, setTitles] = useState([]);

  const userData = {
    teamname: '공유마인드',
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleAddClick = () => {
    openModal();
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newTitle = event.target.title.value;
    setTitles([...titles, newTitle]);
    closeModal();

    axios.post('/mindmaplist', { title: newTitle })
    .then((response) => {
      if (response.status === 200) {
        window.location.href = '/mindmaplist';
      } else {
      alert('..');
    }
  });
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
          <button className="notice-button">공지사항</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="MindMap-List-modal-overlay">
          <div className="MindMap-List-modal">
            <form onSubmit={handleFormSubmit}>
              <div className="MindMap-List-modal-header">
                <h3>제목을 입력해주세요</h3>
                <div className="MindMap-List-modal-body">
<<<<<<< HEAD

                  <input type="text" value={titles} className="titles" onChange={(e) => setTitles(e.target.value)} />

=======
                  <input type="text" className="MindMap-title" name="title" required /><br />
>>>>>>> LeeHyunJong
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