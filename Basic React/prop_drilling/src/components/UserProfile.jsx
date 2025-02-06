import { UserContext } from "../UserContect";
import { useContext } from "react";

import UserProfile from 'react'

function UserrProfile() {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1>User Profile</h1>
        <p>Name: {user.name}</p>
    </div>
  )
}

export default UserrProfile