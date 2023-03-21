import React, { useState } from 'react';
import '../css/login.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();

    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((response) => {
        if (response.ok) {
          // 로그인 성공
          window.location.href = '/home';
        } else {
          // 로그인 실패
          alert('잘못된 사용자 이름 또는 비밀번호입니다.');
        }
      })
      .catch((error) => {
        console.error(error);
        alert('로그인 중 오류가 발생했습니다.');
      });
  };

  return (
    <div className="login-container">
      <form className="login-form"  onSubmit={handleLogin}>
        <div className="form-group">
            <h2 className="login">로그인</h2>
            <label>
                <input type="text" id="useremail" name="useremail" value={username} onChange={handleUsernameChange} />
            </label><br/>
            <label>
                <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
            </label>
        </div>
        <button type="submit" class="btn-login">로그인</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default LoginPage;