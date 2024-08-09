import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import JoinButton from "./JoinButton";
import BookNowButton from "./BookNowButton";
import TimerButton from "./TimerButton";
import { updateLiveTime, updateTimer } from "@/store/slices/appSlice";
import { formatTime } from "@/utils/formatTime";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
dayjs.extend(isToday);
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const UpcomingClass = () => {
  const { staffDetails } = useSelector((state: RootState) => state.appData);
  const dispatch = useDispatch();
  const [durationBook] = useState<number>(10);
  useEffect(() => {
    const interval = setInterval(() => {
      staffDetails.forEach((staff, index) => {
        if (staff.isBooked && staff.timerEndTime > Date.now()) {
          const timeRemaining = Math.max(
            0,
            Math.floor((staff.timerEndTime - Date.now()) / 1000)
          );

          dispatch(updateTimer({ classIndex: index, timeRemaining }));
        } else if (!staff.isBooked && staff.isLive) {
          // Updating live time if the class is live
          const timeLive = Math.floor(
            (Date.now() - staff.classStartTime) / 1000
          );
          dispatch(updateLiveTime({ classIndex: index, timeLive }));
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, staffDetails]);

  return (
    <div className="my-4">
      <table className="w-full border-collapse border-b">
        <thead>
          <tr className="text-gray-500 text-lg bg-gray-100 text-start">
            <th className="py-4 px-8 text-start">Class name</th>
            <th className="py-4 px-8 text-start">Staff name</th>
            <th className="py-4 px-8 text-start">Actions</th>
          </tr>
        </thead>

        <tbody className="">
          {staffDetails.map((data, index) => (
            <tr key={data.id} className="border-b">
              <td className="py-4 px-2 ">
                <div className="flex gap-4">
                  <div className="w-10 h-10 flex justify-center items-center">
                    <span>{data.id}</span>
                  </div>
                  <div className=" flex flex-col justify-center items-start">
                    <span className="font-bold">{data.className}</span>
                    {data.isLive ? (
                      <div className="">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                        <span className="text-red-500">
                          Live
                          <span className="text-gray-400">
                            ({formatTime(data.timeLive)})
                          </span>
                        </span>
                      </div>
                    ) : dayjs(data.classTime).isToday() ? (
                      <p>Today {dayjs(data.classTime).format("h:mm A")}</p>

                    ) : (
                      <p>{dayjs(data.classTime).format("Do MMMM hA")}</p>
                    )}
                  </div>
                </div>
              </td>
              <td className="py-4 px-2 ">
                <div className="flex gap-4 justify-start items-center">
                  <div>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </div>
                  <div>
                    <span>{data.staffName}</span>
                    <div>
                      <p className="text-gray-400">Additional details</p>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {data.isBooked && data.timeRemaining > 0 ? (
                  <TimerButton {...{ timeRemaining: data.timeRemaining }} />
                ) : data.isLive && data.timeRemaining === 0 ? (
                  <JoinButton />
                ) : (
                  <BookNowButton
                    classIndex={index}
                    timerDuration={Math.max(
                      0,
                      dayjs(data.classTime).diff(dayjs(), "second")
                    )}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingClass;
