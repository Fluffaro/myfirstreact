import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';
import Employee from './Employee';
import NavBar from './NavBar';
import Gif from './gif.gif';
function Home() {
        
  return (
    <div className="Home">
      <header className="App-header"
          style={{
        backgroundImage: "url(" + Gif + ")",
        backgroundSize: "cover"
      }}>
        <p>
          Neil Joey Villarey
        </p>

          <Button/>
        <a
          className="App-link"
          href="https://www.netflix.com/browse?jbv=70140391"
          target="_blank"
          rel="noopener noreferrer"
        >
          click me to watch grey's anatomy
        </a>
      </header>
    </div>
  );
}

export default Home;
