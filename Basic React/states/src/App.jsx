import React from 'react'
import { useState } from 'react'

// const App = () => {
//   const [counter,setCounter ] = useState(10)
//   const increment = ()=>{
//     setCounter(counter + 1)
//   }
//   return (
//     <div>
//       {counter}
//       <button onClick={increment}>Plus</button>
//       </div>
//   )
// }

// export default App

// import { useState } from 'react'

// const App = () => {

//   const [friends,setFriend] = useState(['John','Mike','Victor'])
//   // Add Friend
//   const addFriend = ()=>{
//     return setFriend([...friends, 'Biko'])
//   };
//   // Remove Friend
//   const removeFriend = ()=>{
//     return setFriend(friends.filter(f=> f !== 'Ken'))
//   }
//   // Update Friend
//   const updateFriend = ()=>{
//     return setFriend(friends.map(f => f === 'Biko' ? 'Ithumba' : f))
//   }
//   // Update An Object
//   const [movies,setMovies] = useState({
//     title: 'Undertaker 1',
//     rating:9,
//     release_date: '20-02-2025'

//   })

//   // Update Array of Objects
//   const [Xovies,setXovies] = useState([
//     {
//       id: 2,
//       title: 'Undertaker 1',
//       rating:9,
//       release_date: '20-02-2025'
  
//     },
//     {
//       id:1,
//       title: 'Prison Break 1',
//       rating:6,
//       release_date: '20-02-2015'
  
//     }
//   ])

//   const updateObject = ()=>{
//     return setMovies({...movies, rating: 18})
//   }
//   // Update List Of Objects
//   const handleXovies = ()=>{
//     return setXovies(
//       Xovies.map((m)=> (m.id === 1 ? {...Xovies, title: 'John Wick 5'} : m))
//     )
//   }

//   return (
//     <div>
//       {friends.map((f)=>{
//         return <li key={Math.random()}>{f}</li>
//       })}
//       <button onClick={addFriend}>Add</button>
//       <button onClick={removeFriend}>Toa</button>
//       <button onClick={updateFriend}>Update Friend</button>
//       <hr />
//       <h1>Update Objects</h1>
//       <div>
//         <h1>Title {movies.title}</h1>
//         <h2>Rating {movies.rating}</h2>
//         <h2>Release Date {movies.release_date}</h2>
//       </div>
//       <button onClick={updateObject}>Update Object</button>
//       <hr />
//       <h1>Update A list of objects</h1>
//       <div>
//         {Xovies.map((m)=>(
//           <ul key={m.id}>
//             <li >Title : {m.title}</li>
//             <li >Release Date : {m.release_date}</li>
//             <li >Rating : {m.rating}</li>
//           </ul>
//         ))}
//       </div>
//       <button onClick={handleXovies}>Update List Of Objects</button>

      
//     </div>
    
//   )
// }

// export default App
// 
//SHARING STATES TO OTHER COMPONENTS
//
// import Comp1 from './components/Comp1'
// import Comp2 from './components/Comp2'
// Comp2
// function App() {
//   const [count,setCount] = useState(0)
//   return <>
//     <section>
//       <Comp1 count ={count} onClickHandler = {()=> setCount(count + 1)}/>
//     </section>
//     </>
  
// }

// export default App
import Counter from './components/Counter'
import Todo from './components/Todo'
import Profile from './components/Profile'
import Shopping from './components/Shopping'
const App = () => {
  return (
    <div>
      <Counter />
      <Todo/>
      <Profile/>
      <Shopping />
    </div>
  )
}

export default App