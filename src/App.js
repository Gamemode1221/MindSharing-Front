import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Login from './js/login';
import SignUp from './js/signup';

// npm install node-sass

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> 공사중 입니다. </h1>
        <ul>
          <li><Link to="./login">로그인</Link></li>
          <li><Link to="./signup">회원가입</Link></li>
          <li><Link to="./mypage">마이페이지</Link></li>
          <li><Link to="./team">팀</Link></li>
        </ul>
      </header>
        <Routes>
            <Route exact path="./login" component={Login}></Route>
            <Route exact path="./signup" component={SignUp}></Route>
            {/* <Route exact path="./mypage" component={MyPage}></Route>
            <Route exact path="./team" component={Team}></Route> */}
        </Routes>
    </div>
  );
}

export default App;
