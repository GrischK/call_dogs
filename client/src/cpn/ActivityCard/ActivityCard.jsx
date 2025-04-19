const ActivityCard = ({ icon, info, purpose, className }) => {
  return (
    <div
      className={`${className} bg-white card flex flex-col items-center justify-center gap-3`}
    >
      <div className={`flex flex-col items-center justify-center gap-3`}>
        <p className={"font-medium text-3xl text-textSubtitle"}>{purpose}</p>
        <div className={"w-[50px] h-[50px] text-alert"}>{icon}</div>
      </div>
    </div>
  );
};

export default ActivityCard;
