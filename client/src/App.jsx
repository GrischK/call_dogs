import { useEffect, useState } from "react";
import "./App.css";
import { appTest, getDogs } from "./services/api.ts";
import Form from "./cpn/Form.jsx";

function App() {
  const [data, setData] = useState(null);
  const [dogs, setDogs] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await appTest();
        const textData = await response.text();
        setData(textData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    const fetchDogs = async () => {
      try {
        const response = await getDogs();
        const dogsData = await response.json();
        setDogs(dogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDogs();
    fetchData();
  }, []);

  console.log(data);
  console.log(dogs);

  return (
    <>
      <div>{data}</div>
      <div>HELLO</div>
      <div>{dogs && dogs.map((dog) => <div key={dog.id}>{dog.name}</div>)}</div>
      <Form />
    </>
  );
}

export default App;
