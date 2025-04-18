import "./Home.css";
import Sidebar from "../../cpn/SideBar/Sidebar.jsx";
import { useEffect, useState } from "react";
import { fetchDogs } from "../../services/service.js";
import DogPaw from "../../assets/dog_paw.svg?react";
import Dogs from "../../assets/dogs.svg?react";
import Alert from "../../assets/alert.svg?react";
import InfoCard from "../../cpn/InfoCard/InfoCard.jsx";
import AlertCard from "../../cpn/AlertCard/AlertCard.jsx";

function Home() {
  const [dogs, setDogs] = useState();

  useEffect(() => {
    fetchDogs(setDogs);
  }, []);

  return (
    <div className={"w-full h-full min-h-[100vh] flex"}>
      <Sidebar />
      <div className={"bg-background flex-1 p-6 flex flex-col"}>
        <h1 className={"textTitle text-3xl mb-8"}>Accueil</h1>
        <div className={"grid-container flex-1"}>
          <InfoCard
            className={"div1"}
            icon={<DogPaw />}
            info={dogs ? dogs.length : "0"}
            purpose={"dogs"}
          />
          <InfoCard
            className={"div2"}
            icon={<Dogs />}
            info={"0"}
            purpose={"teams"}
          />
          <AlertCard
            className={"div3"}
            icon={<Alert />}
            info={"0"}
            purpose={"alerts"}
          />
          <div className={"div4 bg-white card"}></div>
          <div className={"div5 bg-white card"}></div>
          <div className={"div6 bg-white card"}></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
