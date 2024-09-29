import logo from './logo.svg';
import './App.css';
import Task1 from './tasks/Task1';
import Footer from './tasks/Footer';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Task1 />
        <img src={logo} className="App-logo" alt="logo" />

      <Footer />
      </div>
    </div>
  );
}

export default App;
