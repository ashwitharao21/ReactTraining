import { useState } from 'react';
import './App.css'

function Hooks(){
  
    let [count, setcount] = useState(0);
    let [count1, setcount1] = useState(0);
    function increment(){
        // we are using state to increment the count
        // so that if you want latest value of count you have to use setcount with function increment (c) => c + 1 inside setcount
        setcount((c) => c + 1);
        if(count % 5 == 0){
            setcount1((c) => c + 1);
        }
        // count = count - 1;
        console.log('increment');
    }

    function decrement(){
        setcount((c) => c - 1);
        // best approach
        // setcount1(Math.floor(count + 1/5));
        
        if(count % 5 == 0){
            setcount1((c) => c - 1);
        }
        // count = count + 1;
        console.log('decrement');
    }

    function incremet1Sec(){
        setTimeout(increment, 2000);
        /* setTimeout(() => {
            setcount((c) => c + 1);
        }, 2000); */
    }


  return (
   <div>
       <button onClick={increment}>Increment</button>
       <button onClick={decrement}>Decrement</button>
       <button onClick={incremet1Sec}>Increment Async</button>
      <h3> {count}</h3>
      {count >= 10 && <h2> Hurray! we reached our goal</h2>}
      <h2> {count1}</h2>
   </div>
  );
}

export default Hooks;
