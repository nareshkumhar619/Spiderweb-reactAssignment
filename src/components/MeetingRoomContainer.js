const MeetingRoomContainer = ({ roomName }) => {
  return (
    <div className="self-stretch rounded-xl bg-gray-500 shadow-[0px_0px_30px_rgba(209,_117,_182,_0.2)] overflow-hidden flex flex-col items-start justify-center p-[1rem] text-left text-[1.25rem] text-white font-kanit border-[1px] border-solid border-pink">
      <div className="self-stretch flex flex-col items-start justify-center">
        <div className="self-stretch flex flex-row items-center justify-start gap-[0rem_0.625rem]">
          <div className="relative font-medium">{roomName}</div>
          <img
            className="w-[1rem] relative h-[1rem]"
            alt=""
            src="/star-21.svg"
          />
          <div className="relative text-[1rem] font-light text-pink">
            12 Positions
          </div>
        </div>
        <div className="self-stretch relative text-[0.75rem] font-light">
          Start from 12 Jan, 2023 - Ends at 15 Jan, 2023
        </div>
      </div>
    </div>
  );
};

export default MeetingRoomContainer;
