import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo == "") {
      return;
    }
    // setToDos((currentArray) => [toDo, ...currentArray]);
    setToDos((currentArray) => [...currentArray, toDo]); // current list apears first and a new element will add at the last of array
    setToDo("");
  };
  console.log(toDos);
  return (
    <div>
      <h1>My ToDos ({toDos.length}) </h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your todos"
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* map allows me to transform the items in a array into whatever i want 
      and it will ruturn with new array 
      [a,b,c,d].map((item) => item.toUpperCase()) = [A,B,C,D] */}
    </div>
  );
}

export default App;
