import { Route,Switch } from 'react-router-dom';
import './App.css';
//Components 
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
