import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Menu from './js/menu';
import MainPage from './img/MainPage.png';
import MindMap from './js/MindMap';

// npm install node-sass

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={MainPage} className='MainPageImage' style={{ width: '100%', height: '925px' }} />
        <button className='MainPage-start'><Link to="./MindMap"><a className='MainPage-Text'>시작하기</a></Link></button>
        <Menu />
      </header>
        <Routes>
          <Route exact path="./MindMap" component={MindMap}></Route>
        </Routes>
    </div>
  );
}

export default App;
