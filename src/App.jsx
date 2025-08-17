// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Greeting from "./Greeting";
import FavFood from "./FavFood";
import CorrectTest from "./CorrectTest";
import LoopTest from "./LoopTest";
import TodoList from "./ToDo";
import Button from "./Button";

function App() {
  return (
    <>
      <h1>Hello, World!</h1>
      <Greeting />
      <FavFood />
      <CorrectTest />
      <LoopTest />
      <TodoList />
      <Button text="Click Me!" color="blue" fontSize={12} />
      <Button text="Don't Click Me!" color="red" fontSize={12} />
      <Button text="Click Me!" color="blue" fontSize={20} />
    </>
  );
}

export default App;
