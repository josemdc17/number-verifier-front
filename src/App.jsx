import "./App.css";
import Form from "./components/form.jsx";
import Display from "./components/display";
import Title from "./components/title"
import { useState } from "react";
import Download from "./components/download";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <div className="mainWrapper">
        <Title />
      </div>
      
      <div className="mainWrapper">
        <Download />

        <Form setValue={setValue} />

        <Display {...value} />
      </div>

    </div>
  );
}

export default App;
