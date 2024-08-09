import React, { useState } from "react";
import { MdOutlineLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { LuFileText } from "react-icons/lu";
import { LuBarChart2 } from "react-icons/lu";

const Sidebar = () => {
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const tabLogoColor = (tab: string) => {
    if (currentTab === tab) {
      return "bg-blue-500 text-white";
    } else {
      return "bg-gray-200";
    }
  };
  return (
    <div className="flex flex-col justify-between h-full py-8 px-4">
      <div className="flex flex-col gap-10">
        <div className="bg-white flex gap-3">
          <div className="w-10 h-10 bg-gray-200"></div>
          <h1 className="text-3xl font-bold">Logo</h1>
        </div>

        <div className="flex flex-col gap-2">
          <img
            className="w-20 h-20 rounded-full"
            src="https://s3-alpha-sig.figma.com/img/c620/90c1/0348e55cb7230a23b65bb5c91a5c76ad?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ub~rope~iwDE8pVI0CFksuw3JudnZYioYF7vf54yxdQOU-O0QQMpSKoX9vZJJIk24MyjATU7~ase8gxS54kWkmqK~iu372eYfJjHXrn5n0o~8yx2cM4JdgodeLO4Gnabjy~tmQRjyBulBQp9mj9DOA5JSkR4Pf4ek2ZalaPZnWYZGohzxXN6fS1MZb5PNPYAwvkkVL-rNiVx-WtZ12tJYFQRsfgzOl3o9z9wHMhX3Mf9ktVFQfZB4nq2FpXDPgmWlQYDj1UVj4FnIUaa0GiH-NagVDyPQ51q7cnz2FVDrRULYECCeOif3jAuVzE~oJnGsI1QpEj97FvzNAZdAuTxAQ__"
            alt=""
          />
          <div>
            <h1 className="text-2xl font-semibold">John Doe</h1>
            <h2 className="text-xl text-gray-500">Intermediate</h2>
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div
            onClick={() => setCurrentTab("Dashboard")}
            className={`flex gap-2 justify-start items-center ${
              currentTab === "Dashboard" ? "font-bold" : ""
            } `}
          >
            <MdDashboard
              className={`${tabLogoColor(
                "Dashboard"
              )} text-5xl  rounded-full p-2 `}
            />
            <h1 className="text-xl">Dashboard</h1>
          </div>
          <div
            onClick={() => setCurrentTab("AllClasses")}
            className={`flex gap-2 justify-start items-center ${
              currentTab === "AllClasses" ? "font-bold" : ""
            } `}
          >
            <MdOutlinePeopleAlt
              className={`${tabLogoColor(
                "AllClasses"
              )} text-5xl  rounded-full p-2 `}
            />
            <h1 className="text-xl">All classes</h1>
          </div>
          <div
            onClick={() => setCurrentTab("Assignment")}
            className={`flex gap-2 justify-start items-center ${
              currentTab === "Assignment" ? "font-bold" : ""
            } `}
          >
            <LuFileText
              className={`${tabLogoColor(
                "Assignment"
              )} text-5xl  rounded-full p-2 `}
            />
            <h1 className="text-xl">Assignment</h1>
          </div>
          <div
            onClick={() => setCurrentTab("Perfomance")}
            className={`flex gap-2 justify-start items-center ${
              currentTab === "Perfomance" ? "font-bold" : ""
            } `}
          >
            <LuBarChart2
              className={`${tabLogoColor(
                "Perfomance"
              )} text-5xl  rounded-full p-2 `}
            />
            <h1 className="text-xl">Perfomance</h1>
          </div>
        </div>
      </div>

      <button
        onClick={() => setCurrentTab("Logout")}
        className="flex justify-start items-center gap-2 "
      >
        <MdOutlineLogout
          className={`text-4xl ${tabLogoColor("Logout")} rounded-full p-2 `}
        />

        <h1
          className={`${
            currentTab === "Logout" ? "font-bold" : ""
          } text-xl mb-1`}
        >
          Log out
        </h1>
      </button>
    </div>
  );
};
export default Sidebar;
