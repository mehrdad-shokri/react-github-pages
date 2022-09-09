import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Deploy any static website(React, Vue, Next & Nuxt built statically, Jekyll) to Github pages with Github Actions!
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/channel/UCTg_X3QVErq_B2MbJyZ0sUw"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      </header>
    </div>
  );
}

export default App;
