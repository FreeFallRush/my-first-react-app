function LoopTest() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];
  const animalList = animals.map((animal) => <li key={animal}>{animal}</li>);

  return (
    <>
      <h3>Animals: </h3>
      <ul>{animalList}</ul>
    </>
  );
}

export default LoopTest;
