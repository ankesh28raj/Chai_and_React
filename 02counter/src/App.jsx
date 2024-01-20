import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//BABEL injects the code using .jsx
function App() {

  //can be provided empty value th the HOOK
  let [counter, setCounter] = useState(15)

  // let counter = 15

  const addValue = () => {
    //console.log("Clicked", counter);
    //counter += 1
    setCounter(counter + 1)
    // console.log("Value added", Math.random());
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }

  return (
    <>
   <h1>Start of the project</h1>
   <h2>Counter Value : {counter}</h2>

   <button onClick={addValue}>Add value</button>
   <button onClick={removeValue}>Remove value</button>
   <p>Footer : {counter}</p>
   </>
  )
}

export default App
