function LoopTest() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h3>Animals: </h3>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>{animal}</li>
        ))}
      </ul>
    </>
  );
}

export default LoopTest;
