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
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
dayjs.extend(isToday);
import advancedFormat from "dayjs/plugin/advancedFormat";
dayjs.extend(advancedFormat);

const UpcomingClass = () => {
  const { staffDetails } = useSelector((state: RootState) => state.appData);

  const dispatch = useDispatch();
  useEffect(() => {
    const interval = setInterval(() => {
      staffDetails.forEach((staff, index) => {
        if (staff.isBooked && staff.timerEndTime > Date.now()) {
          const timeRemaining = Math.max(
            0,
            Math.floor((staff.timerEndTime - Date.now()) / 1000)
          );

          dispatch(updateTimer({ userId: staff.id, timeRemaining }));
        } else if (!staff.isBooked && staff.isLive) {
          // Updating live time if the class is live
          const timeLive = Math.floor(
            (Date.now() - staff.classStartTime) / 1000
          );
          dispatch(updateLiveTime({ userId: staff.id, timeLive }));
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch, staffDetails]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  // Calculating the total pages
  const totalPages = Math.ceil(staffDetails.length / itemsPerPage);
  // Determine the items to be shown on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = staffDetails.slice(indexOfFirstItem, indexOfLastItem);

  // Function to change the page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="my-4">
      <table className="w-full border-collapse border-b mb-4">
        <thead>
          <tr className="text-gray-500 text-lg bg-gray-100 text-start">
            <th className="py-4 px-8 text-start">Class name</th>
            <th className="py-4 px-8 text-start">Staff name</th>
            <th className="py-4 px-8 text-start">Actions</th>
          </tr>
        </thead>

        <tbody className="">
          {currentItems.map((data, index) => (
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
                    userId={data.id}
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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={() => paginate(Math.max(1, currentPage - 1))}
            />
          </PaginationItem>

          {[...Array(totalPages)].map((_, index) => (
            <PaginationItem key={index}>
              <PaginationLink
                className={
                  currentPage === index + 1
                    ? "bg-blue-500 text-white hover:bg-blue-400 hover:text-white"
                    : ""
                }
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem></PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default UpcomingClass;
