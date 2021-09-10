import "./App.css";

import CourtsLocations from "./components/CourtsLocations";
import CurrBookingsPage from "./components/CurrBookingsPage";
import Homepage from "./components/Homepage";
import SportsTypeChoice from "./components/SportsTypeChoice";
import SignInPage from "./components/SignInPage";
import About from "./components/About";
import SignUpPage from "./components/SignUpPage";

import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <Switch>
        <Route exact path="/"> 
          <Homepage />
        </Route>
        <Route exact path="/signin"> 
          <SignInPage />
        </Route>
        <Route exact path="/about"> 
          <About />
        </Route>
        <Route exact path="/current-bookings"> 
          <CurrBookingsPage/>
        </Route>
        <Route exact path="/sports-choice"> 
          <SportsTypeChoice />
        </Route>
        <Route exact path="/courts-locations"> 
          <CourtsLocations />
        </Route>
        <Route exact path="/signup"> 
          <SignUpPage />
        </Route>
      </Switch>
      
    </div>
    </Router>
  );
}
export default App;
