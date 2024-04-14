import NavBar from "./components/NavBar";
import Random from "./components/Random";
import SearchRandom from "./components/SearchRandom";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col justify-center items-center ">
        <Random />
        <SearchRandom />
      </div>
    </>
  );
}

export default App;
