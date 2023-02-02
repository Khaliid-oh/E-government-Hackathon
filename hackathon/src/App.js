
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='container'>
        <Switch>
          <Route path='/home' >
            <Home/>
          </Route>
        </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
