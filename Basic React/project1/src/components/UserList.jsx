import React from 'react'
const users = [
    {id:1,names:'mathias', age:70},
    {id:2,names:'Ben', age:29},
    {id:3,names:'Mnjos', age:26},
]
const UserList = () => {
  return (
    <div>
        {users.map((uxer)=>(
            <ul key={uxer.id}>
                <li>{uxer.names}</li>
                <li>{uxer.age}</li>
            </ul>
        ))}
    </div>
  )
}

export default UserList