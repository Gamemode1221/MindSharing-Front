import './App.css';
import {Routes, Route, Link } from 'react-router-dom';
import Login from './js/login';
import SignUp from './js/signup';
import MyPage from './js/mypage';
import Team from './js/team';
import Menu from './js/menu';

// npm install node-sass

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
      </header>
    </div>
  );
}

export default App;
