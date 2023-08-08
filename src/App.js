import logo from './logo.svg';
import './App.css';
import { Header } from './header/header';
import { Experience } from './experience/experience';

function App() {
  return (
    <div className="App">
      <header>
        <Header/>
        <Experience/>
      </header>
    </div>
  );
}

export default App;
