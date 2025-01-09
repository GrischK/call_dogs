import {useEffect, useState} from 'react'
import './App.css'
import {appTest} from "./services/api.ts";

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState()

  useEffect(() => {
    appTest()
  }, []);

  console.log(data)

  return (
    <>
      <div>
        HELLO WORLD !
        BX
      </div>
    </>
  )
}

export default App
