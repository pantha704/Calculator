import { useEffect, useState } from "react";
import Button from "./assets/Button";
import "./App.css";

function App() {
  const [placeholder, setPH] = useState("Calculate Something?");
  const [display, setDisplay] = useState("");

  const handleKeyPress = (e) => {
    var key = e.key;
    if (/[0-9]/.test(key)) handleButtonClick(key);
    else if (/[-+*/]/.test(key)) handleButtonClick(key);
    else if (key === "Enter") handleEquals();
    else if (key === "Escape") handleClear();
    else if (key === "Backspace") handleBackspace();
  };

  const handleButtonClick = (value) => {
    setDisplay((prevDisplay) => {
      if (/[-+*/]/.test(prevDisplay.slice(-1)) && /[-+*/]/.test(value)) {
        return prevDisplay.slice(0, -1) + value;
      }
      return prevDisplay + value;
    });
  };

  const handleClear = () => {
    setDisplay("");
    setPH("Cleared");
  };

  const handleEquals = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
    } catch (error) {
      setDisplay("");
      setPH("Error :(");
    }
  };

  const handleBackspace = () => {
    setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
  };
  var buttons = [
    "1",
    "2",
    "3",
    "+",
    "4",
    "5",
    "6",
    "-",
    "7",
    "8",
    "9",
    "*",
    "0",
    "C",
    "=",
    "/",
    "(",
    ")",
    "←",
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        id="display"
        placeholder={placeholder}
        value={display}
        readOnly
        style={display ? { textAlign: "right" } : { textAlign: "left" }}
      />
      {buttons.map((button) => {
        var className = "button";
        var func = handleButtonClick;
        if (/[-+*/]/.test(button)) className = "button operator";
        else if (/=/.test(button)) {
          className = "button equals";
          func = handleEquals;
        } else if (/←/.test(button)) {
          className = "button backspace";
          func = handleBackspace;
        } else if (/C/.test(button)) {
          className = "button clear";
          func = handleClear;
        }

        return (
          <Button
            str={button}
            Kfn={handleKeyPress}
            fn={func}
            classN={className}
          />
        );
      })}
    </div>
  );
}

export default App;
