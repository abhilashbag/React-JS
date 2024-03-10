import { useState } from 'react'
import UserContextProvider from './context/UserContextProvider'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 

  return (
    <UserContextProvider value>
    <h1>Handle with care</h1>
    <Login/>
    <Profile/>
    </UserContextProvider>
  )
}

export default App
