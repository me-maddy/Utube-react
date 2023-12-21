const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center my-1 lg:my-1.5 gap-x-1.5 lg:gap-x-2.5">
      <img
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        alt="User"
        className="h-8 cursor-pointer"
      />
      <span className="text-xs lg:text-sm font-semibold">{name}</span>
      <span className="text-sm lg:text-base font-normal ml-2 lg:ml-4">
        {message}
      </span>
    </div>
  );
};

export default LiveChatMessage;
