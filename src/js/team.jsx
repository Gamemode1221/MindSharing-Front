import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import Menu from '../js/menu';
import '../css/team.css';
import axios from 'axios';

function Team() {
  const [teams, setTeams] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const userData = {
    name: "이현종"
  };

  const addTeam = (teamName) => {
    setTeams([...teams, teamName]);
    setShowAddForm(false);
  };

  const addIcon = (teamName) => {
    const newTeams = teams.map((team) => {
      if (team === teamName) {
        return teamName;
      }
      return team;
    });
    setTeams(newTeams);
  };

  const handleAddTeamClick = () => {
    setShowAddForm(true);
  };

  return (
    <div className="TeamMain">
      <Menu />
      <h1 className='TeamLogo'>TEAM</h1>
      <h3 className='TeamUser'>{userData.name} 님이 참가하고 있는 팀</h3>
      <div className="Team">
        <AddTeamButton onClick={handleAddTeamClick} />
        {showAddForm && <AddTeamForm onAddTeam={addTeam} onCancel={() => setShowAddForm(false)} />}
        <TeamList teams={teams} onAddIcon={addIcon} />
      </div>
    </div>
  );
}

function AddTeamButton({ onClick }) {
  return (
    <div className='Teamicon'>
      <div className="Ticon" onClick={onClick}>
        +
      </div>
      <span className='TeamPlus'> 팀 생성/추가</span>
    </div>
  );
}

function AddTeamForm({ onAddTeam, onCancel }) {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTeam(teamName);
    setTeamName('');

    axios.post('/team', {teamName})
    .then((response) => {
      if (response.status === 200) {
        window.location.href = '/';
      } else {
      alert('..');
    }
  });

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={teamName}
        className="TeamName"
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="팀 이름을 입력 해 주세요"
      />
      <button type="submit" className="TeamAdd">+</button>
      <button type="button" className="TeamCancel" onClick={onCancel}>취소</button>
    </form>
  );
}

function TeamList({ teams, onAddIcon }) {
  const handleAddIcon = (teamName) => {
    onAddIcon(teamName);
  };

  return (
    <ul className='TeamUl'>
      {teams.map((team) => (
        <li className='Teamli' key={team} onClick={() => handleAddIcon(team)}>
          <span className="team-icon">{team.charAt(0)}</span>
          {team}
          <span className="bookmark-icon"><FaStar /></span>
        </li>
      ))}
    </ul>
  );
}

export default Team;