import Sidebar from "@/components/common/Sidebar";
import UpcomingClass from "../components/Upcoming Classes/UpcomingClass";
import Head from "@/components/Upcoming Classes/Head";

const UpcomingClassesPage = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10">
          <div className="p-10">
            <Head />
            <UpcomingClass />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingClassesPage;
