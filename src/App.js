import './App.css';
import { Header } from './components/header/header';
import { Experience } from './components/experience/experience';

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
