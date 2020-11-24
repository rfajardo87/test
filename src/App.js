import { useEffect, useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import Form from "./form";
import List from "./List";
import { getStates } from "./fakeAPI";

function filterList(list, filter, setList) {
  const tmpList = [];
  debugger;
  const filterList = list.filter((item) => {
    return item ? item.name.indexOf(filter) > -1 : false;
  });
  setList(filter ? filterList : list);
}

function App() {
  const [storeList,setStoreList] = useState([]);
  const [displayList, setDisplayList] = useState([]);
  const [hasItems, setHasItems] = useState(false);
  useEffect(() => {
    if(!hasItems){
    getStates()
      .then((results) => {
        setStoreList(results);
        setDisplayList(results);
        setHasItems(true);
      })
      .catch((error) => console.log(error));
    }
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
      <Form list={storeList} filterList={filterList} setList={setDisplayList} />
      {hasItems && <List listFilter={displayList} />}
    </div>
  );
}

export default App;
