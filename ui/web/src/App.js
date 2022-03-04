import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Login}/> 
        <Route path="/home" exact component={Home}/> 
      </Router>
    </div>
  );
}

export default App;
