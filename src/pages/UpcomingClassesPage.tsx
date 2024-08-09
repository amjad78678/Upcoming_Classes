import Sidebar from "@/components/common/Sidebar";
import UpcomingClass from "../components/Upcoming Classes/UpcomingClass";
import Head from "@/components/Upcoming Classes/Head";
import Navbar from "@/components/common/Navbar";

const UpcomingClassesPage = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10">
          <Navbar />
          <div className="px-10">
            <Head />
            <UpcomingClass />
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingClassesPage;
