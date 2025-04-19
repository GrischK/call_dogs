import { NavLink } from "react-router-dom";
import DogPaw from "../../assets/dog_paw.svg?react";
import Dogs from "../../assets/dogs.svg?react";
import Alert from "../../assets/alert.svg?react";

const SideBar = () => {
  return (
    <div className={"w-1/5 bg-primary flex flex-col py-6 gap-8"}>
      <NavLink
        to={"/"}
        className={"uppercase font-bold text-3xl text-white px-6"}
      >
        Call dogs
      </NavLink>
      <NavLink
        to={"/dogs"}
        className={
          "uppercase font-semibold text-2xl text-white hover:bg-[#243F52] px-6 flex gap-4 items-center"
        }
      >
        <div className={"w-[20px] h-[20px] text-white"}>
          <DogPaw />
        </div>
        dogs
      </NavLink>
      <NavLink
        to={"/teams"}
        className={
          "uppercase font-semibold text-2xl text-white hover:bg-[#243F52] px-6 flex gap-4 items-center"
        }
      >
        <div className={"w-[20px] h-[20px] text-white"}>
          <Dogs />
        </div>
        teams
      </NavLink>
      <NavLink
        text-2xl
        to={"/planning"}
        className={
          "uppercase font-semibold text-2xl text-white hover:bg-[#243F52] px-6 flex gap-4 items-center"
        }
      >
        <div className={"w-[20px] h-[20px] text-white"}>
          <Dogs />
        </div>
        planning
      </NavLink>
      <NavLink
        to={"/alerts"}
        className={
          "uppercase font-semibold text-2xl text-white hover:bg-[#243F52] px-6 flex gap-4 items-center"
        }
      >
        <div className={"w-[20px] h-[20px] text-white"}>
          <Alert />
        </div>
        alerts
      </NavLink>
    </div>
  );
};

export default SideBar;
