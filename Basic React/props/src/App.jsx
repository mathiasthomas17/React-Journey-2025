import React from 'react'
import UserStatus from './components/UserStatus'
// import Users from './components/Users'
import Person from './components/Person'
import Product from './components/Product'
import Weather from './components/Weather'
import Greeting from './components/Greeting'
import { GoMortarBoard } from "react-icons/go";
import StyleCards from './components/StyleCards'
import Events from './components/Events'

import './index.css'

const App = () => {
  return (
    <div style={{backgroundColor:'black',padding:'2rem'}}>
      {/* <Users name = 'Mathias'/> */}
      <Person person = 'mutavi' age = '30'/>
      <Product name = 'Phone' price = '100'/>
      <Weather temp={16} />
      <UserStatus Logedin = {true} Admin = {false}/>
      <Greeting timeOfDay = 'Afternoon'/>
      <GoMortarBoard />
      <StyleCards />
      <Events />

    </div>
  )
}

// const Users = (props) => {
//   return (
//     <div>
//       <h1>Name: {props.name}</h1>
//     </div>
//   )
// }

export default App