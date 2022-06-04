import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Details from "./pages/Details";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [dark, setDark] = useState(false);
  const [input, setInput] = useState("");
  const [option, setOption] = useState("Filter by Region");

  useEffect(() => {
    let darkMode = localStorage.getItem("dark-mode");
    if (darkMode == "true") {
      setDark(true);
    }
  }, []);
  const setDarkMode = () => {
    setDark(!dark);
    localStorage.setItem("dark-mode", (!dark).toString());
  };
  const setInputValue = (e) => {
    setInput(e.currentTarget.value);
  };
  const setOptionValue = (e) => {
    setOption(e.target.value);
  };
  return (
    <div className="App" id={dark && "dark"}>
      <Header dark={dark} setDarkMode={setDarkMode} />

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Body
                input={input}
                dark={dark}
                option={option}
                setInputValue={setInputValue}
                setOptionValue={setOptionValue}
              />
            }
          />
          <Route path="/:country" element={<Details dark={dark} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
