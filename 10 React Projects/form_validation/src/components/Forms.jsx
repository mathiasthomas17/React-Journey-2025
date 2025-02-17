import React from 'react'
import '../css/styles.css'
import { useState } from 'react'

const Forms = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPass,setConfrimPass] = useState('')

    const [errorUsername,setErrorUsername] = useState('') 
    const [errorEmail,setErrorEmail]= useState('')
    const [erroPassword,setErrorPasword] = useState('')
    const [errorConfirmPass,setErrorConfirmPas] = useState('')

    const [userColor,setUserColor]= useState('')
    const [emailColor,setEmailColor] = useState('')
    const [passwordColor,setPassWordColor] = useState('')
    const [confirmPassColor,setConfrimPassColor] = useState('')


    const validate = e =>{
        e.preventDefault()
        if(username.length > 8){
            setErrorUsername()
            setUserColor('green')
        }else{
            setErrorUsername('Username must be 8 letters or more')
            setUserColor('red')
        }

        if(email.includes('@gmail.com')){
            setErrorEmail('')
            setEmailColor('green')
        }else{
            setEmailColor('red')
            setErrorEmail('Invalid Email Address')
        }
        if(password.length > 8){
            setErrorPasword('')
            setPassWordColor('green')
        }else{
            setErrorPasword('Password Must Be 8 letters and above')
            setPassWordColor('red')
        }
        if(password === confirmPass){
            setErrorConfirmPas('')
            setConfrimPass('green')
        }else{
            setErrorConfirmPas('Sorry,Passwords do not match')
            setConfrimPassColor('red')
        }

    }

  return (
    <>
    <div className="card">
        <div className="card-image">
            
        </div>
        <form action="">
                <input type="text " placeholder='Name' style={{borderColor: userColor}} 
                value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <p className="error">
                    {errorUsername}
                </p>
                <input type="email " placeholder='Email' style={{borderColor: emailColor}} 
                value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <p className="error">
                    {errorEmail}
                </p>
                <input type="password" placeholder='password' style={{borderColor: passwordColor}}
                 value={password} onChange={(e)=>setPassword(e.target.value)} />
                 <p className="error">
                    {erroPassword}
                 </p>
                 <input type="password" placeholder='Confrim Password' style={{borderColor: confirmPassColor}}
                 value={confirmPass} onChange={e=>setConfrimPass(e.target.value)}
                 />
                 <p className="error">
                    {errorConfirmPass}
                 </p>
                 <button className="submit-btn" onClick={validate}>Submit</button>
            </form>
    </div>
    </>
  )
}

export default Forms