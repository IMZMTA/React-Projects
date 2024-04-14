import "./App.css";
import NavBar from "./components/NavBar";
import Ludo from "./components/Ludo/Ludo";
import Lottery from "./components/Lottery/Lottery";
import Weather from "./components/Weather/Weather";

function App() {
  return (
    <>
      <NavBar />
      <Ludo />
      <Lottery />
      <br/>
      <Weather/>
    </>
  );
}

export default App;
