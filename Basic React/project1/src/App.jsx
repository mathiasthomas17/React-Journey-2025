import React from 'react'
import UserList from './components/UserList';
import Products from './components/products';


const students = [
  { name: 'Alice', age: 18, course: 'Computer Science', school: 'University A' },
  { name: 'Bob', age: 19, course: 'Engineering', school: 'University B' },
  { name: 'Charlie', age: 20, course: 'Business', school: 'University C' },
  { name: 'David', age: 18, course: 'Arts', school: 'University A' },
  { name: 'Eve', age: 19, course: 'Medicine', school: 'University B' },
  { name: 'Frank', age: 20, course: 'Law', school: 'University C' }
];

console.log(students);
const App = () => {
  return (
    <main>
      {students.map(({name,age,course,school})=>(
        <ul key={Math.random()}>
          <li>{name}</li>
          <li>{age}</li>
          <li>{course}</li>
          <li>{school}</li>
          
        </ul>
      ))}
      <hr />
      <UserList/>
      <hr />
      <Products/>
    </main>
  )
}

export default App