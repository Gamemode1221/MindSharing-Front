import React, { useState } from 'react';
import '../css/signup.css'; // CSS 파일 import
import axios from 'axios';
import Menu from '../js/menu';

function SignUp() {
  const [username, setUsername] = useState('');
  const [useremail, setUseremail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [error] = useState(null);

  const handleLoginAndSubmit = (event) => {
    event.preventDefault();
    
    // 유효성 검사를 수행합니다.
    const errorMessage = validateInputs();
    if (errorMessage) {
      alert(errorMessage); // 에러 메시지를 alert 창으로 띄웁니다.
      return;
    }
    
    axios.post('/signup', {username, useremail, password})
      .then((response) => {
        if (response.status === 200) {
          window.location.href = '/';
        } else {
        // 로그인 실패
        alert('잘못된 사용자 이름 또는 비밀번호입니다.');
      }
    });
  };
  
  const validateInputs = () => {
    // text1의 유효성 검사
    if (!username || username.length < 4 || username.length > 16 || !/^[a-zA-Z0-9]+$/.test(username)) {
      return '사용자 이름은 4글자 이상, 16글자 이하, 영문자와 숫자만 포함해주세요.';
    }
    
    // text2의 유효성 검사
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(useremail)) {
      return '사용자 이메일을 이메일 형식으로 입력해주세요.';
    }
    
    // text3의 유효성 검사
    if (!password || password.length < 4 || password.length > 16 || !/^[a-zA-Z0-9]+$/.test(password)) {
      return '사용자 비밀번호는 4글자 이상, 16글자 이하, 영문자와 숫자만 포함해주세요.';
    }
  
    if (password !== password2) {
      return "비밀번호가 일치하지 않습니다.";
    }

    // 모든 입력값이 유효한 경우 null을 반환합니다.
    return null;
  };

  return (
    <div className="signup-container">
      <Menu />
      <form className="signup-form"  onSubmit={handleLoginAndSubmit}>
        <div className="signup-form-group">
            <h2 className="welcome">환영합니다!</h2>
            <h6 className='signup-subtitle'>아이디어 회의를 위한 사이트 <font className="mind">공유마인드</font> 바로 시작해 보세요!</h6>
            <label>
                <input type="text" id="username" name="username" value={username} placeholder="이름(필수)" onChange={(event) => setUsername(event.target.value)} />
            </label><br/>
            <label>
                <input type="text" id="useremail" name="useremail" value={useremail} placeholder="이메일(필수)" onChange={(event) => setUseremail(event.target.value)} />
            </label><br/>
            <label>
                <input type="password" id="password" name="password" value={password} placeholder="비밀번호(필수)" onChange={(event) => setPassword(event.target.value)}  />
            </label><br/>
            <label>
                <input type="password" id="password2" name="password2" value={password2} placeholder="비밀번호 재확인(필수)" onChange={(event) => setPassword2(event.target.value)} />
            </label><br/>
        </div>
        <button type="submit" class="btn-signup">가입하기</button>
        <h3> ------ 또는 ------</h3>
        <a href='https://accounts.google.com/v3/signin/identifier?dsh=S-217739019%3A1679463439054010&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3D%25EA%25B5%25AC%25EA%25B8%2580%26oq%3D%25EA%25B5%25AC%25EA%25B8%2580%26aqs%3Dchrome..69i57j46i131i199i433i465i512j0i131i433i512j69i59j0i131i433i512l2j0i512j69i61.2265j0j4%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAZAAQ&hl=ko&ifkv=AWnogHd71Fi9wQg6foFlZfqBqbirbUkZ40lM1PMWDSdpQBncfMeVZbAq9Zoo5lpfhEVRp6N4hAZl&passive=true&flowName=GlifWebSignIn&flowEntry=ServiceLogin'>
          <div className="googlelogin"></div>
        </a>
        <a href="https://kauth.kakao.com/oauth/authorize?client_id=989929564bca258170149c609e6d427e&redirect_uri=http://localhost:8082/home&response_type=code">
          <div className="kakaologin"></div> <br/>
        </a>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}
export default SignUp;