import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
