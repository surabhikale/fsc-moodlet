import "./App.css";
import ComponentFMoodlet from "./FSC/fmoodlet";

function App() {
  return (
    <div className="App">
      <p>
        The FSC moodlet indicates the state of Fuelling, Servicing and Cleaning
        Letter Version.
      </p>
      <ComponentFMoodlet word="F" />
      <ComponentFMoodlet word="S" />
      <ComponentFMoodlet word="C" />
      <p>
        The FSC moodlet indicates the state of Fuelling, Servicing and Cleaning
        in word version
      </p>
      <ComponentFMoodlet word="Fuelling" />
      <ComponentFMoodlet word="Servicing" />
      <ComponentFMoodlet word="Cleaning" disabled />
    </div>
  );
}

export default App;
