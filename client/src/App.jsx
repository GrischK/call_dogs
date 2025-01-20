import { useEffect, useState } from "react";
import "./App.css";
import { getDogs } from "./services/api.ts";
import Form from "./cpn/Form.jsx";

function App() {
  const [dogs, setDogs] = useState(null);
  const [isNewDog, setIsNewDog] = useState(false);

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const dogsData = await getDogs();
        setDogs(dogsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchDogs();
    setIsNewDog(false);
  }, [isNewDog]);

  console.log(dogs);

  return (
    <>
      <div>HELLO</div>
      <div>{dogs && dogs.map((dog) => <div key={dog.id}>{dog.name}</div>)}</div>
      <Form updateDogsList={() => setIsNewDog(true)} />
    </>
  );
}

export default App;
