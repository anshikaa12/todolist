import TodoCard from './TodoCard';
import './App.css';
import { useState, useEffect } from 'react';
import { db } from './firebase_config';
import firebase from 'firebase/app';
import 'firebase/firestore';
function App() {
  const [inputTodo, setinput] = useState("");
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    getTodo();
  }, [])
  function addTodo() {
    db.collection("todo").add({
      task: inputTodo,
      inProgress: true,
      time: firebase.firestore.FieldValue.serverTimestamp(),

    });
    setinput("");
  }

  function getTodo() {
    db.collection("todo").onSnapshot(function (querrySnapshot) {
      setTodoList(querrySnapshot.docs.map((doc) => ({
        id: doc.id,
        todo: doc.data().task,
        inProgress: doc.data().inProgress,

      })));
    });
  }
  return (
    <div className="App">
      <h1>Anshika's Todo List</h1>
      <div className="forms">
        <input
          type="text"
          onChange={(e) => {
            setinput(e.target.value);
          }
          }
          value={inputTodo}
        ></input>
        <button className="btn-form"
          onClick={addTodo}
        >ADD</button>
      </div>
      <div className="TodoList">
        {todoList.map((todo) => (
          <TodoCard id={todo.id} task={todo.todo} inProgress={todo.inProgress} />
        ))}
      </div>

    </div >
  );
}

export default App;
