import "./App.css";

import CourtsLocations from "./components/CourtsLocations";
import CurrBookingsPage from "./components/CurrBookingsPage";
import Homepage from "./components/Homepage";
import SportsTypeChoice from "./components/SportsTypeChoice";
import SignInPage from "./components/SignInPage";
import About from "./components/About";
import SignUpPage from "./components/SignUpPage";
import ForgotPass from "./components/ForgotPass";
import BookingCourt from "./components/BookingCourt";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./Auth";

function App() {
  return (
    <AuthProvider>
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
            <PrivateRoute
              exact
              path="/current-bookings"
              component={CurrBookingsPage}
            />
            <PrivateRoute
              exact
              path="/booking-court"
              component={BookingCourt}
            />
            <PrivateRoute
              exact
              path="/sports-choice"
              component={SportsTypeChoice}
            />
            <PrivateRoute
              exact
              path="/courts-locations"
              component={CourtsLocations}
            />
            <Route exact path="/signup">
              <SignUpPage />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPass />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}
export default App;
