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

    const addDog = () => {
      fetch('http://localhost:3000/dogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: 'New Dog', breed: 'Labrador', age: 2 }),
      }).then(() => {
        // Refresh the list
        fetch('http://localhost:3000/dogs')
          .then((res) => res.json())
          .then((data) => setDogs(data));
      });
    };

    fetchData();
    addDog()
  }, []);

  console.log(data)
  console.log(dogs)


  return (
    <>
      <div>
        {data}
      </div>
    </>
  )
}

export default App
