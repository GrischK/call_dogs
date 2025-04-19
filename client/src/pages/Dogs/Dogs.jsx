import { useEffect, useState } from "react";
import "./Dogs.css";
import { deleteDog, getDogs } from "../../services/api.js";
import Form from "../../cpn/Form.jsx";
import Card from "../../cpn/Card/Card.tsx";
import Sidebar from "../../cpn/SideBar/Sidebar.jsx";

function Dogs() {
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

  console.log(dogs);

  return (
    <div className={"w-full h-full min-h-[100vh] flex overflow-hidden"}>
      <Sidebar />
      <div className={"bg-background flex-1 p-6 flex flex-col"}>
        <div>CALL DOGS</div>
        <div className={"flex flex-col gap-4 mb-8 flex-wrap justify-start"}>
          {dogs &&
            dogs.map((dog) => (
              <Card
                key={dog.id}
                name={dog.name}
                role={dog.role}
                age={dog.age}
                onButtonClick={() => handleDeleteDog(dog.id)}
              />
            ))}
        </div>
        <Form updateDogsList={handleAddDog} />
      </div>
    </div>
  );
}

export default Dogs;
