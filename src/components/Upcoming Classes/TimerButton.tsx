import { formatDuration } from "@/utils/formatTime";
import React from "react";
import { LuClock } from "react-icons/lu";

const TimerButton = ({ timeRemaining }) => {
  return (
    <button className="py-4 px-2  flex justify-start items-center">
      <div className=" rounded-lg py-2 px-4 text-blue-500">
        <div className="flex justify-center items-center gap-2">
          <span className="font-bold">{formatDuration(timeRemaining)}</span>
          <span>
            <LuClock className="text-xl" />
          </span>
        </div>
      </div>
    </button>
  );
};

export default TimerButton;
