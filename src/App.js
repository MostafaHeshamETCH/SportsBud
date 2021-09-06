import "./App.css";
import CurrBookingsPage from "./components/CurrBookingsPage";
import SportsTypeChoice from "./components/SportsTypeChoice";

function App() {
  return (
    <div>
      <SportsTypeChoice/>
      <CurrBookingsPage />
    </div>
  );
}

export default App;
