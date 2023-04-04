import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import '../css/team.css';

function Team() {
  const [teams, setTeams] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

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
    <div className="Team">
      <AddTeamButton onClick={handleAddTeamClick} />
      {showAddForm && <AddTeamForm onAddTeam={addTeam} onCancel={() => setShowAddForm(false)} />}
      <TeamList teams={teams} onAddIcon={addIcon} />
    </div>
  );
}

function AddTeamButton({ onClick }) {
  return (
    <div>
      <div className="icon" onClick={onClick}>
        +
      </div>
      <span> 팀 생성/추가</span>
    </div>
  );
}

function AddTeamForm({ onAddTeam, onCancel }) {
  const [teamName, setTeamName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTeam(teamName);
    setTeamName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={teamName}
        className="TeamName"
        onChange={(e) => setTeamName(e.target.value)}
        placeholder="Enter team name"
      />
      <button type="submit" className="TeamAdd">Add</button>
      <button type="button" onClick={onCancel}>Cancel</button>
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