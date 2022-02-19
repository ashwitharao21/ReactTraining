import { useState } from 'react';
import Card from './card';
import './App.css'

function Form(){

    const [name, setName] = useState('Ashwitha');
    const [role, setRole] = useState('Developer');

    function changeName(event){
        setName(event.target.value);
        console.log(name);
    }
    function changeRole(event){
        setRole(event.target.value);
        console.log(name);
    }
  return (
      <div>
        Name :<input onChange={changeName} type="text" value={name} />
        Role :<input onChange={changeRole} type="text" value={role} />
        {/* <h2>Welcome, {name}</h2>
        <h2>Role, {role}</h2> */}
        <Card name={name} role={role} />
      </div>
  )
}

export default Form;
