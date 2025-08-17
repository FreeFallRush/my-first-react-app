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
  const handleButtonClick = () => {
    window.location.href = "https://www.theguardian.com";
  };
  return (
    <>
      <h1>Hello, World!</h1>
      <Greeting />
      <FavFood />
      <CorrectTest />
      <LoopTest />
      <TodoList />
      <Button handleClick={handleButtonClick} />
      <Button
        handleClick={handleButtonClick}
        text="Don't Click Me!"
        color="red"
      />
      <Button handleClick={handleButtonClick} fontSize={20} />
    </>
  );
}

export default App;
