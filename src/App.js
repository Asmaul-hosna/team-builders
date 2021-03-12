

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import TeamDetail from './components/TeamDetail/TeamDetail';



function App() {

  
  return (
    
    <Router>
       <Switch>
         <Route path="/home">
         <Home></Home>
        </Route>
        <Route path="/team/:idTeam">
          <TeamDetail></TeamDetail>
          </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        
        <Route path="*">
          <NotFound/>
        </Route>

       </Switch>
    </Router>
  );
}

export default App;
