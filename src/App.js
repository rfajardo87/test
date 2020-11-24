import { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Form  from "./form";
import  List  from "./List";
import { getStates } from "./fakeAPI";

function filterList(list, filter, setList) {
  const tmpList = [];
  debugger;
  if (filter) {
    list.filter((item) => {
      return item ? item.name.indexOf(filter) > -1: false;
    });
  }
  setList(tmpList);
}


function App() {
  const [list,setList] = useState([]);
  const [filterData, setFilterData] = useState("");
  useEffect(()=>{
    getStates().then(results => setList(results)).catch(error => console.log(error));
  });

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
      <Form list={list} filterList={filterList} setList={setList}/>
      {list.lenght>0&&<List listFilter={list||[]} />}
    </div>
  );
}

export default App;
