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
    setToDo("");
    setToDos((currentArray) => [toDo, ...currentArray]);
    // add examples in list ->
    // li=[1,2,3,4]
    // [6,li] -> return [6, array(4)]
    // [6,...li] -> return [6,1,2,3,4)]
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
    </div>
  );
}

export default App;
