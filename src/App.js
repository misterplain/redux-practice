import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import todoAction from "./actions/toDo";
import axios from "axios";

function App() {
  const [toDo, setToDo] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.toDo);

  const fetchComments = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: "SET_COMMENTS", payload: { data: res.data } });
    } catch (err) {
      console.log("err", err);
    }
  };

  console.log({ todo });

  //map the data in the ui - add function
  //declare the types so that new items are added

  //integrate the logger in my previous project

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className='App'>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} />
      <button onClick={() => dispatch(todoAction({ item: toDo, userId: 10, title: toDo }))}>
        Add something
      </button>
      <h1>MAP THE DATA IN THE UI</h1>
      {/* {toDo.keys(todo.id).map((key, index) => {
        return (
          <div key={index}>
            <h1>
              {key}:{todo.id[key]}
            </h1>
          </div>
        );
      })} */}
      {todo.data.map((item)=>{
        return(
          <div key={item.id}> {item.title}</div>
        )
      })}
    </div>
  );
}

export default App;
