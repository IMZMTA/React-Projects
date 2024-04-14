import Fragment from "./Fragments/Fragment";
import Hello from "./Hello";
import Random from "./Random";
import DisplayCount from "./components/DisplayCount";
import FormPage from "./components/FormPage";

function App(){

  let food = ["Apple","Guava","Orange","Pineapple"];

  return <div>

    <h1>
      This is the best React course
    </h1>

    <Hello></Hello>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Random></Random>
    <Fragment items={food}></Fragment>

    <div>
      <DisplayCount></DisplayCount>
    </div>

    <div>
      <FormPage></FormPage>
    </div>

  </div>
}

export default App;