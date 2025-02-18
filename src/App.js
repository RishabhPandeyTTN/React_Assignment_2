import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import IncDec from './components/IncDec';
import Child from './components/Child';
import ToDoList from './components/ToDoList';
import LoginComp from './components/LoginComp';
import { useState } from 'react';

function App() {

  const [msg , setMsg] = useState("Rishabh Pandey")
  const [login , setLogIn] = useState(false)
  return (
    <div className="App">
      
      <div>
        <h2>This is Counter</h2>
        <Counter></Counter>
      </div>

      <hr></hr>

      <div>
        <h2>This is Incrementor and Decrementor</h2>
        <IncDec></IncDec>
      </div>

      <hr></hr>

      <div>
        <h2>This is Parent and Child</h2>
        <Child msg={msg}></Child>
      </div>

      <hr></hr>

      <div>
        <h2>This is ToDo List</h2>
        <ToDoList></ToDoList>
      </div>

      <hr></hr>

      <div>
        <h2>This is Login Component</h2>
        <LoginComp login={login} setLogIn={setLogIn}></LoginComp>
      </div>
    </div>
  );
}

export default App;
