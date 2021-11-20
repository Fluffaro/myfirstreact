import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import Hello from './components/Hello';
function App() {
        
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Neil Joey Villarey First Page React
        </p>
           <p>{Hello()}</p>
        <Greet name="Nanay" name2="Mo">
           <Message/>
        </Greet>
        <Greet name="Ricky" name2="Roller">
          <Button/>
        </Greet>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
