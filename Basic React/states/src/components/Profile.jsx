import React, { useState } from 'react'

const Profile = () => {
    const [profile,setProfile] = useState({
        name:'',
        age:''
    })
    const handlePrifleChnge = (e)=>{
        const {name,value} = e.target 
        setProfile((prevProfile) => ({
            ...prevProfile,
            [name]:value
        }))
    }
  return (
    <div><h2>Profile</h2>
    <label>Name: 
        <input type="text" name="name" value={profile.name} onChange={handlePrifleChnge}/>
    </label>
    <label >Age: 
        <input type="text" name="age" value={profile.age} onChange={handlePrifleChnge}/>
    </label>
    <h2>Profile Info</h2>
    <p>Name: {profile.name}</p>
    <p>Age {profile.age}</p>
    </div>
  )
}

export default Profile