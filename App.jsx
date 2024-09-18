import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import One from './components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
function App() {
  return (
    <>
    <div className='container'>
    <One/>
    <Two/>
    <Three/>
    <Four/>
    <Five/>
    <button type="button" class="btn btn-primary">
      Generate TestCases
    </button>
    </div>
    </>
  )
}

export default App
