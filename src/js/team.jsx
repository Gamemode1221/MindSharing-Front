import React, { useState } from 'react';
import '../css/team.css';
import Menu from '../js/menu';

function Team(){
    const [teamNames, setTeamNames] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const addTeam = (e) => {
    e.preventDefault();
    const teamName = e.target.elements.teamName.value.trim();
    if (teamName) {
      setTeamNames([...teamNames, teamName]);
      setShowForm(false);
      e.target.elements.teamName.value = "";
    }
  };

  const removeTeam = (indexToRemove) => {
    setTeamNames(teamNames.filter((_, index) => index !== indexToRemove));
  };

  const [isClicked, setIsClicked] = useState(false);

  const handleStarClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="App">
      <Menu />
      {showForm ? (
        <form onSubmit={addTeam}>
          <input type="text" name="teamName" placeholder="팀 이름을 입력 해 주세요" />
          <button className="TeamButton" type="submit">추가</button>
          <button className="TeamButton" type="button" onClick={() => setShowForm(false)}>
            취소
          </button>
        </form>
      ) : (
        <div>
            <button className="plus" onClick={() => setShowForm(true)}>+</button>  팀 생성 / 추가
        </div>
      )}

      {teamNames.map((teamName, index) => (
        <div key={teamName} className="team">
          <div className="icon">{teamName.charAt(0)}</div>
          <div className="name">{teamName}</div>
          <button className="RemoveButton" onClick={() => removeTeam(index)}>삭제</button>
        </div>
      ))}
    </div>
  );
  }
  

export default Team;