import {useEffect, useState} from 'react'
import './App.css'
import {appTest} from "./services/api.ts";

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await appTest();
        const textData = await response.text();
        setData(textData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  console.log(data)

  return (
    <>
      <div>
        {data}
      </div>
    </>
  )
}

export default App
