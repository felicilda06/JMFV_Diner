import './App.css';
import './application.js';
import LandingPage from './pages/LandingPage';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path={'/'} component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
