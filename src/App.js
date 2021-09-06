import logo from "./logo.svg";
import "./App.css";

function App() {
  const arr = [
    "A",
    "C",
    "D",
    "F",
    "G",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "H",
    "V",
    "X",
    "Z",
    "B",
    "E",
    "I",
    "J",
    "K",
    "W",
    "Y",
  ];
  return (
    <div className="App">
      {arr.map((first) => (
        <div>
           {arr.map((second) => (
           <h1>77 {first}{second} 777</h1>
           ))}
          </div>
      ))}
    </div>
  );
}

export default App;
