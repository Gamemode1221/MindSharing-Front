import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/login.css';
import SignUp from '../js/signup';
import Menu from '../js/menu';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('/login', {
        username,
        password
      });

      if (response.status === 200) {
        // 로그인 성공
        window.location.href = '/';
      } else {
        // 로그인 실패
        setError('잘못된 사용자 이름 또는 비밀번호입니다.');
      }
    } catch (error) {
      console.error(error);
      setError('로그인 중 오류가 발생했습니다.');
    }
  };

  //const handleLogin = (event) => {
  //  event.preventDefault();
  
  //  fetch('/login', {
  //     method: 'POST',
  //    body: JSON.stringify({ username, password }),
  //    headers: { 'Content-Type': 'application/json' },
  //  })
  //    .then((response) => {
  //      if (response.status === 200 && response.ok) {
  //        // 로그인 성공
  //        window.location.href = '/';
  //      } else {
  //        // 로그인 실패
  //        alert('잘못된 사용자 이름 또는 비밀번호입니다.');
  //      }
  //    })
  //    .catch((error) => {
  //     console.error(error);
  //      alert('로그인 중 오류가 발생했습니다.');
  //    });
  //};
  

  return (
    <div className="login-container">
      <Menu />
      <form className="login-form"  onSubmit={handleLogin}>
        <div className="form-group">
            <h2 className="login">로그인</h2>
            <label>
            <input
              type="text"
              id="useremail"
              name="useremail"
              value={username}
              onChange={handleUsernameChange}
            />
            </label><br/>
            <label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
            </label>
            <label>
                <a className="explanation">계정이 없으신가요? <span><Link to="../signup">회원가입</Link></span></a>
            </label>
          </div>
        <button type="submit" class="btn-login">LOGIN</button>
      </form>
      {error && <p>{error}</p>}
        <Routes>
          <Route exact path="../signup" component={SignUp}></Route>
        </Routes>
    </div>
  );
}

export default LoginPage;