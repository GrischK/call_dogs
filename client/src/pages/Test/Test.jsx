import "./Test.css";
import { NavLink } from "react-router-dom";

function Test() {
  return (
    <div className={"w-full h-full min-h-[100vh] flex"}>
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
      <div className={"bg-background flex-1 p-6 flex flex-col"}>
        <h1 className={"textTitle text-3xl mb-8"}>Accueil</h1>
        <div className={"grid-container flex-1"}>
          <div className={"div1 bg-cardTertiary card"}></div>
          <div className={"div2 bg-cardTertiary card"}></div>
          <div className={"div3 bg-alertCard card"}></div>
          <div className={"div4 bg-white card"}></div>
          <div className={"div5 bg-white card"}></div>
          <div className={"div6 bg-white card"}></div>
        </div>
      </div>
    </div>
  );
}

export default Test;
