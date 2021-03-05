import './App.css';
import Home from './pages/Home';

import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
     <Router>
              <div>
                <Route exact path='/' component={Home} ></Route>

              </div>
      </Router>
    </div>
  );
}

export default App;
