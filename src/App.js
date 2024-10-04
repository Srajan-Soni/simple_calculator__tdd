import React, { useState } from "react";
import "./App.css";
import StringCalculator from "./components/StringCalculator";

function App() {
  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1 className="text-blue-500 text-3xl mt-5 font-bold text-center">
        Simple String Calculator
      </h1>

      <StringCalculator />
    </div>
  );
}

export default App;
