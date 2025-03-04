import './App.css';
import React from 'react';
import { useState } from 'react';
// import Homework1 from './Homework1';

function App() {
const [st2,setSt2] = useState(false);
const [st5,setSt5] = useState(0);
const [st6,setSt6] = useState();
const [st9,setSt9]  = useState();
const [st10,setSt10] = useState([]);
   let count4 = 0;

  function task1() {
         console.log('task1')
         
  }
  function task2() {

  }
  function task3(e) {
      console.log(e.target.value);
      
  }
  function task4() {
      console.log(count4++);
      
  }
  function task5(e) {

     setSt5(e.target.checked ? e.target.value : 0);
  }
  function task6(e) {
   setSt6(e.target.value);
  }
  function task7() {

  }
  function task8() {

  }
  function task9(e) {
     setSt9(e.target.value);
  }
  let ar10 = [5, 6, 7];
  function task10(e) {
      ar10.push(Number(e.target.value));
      console.log(ar10);
      
  }

  return (
    <>
    {/* <Homework1 /> */}
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1} >Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div className="task-2" onMouseEnter={task2} ></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onChange={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4" onClick={task4} >Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" value="55" onChange={task5}/>
        <div className="out-5"> {st5} </div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6" onChange={task6} >
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
        <div className="out-6"> {st6} </div>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button className="task-7">Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9" onChange={task9} ></input>
        <div className="out-9"> {st9} </div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10" onClick={task10}  ></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
