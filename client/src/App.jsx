import {useEffect, useState} from 'react'
import './App.css'
import {appTest, getDogs} from "./services/api.ts";

function App() {
  const [count, setCount] = useState(0)
  const [data, setData] = useState(null)
  const [dogs, setDogs] = useState(null)

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

    const fetchDogs = async () => {
      try {
        const response = await getDogs();
        const textData = await response.json();
        setDogs(textData);
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
