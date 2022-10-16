import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectListScreen } from "screen/project-list";
import { LoginScreen } from "screen/login";

function App() {
  return (
    <div className="App">
      <LoginScreen />
      {/* <ProjectListScreen /> */}
    </div>
  );
}

export default App;
