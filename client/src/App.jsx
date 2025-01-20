import { useEffect, useState } from "react";
import "./App.css";
import { deleteDog, getDogs } from "./services/api.ts";
import Form from "./cpn/Form.jsx";

function App() {
  const [dogs, setDogs] = useState(null);

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
  }, []);

  const handleAddDog = (newDog) => {
    setDogs((prevDogs) => [...prevDogs, newDog]);
  };

  const handleDeleteDog = async (id) => {
    try {
      await deleteDog(id);
      setDogs((prevDogs) => prevDogs.filter((dog) => dog.id !== id));
    } catch (error) {
      console.error("Error deleting dog:", error);
    }
  };

  return (
    <>
      <div>HELLO</div>
      <div className={"flex gap-4 mb-8"}>
        {dogs &&
          dogs.map((dog) => (
            <div key={dog.id}>
              <span>{dog.name}</span>
              <button onClick={() => handleDeleteDog(dog.id)}>x</button>
            </div>
          ))}
      </div>
      <Form updateDogsList={handleAddDog} />
    </>
  );
}

export default App;
