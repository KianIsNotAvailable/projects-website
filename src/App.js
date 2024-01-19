import logo from './logo.svg';
import './App.css';
import Page from './components/page'
import Hero from './components/hero'
import Header from './components/header'
function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Page/>
    </div>
  );
}

export default App;
