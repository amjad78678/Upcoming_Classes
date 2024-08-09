import Sidebar from "@/components/common/Sidebar";
import UpcomingClass from "../components/Upcoming Classes/UpcomingClass";
import Head from "@/components/Upcoming Classes/Head";
import Navbar from "@/components/common/Navbar";
import { motion } from "framer-motion";

const UpcomingClassesPage = () => {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-10 ">
          <Navbar />
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="px-10 bg-white"
          >
            <Head />
            <UpcomingClass />
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default UpcomingClassesPage;
