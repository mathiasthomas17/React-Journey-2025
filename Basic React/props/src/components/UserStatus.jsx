import React from 'react'

const UserStatus = (props) => {
  if(props.Logedin && props.Admin){
    return <h2>Welcome Admin</h2>
  }else{
    return <h1>Welcom</h1>
  }
}

export default UserStatus