import './App.css';
import Page from './components/page'
import Hero from './components/hero'
import Header from './components/header'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Twitchbot from './components/twitchbot';
import Korean from './components/korean';
import Flcc from './components/flcc';
function App() {
  return (
    <div className="App">
      <Header class='sticky'>
      <Router>
      <Routes>
        <Route path="/" exact component={<Header/>}/>
        <Route path="/Korean-quiz" component={<Korean/>} />  
        <Route path="/freeleetcodecamp" component={<Flcc/>}/> 
        <Route path="/twitch-bot"component={<Twitchbot/>}/> 
      </Routes>
    </Router>
    </Header>
      <Hero/>
      <Page/>
    </div>
  );
}

export default App;
