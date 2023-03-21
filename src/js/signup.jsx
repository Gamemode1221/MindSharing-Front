import React, { useState } from 'react';
import '../css/signup.css'; // CSS 파일 import

function SignUp() {
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
  
      fetch('/api/signup', {
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
      <div className="signup-container">
        <form className="signup-form"  onSubmit={handleLogin}>
          <div className="form-group">
              <h2 className="signup">환영합니다.</h2>
              <h6>아이디어 회의를 위한 사이트 공유마인드 바로 시작해 보세요!</h6>
              <label>
                  <input type="text" id="username" name="username" value={username} placeholder="이름(필수)" onChange={handleUsernameChange} />
              </label><br/>
              <label>
                  <input type="text" id="useremail" name="useremail" value={username} placeholder="이메일(필수)" onChange={handleUsernameChange} />
              </label><br/>
              <label>
                  <input type="password" id="password" name="password" value={password} placeholder="비밀번호(필수)" onChange={handlePasswordChange} />
              </label><br/>
              <label>
                  <input type="password" id="password2" name="password2" value={password} placeholder="비밀번호 재확인(필수)" onChange={handlePasswordChange} />
              </label><br/>
          </div>
          <button type="submit" class="btn-signup">회원가입</button>
        </form>
        {error && <p>{error}</p>}
      </div>
    );
  }

export default SignUp;