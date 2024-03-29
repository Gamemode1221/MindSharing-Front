import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './js/login';
import SignUp from './js/signup';
import MyPage from './js/mypage';
import Team from './js/team';
import Menu from './js/menu';
import Setting from './js/setting';
import PersonIcon from './js/Personicon';
import Loginsuccess from './js/loginsuccess';
import Fetchtest from './js/fetchtest';
import UnSignUpTeam from './js/UnSignUpTeam';
import CalendarContainer from './js/CalendarContainer';
import Mindmaplist from './js/mindmaplist';
import MindMap from './js/MindMap';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
      <Route index element={<App />} />
        <Route path="MindMap" element={<MindMap />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="mypage" element={<MyPage />} />
        <Route path="team" element={<Team />} />
        <Route path="menu" element={<Menu />} />
        <Route path="personicon" element={<PersonIcon />} />
        <Route path="setting" element={<Setting />} />
        <Route path="loginsuccess" element={<Loginsuccess />} />
        <Route path="fetchtest" element={<Fetchtest />} />
        <Route path="UnSignUpTeam" element={<UnSignUpTeam />} />
        <Route path="CalendarContainer" element={<CalendarContainer />} />
        <Route path="Mindmaplist" element={<Mindmaplist />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
