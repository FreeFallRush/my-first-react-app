// function ListItems(props) {
//   return <li>{props.animal}</li>;
// }

function List(props) {
  if (!props.animals) {
    return <div>Loading... </div>;
  }

  if (props.animals.length === 0) {
    return <div>There are no animals in the list!</div>;
  }
  return (
    <ul>
      {props.animals.map(
        (animal) => {
          //   return animal.startsWith("L") ? <li key={animal}>{animal}</li> : null;
          return animal.startsWith("L") && <li key={animal}>{animal}</li>;
        }
        //   (<ListItems key={animal} animal={animal} />)
      )}
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
