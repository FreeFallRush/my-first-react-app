import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleIncreaseAge = () => {
    //BAD PRACTICE - won't work like this
    // person.age = person.age + 1;
    // setPerson(person);

    //GOOD PRACTICE -> creating a new object in which we copy the existing state values
    // const newPerson = { ...person, age: [person.age + 1] };
    // setPerson(newPerson);
    console.log("in handleIncreaseAge (before setPerson call): ", person);
    setPerson({ ...person, age: person.age + 1 });
    console.log("in handleIncreaseAge (after setPerson call): ", person);
  };

  console.log("during render: ", person);

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <br />
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <p>
        First Name: {firstName} Last Name: {lastName}
      </p>
    </>
  );
}

export default Person;
