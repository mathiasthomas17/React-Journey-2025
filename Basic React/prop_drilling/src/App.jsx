import React from 'react'
import { createContext } from 'react'
import CompA from './components/CompA'
import CompC from './components/compC'
import UserrProfile from './components/UserProfile'

export const Data = createContext()
export const Data1 = createContext()


const App = () => {
  const name = 'Tomki'
  const age = 30
  return (
   
      <div>
        {/* <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <CompC />
        </Data1.Provider>
        </Data.Provider> */}
        <UserrProfile/>
      </div>
    
  )
}

export default App