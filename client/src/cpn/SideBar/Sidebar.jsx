import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className={"w-1/5 bg-primary flex flex-col p-6 gap-6"}>
      <NavLink to={"/"} className={"uppercase text-white"}>
        Call dogs
      </NavLink>
      <NavLink to={"/dogs"} className={"uppercase text-white"}>
        dogs
      </NavLink>
      <NavLink to={"/teams"} className={"uppercase text-white"}>
        teams
      </NavLink>
      <NavLink to={"/planning"} className={"uppercase text-white"}>
        planning
      </NavLink>
      <NavLink to={"/alerts"} className={"uppercase text-white"}>
        alerts
      </NavLink>
    </div>
  );
};

export default SideBar;
