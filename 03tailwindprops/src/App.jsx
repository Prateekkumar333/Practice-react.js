import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'




function App() {
  const [count, setCount] = useState(0)
  let myObject = {
    username: "prateek",
    age: 21
  }
  let newArr = [1,2,3]

  return (
    <> 
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      <Card userName="chaiaurcode" btnText="click me" />
      <Card userName="Prateek" />
    </>
  )
}

export default App
