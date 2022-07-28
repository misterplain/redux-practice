import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  todo as addTodo,
  search as searchTodo,
  filter as filterTodo,
} from "./actions/toDo";

import axios from "axios";

function App() {
  const [toDo, setToDo] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.toDo);
  const [searchInput, setSearchInput] = useState("");
  // const search = useSelector((state) => state.search);

  const fetchComments = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: "SET_COMMENTS", payload: { data: res.data } });
    } catch (err) {
      console.log("err", err);
    }
  };

  //map the data in the ui - add function
  //declare the types so that new items are added

  //integrate the logger in my previous project

  //next task
  //create a search functionality to search for data within object/array, as your typing filter the response - onchangehandler
  //use this for refernece
  //codesandbox.io/s/react-redux-filter-example-u4ftx?from-embed=&file=/src/components/Filter/Filter.js

  useEffect(() => {
    fetchComments();
  }, []);

  function resetFilter() {
    fetchComments();
    setToDo("");
    setSearchInput("");
  }

  function setSearchResults(searchItem) {
    // dispatch(searchAction({ payload: searchItem }));
    let payload = { searchItem };
    dispatch(searchTodo(payload));
    setSearchItem("");
  }

  function handleChangeText(text) {
    let payload = { searchItem:text };
    dispatch(searchTodo(payload));
    if(!text.length){
      fetchComments()
    }
    setSearchInput(text);
  }

  // console.log(todo);
  // console.log(search);

  return (
    <div className='App'>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} />{" "}
      <button
        onClick={() =>
          dispatch(addTodo({ item: toDo, userId: 10, title: toDo }))
        }
      >
        Add something
      </button>
      <hr></hr>
      <input
        value={searchItem}
        onChange={(e) => setSearchItem(e.target.value)}
      />
      <button onClick={() => setSearchResults(searchItem)}>
        Search To-Do's
      </button>
      <hr></hr>
      <input
        value={searchInput}
        onChange={(e) => handleChangeText(e.target.value)}
      />
      <hr></hr>
      <button onClick={resetFilter}>Reset Filter</button>
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
      {/* {searchItem === "" && (
        <>
          {todo.data.map((item) => {
            return <div key={item.id}> {item.title}</div>;
          })}
        </>
      )} */}
      {todo.data.map((item) => {
        return <div key={item.id}> {item.title}</div>;
      })}
    </div>
  );
}

export default App;
