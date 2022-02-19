import './App.css'
import Card from './card';
import CardA from './cardA';
import Form from './Form';
import Hooks from './Hooks';

function App(){
  const employees = [
    {name: 'Ashwitha', role: 'Full stack Developer'},
    {name: 'Ashwini', role: 'Full stack Developer'},
    {name: 'Meghana', role: 'Full stack Developer'},
    {name: 'Manju', role: 'Full stack Developer'},
    {name: 'Shivu', role: 'Full stack Developer'},
  ];
  const shouldShow = true;

//   function changeHandler(event){
//     console.log(event.target.value);
// }
  return (
   <div>
     {/* condition with else option */}
      { shouldShow ? <h1>Hello World</h1> : "" }
     {/* there is no else condition */}
      { shouldShow && <h1>Hello World</h1> }

      {/* <Card name="Ashwitha" role="Full Stack Developer"/> */}
      {/* <CardA /> */}
      {/* sol 1 */}
      {employees.map((e) => (
        e.name != 'Meghana' ? <Card name={e.name} role={e.role} /> : ''
      ))}
      <p>Best Approach</p>
      {/* sol 2 */}
      {employees.filter(e => e.name != 'Meghana').map((e) => (
        e.name != 'Meghana' ? <Card name={e.name} role={e.role} /> : ''
      ))}

      {/* <input onChange={changeHandler} type="text" /> */}
      <Form />
      <Hooks />
   </div>
  )
}

export default App;


/* import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
 */