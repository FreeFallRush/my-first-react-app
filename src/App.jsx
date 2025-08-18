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
import Person from "./Person";
import CustomInput from "./CustomInput";

function App() {
  const handleButtonClick = (url) => {
    window.location.href = url;
  };
  return (
    <>
      <h1>Hello, World!</h1>
      <Greeting />
      <FavFood />
      <CorrectTest />
      <LoopTest />
      <TodoList />
      <Button
        handleClick={() => handleButtonClick("https://www.theguardian.com")}
      />
      <Button
        handleClick={() => handleButtonClick("https://www.theodinproject.com")}
        text="Don't Click Me!"
        color="red"
      />
      <Button
        handleClick={() => handleButtonClick("https://www.youtube.com")}
        fontSize={20}
      />
      <Person />
      <br />
      <CustomInput />
    </>
  );
}

export default App;
