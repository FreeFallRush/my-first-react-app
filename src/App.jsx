// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Greeting from "./Greeting";
import FavFood from "./FavFood";
import CorrectTest from "./CorrectTest";
import LoopTest from "./LoopTest";
import TodoList from "./ToDo";

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <Greeting />
      <FavFood />
      <CorrectTest />
      <LoopTest />
      <TodoList />
    </>
  );
}

export default App;
