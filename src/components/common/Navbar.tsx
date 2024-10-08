import {motion} from 'framer-motion'
const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.5 }}
     className="px-10 py-5 flex flex-col">
      <div className="flex justify-start items-center ">
        <div className=" flex gap-6 text-gray-400">
          <h1>Blogs</h1>
          <h1>News</h1>
          <h1>Help center</h1>
          <h1>Customer care</h1>
        </div>
      </div>
      <div className="flex justify-start items-center">
        <h1 className="font-bold text-4xl mt-4">Dashboard</h1>
      </div>
    </motion.div>
  );
};

export default Navbar;
