import "./App.css";
import NavBarTwoBtns from "./components/NavBarTwoBtns";
import Homepage from "./components/Homepage";
import useWindowDimensions from "./components/useWindowDimensions";

function App() {
  const { height } = useWindowDimensions();

  const bgFullHeightStyle = {
    height: height
  };

  return (
    <div className="bg-home font-all" style={bgFullHeightStyle}>
      <NavBarTwoBtns btnTxt="SIGN UP" />
      <Homepage />
    </div>
  );
}

export default App;
