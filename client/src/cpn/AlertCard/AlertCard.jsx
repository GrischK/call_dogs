const AlertCard = ({ icon, info, purpose, className }) => {
  return (
    <div
      className={`${className} bg-alertCard card flex flex-col items-center justify-center gap-3`}
    >
      <div className={"w-[50px] h-[50px] text-alert"}>{icon}</div>
      <span className={"font-bold text-3xl text-textSubtitle"}>{info}</span>
      <p className={"font-medium text-3xl text-textSubtitle"}>{purpose}</p>
    </div>
  );
};

export default AlertCard;
