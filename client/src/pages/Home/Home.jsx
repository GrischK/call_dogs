import "./Home.css";
import Sidebar from "../../cpn/SideBar/Sidebar.jsx";
import { useEffect, useState } from "react";
import { fetchDogs } from "../../services/service.js";
import DogPaw from "../../assets/dog_paw.svg?react";
import Dogs from "../../assets/dogs.svg?react";
import Alert from "../../assets/alert.svg?react";
import InfoCard from "../../cpn/InfoCard/InfoCard.jsx";
import AlertCard from "../../cpn/AlertCard/AlertCard.jsx";
import ActivityCard from "../../cpn/ActivityCard/ActivityCard.jsx";

function Home() {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    fetchDogs(setDogs);
  }, []);

  return (
    <div className={"w-full h-full min-h-[100vh] flex"}>
      <Sidebar />
      <div className={"bg-background flex-1 p-6 flex flex-col"}>
        <h1 className={"textTitle font-bold text-3xl mb-8 text-primary"}>
          Accueil
        </h1>
        <div className={"grid-container flex-1"}>
          <InfoCard
            className={"div1"}
            icon={<DogPaw />}
            info={dogs.length.toString()}
            purpose={"Dogs"}
          />
          <InfoCard
            className={"div2"}
            icon={<Dogs />}
            info={"0"}
            purpose={"Teams"}
          />
          <AlertCard
            className={"div3"}
            icon={<Alert />}
            info={"0"}
            purpose={"Alerts"}
          />
          <div className={"div4 bg-white card"}></div>
          <ActivityCard purpose={"Weather"} className={"div5"} />
          <ActivityCard purpose={"Last activities"} className={"div6"} />
        </div>
      </div>
    </div>
  );
}

export default Home;
