import React, { useState } from "react";
import UpcomingClass from "../components/Upcoming Classes/UpcomingClass";
import Head from "@/components/Upcoming Classes/Head";
import { Dialog } from "@/components/ui/dialog";

const UpcomingClassesPage = () => {
  const [isConfirm, setIsConfirm] = useState(false);
  return (
    <>
      <div className="p-10">
        <Head />
        <UpcomingClass />
      </div>

    </>
  );
};

export default UpcomingClassesPage;
