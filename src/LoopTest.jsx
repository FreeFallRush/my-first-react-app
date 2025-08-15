function ListItems(props) {
  return <li>{props.animal}</li>;
}

function List(props) {
  return (
    <ul>
      {props.animals.map((animal) => (
        <ListItems key={animal} animal={animal} />
      ))}
    </ul>
  );
}

function LoopTest() {
  const animals = ["Lion", "Cow", "Snake", "Lizard"];

  return (
    <>
      <h3>Animals: </h3>
      <List animals={animals} />
    </>
  );
}

export default LoopTest;
