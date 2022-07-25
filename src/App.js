import logo from "./logo.svg";
import { useState, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {todo, search} from "./actions/toDo";

import axios from "axios";

function App() {
  const [toDo, setToDo] = useState("");
  const [searchItem, setSearchItem] = useState("");
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.toDo);
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

  function setSearchResults(searchItem) {
    setSearchItem("");
    // dispatch(searchAction({ payload: searchItem }));
    dispatch({ type: "SEARCH_LIST", payload: searchItem });
  }

  // console.log(todo);
  // console.log(search);

  return (
    <div className='App'>
      <input value={toDo} onChange={(e) => setToDo(e.target.value)} />      <button
        onClick={() =>
          dispatch(todo({ item: toDo, userId: 10, title: toDo }))
        }
      >
        Add something
      </button>
      <hr></hr>
      <input value={searchItem} onChange={(e)=>setSearchItem(e.target.value)} />
      <button
        onClick={() =>
          setSearchResults(searchItem)
        }
      >
        Search To-Do's
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
