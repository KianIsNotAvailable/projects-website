import './App.css';
import Page from './components/page';
import Hero from './components/hero';
import Header from './components/header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Twitchbot from './components/twitchbot';
import Korean from './components/korean';
import Flcc from './components/flcc';
import ScrollToTop from './components/scrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header class='sticky' />
        <Routes>
          <Route exact path="/" element={
          <><Hero /><Page /></>
        } />
          <Route exact path="/Korean-quiz" element={<Korean />} />
          <Route exact path="/freeleetcodecamp" element={<Flcc />} />
          <Route exact path="/twitch-bot" element={<Twitchbot />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
