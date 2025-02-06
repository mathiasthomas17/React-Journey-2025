import React from 'react'
import { Data } from '../App'
import { Data1 } from '../App'
import { useContext } from 'react'

const CompC = () => {
  const username = useContext(Data)
  const Age = useContext(Data1)
  return (
    <h1>
        My name is {username} and iam am {Age} years old
    </h1>
  )
}

export default CompC