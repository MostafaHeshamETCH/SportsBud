import "./App.css";
import NavBar from "./components/NavBar";
import useWindowDimensions from "./components/useWindowDimensions";
import fbLogo from "./assets/images/logo-facebook.png";
import igLogo from "./assets/images/logo-instagram.png";

function App() {
  const { height, width } = useWindowDimensions();

  const divStyle = {
    height: height
  };

  return (
    <div className="bg-home font-all" style={divStyle}>
      <NavBar />
      <div className="flex flex-col flex-nowrap text-white homepage-main-txt ml-10 mt-8 mr-10 flex-none">
        <div className=" homepage-divs">Book a</div>
        <div className=" homepage-divs">sports court</div>
        <div className=" homepage-divs">in seconds</div>
        <div className=" ml-6 mt-6 mr-28"></div>
        <button className=" rounded-full hover:bg-gray-200 bg-white text-gray-900 text-xs py-2 px-4 homepage-main-cta-btn">
          VIEW ALL
        </button>
        <div className="flex flex-row mt-20">
          <div className="text-sm court-owner-txt">A Court-Owner?</div>
          <button className="focus:outline-none hover:underline pl-1 mr-3 text-white homepage-admin-create-btn">
            Press here
          </button>
        </div>
        <div className="flex flex-row w-28 items-end p-2 justify-end homepage-width">
          <img
            className="p-1"
            src={fbLogo}
            alt="Instagram Icon"
            width="32"
            height="32"
          ></img>
          <img
            className="p-1"
            src={igLogo}
            alt="Facebook Icon"
            width="32"
            height="32"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default App;
