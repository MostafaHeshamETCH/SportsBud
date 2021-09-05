import "./App.css";
import NavBarTwoBtns from "./components/NavBarTwoBtns";
import Homepage from "./components/Homepage";
import useWindowDimensions from "./components/useWindowDimensions";
import SignInPage from "./components/SignInPage";
import SportsTypeChoice from "./components/SportsTypeChoice";

function App() {
  const { height } = useWindowDimensions();

  const bgFullHeightStyle = {
    height: height
  };

  return (
    <div className="bg-white font-all" style={bgFullHeightStyle}>
      {/* <NavBarTwoBtns btnTxt="SIGN UP" /> */}
      <SportsTypeChoice />
    </div>
  );
}

export default App;
