import React from 'react';
import '../css/unsignupteam.css';
import SignUp from './signup';
import {Routes, Route, Link } from 'react-router-dom';

function UnSignUpTeam() {
  return (
    <div className="TeamMain">
      <h1 className='TeamLogo'>TEAM</h1>
      <h3 className='TeamUser'> 로그인 하여 팀 서비스를 <br />이용하세요...</h3>
      <h5 className='Teamlogin'><Link to="../signup">로그인하러가기</Link></h5>
      <Routes>
          <Route exact path="../signup" component={SignUp}></Route>
      </Routes>
    </div>
  );
}

export default UnSignUpTeam;