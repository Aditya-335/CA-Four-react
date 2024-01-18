import React, { useEffect, useState } from "react";
import "./App.css";
import "./index.css"
import Questions from "../src/questions";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Home from "./components/Home"



function App() {

  return (
    <div>
      <Home/>
      <QuestionBox/>
      <Result/>
      
      
    </div>
  );
}

export default App;