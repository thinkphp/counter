import logo from './logo.svg';
import './App.css';
import ColorPicker from './ColorPicker.js'

function App() {
  return (
    <div className="App">
                  <ColorPicker />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://thinkphp.github.io/counter"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
                <p>
          Welcome to the jungle!
        </p>

      </header>
      
    </div>
  );
}

export default App;
