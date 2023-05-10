import React from 'react';
import {Routes, Route, Link } from 'react-router-dom';
import Login from '../js/login';
import SignUp from '../js/signup';
import MyPage from '../js/mypage';
import Team from '../js/team';
import Loginsuccess from '../js/loginsuccess';
import UnSignUpTeam from './UnSignUpTeam';
import Mindmaplist from './mindmaplist';

function Setting() {
  return (
    <div className="Menu">
        <ul>
          <li><Link to="../login">로그인</Link></li>
          <li><Link to="../signup">회원가입</Link></li>
          <li><Link to="../mypage">마이페이지</Link></li>
          <li><Link to="../team">팀</Link></li>
          <li><Link to="../UnSignUpTeam">팀(로그인X)</Link></li>
          <li><Link to="../loginsuccess">로그인 성공 메뉴</Link></li>
          <li><Link to="../mindmaplist">생성된 마인드맵</Link></li>
        </ul> 
          <Routes>
            <Route exact path="../login/*" component={Login}></Route>
            <Route exact path="../signup/*" component={SignUp}></Route>
            <Route exact path="../mypage/*" component={MyPage}></Route>
            <Route exact path="../team/*" component={Team}></Route>
            <Route exact path="../loginsuccess/*" component={Loginsuccess}></Route>
            <Route exact path="../UnSignUpTeam/*" component={UnSignUpTeam}></Route>
            <Route exact path="../mindmaplist/*" component={Mindmaplist}></Route>
          </Routes>
    </div>
  );
}

export default Setting;