import React from "react";

const NoBookedClasses = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-lg shadow-md ">
      <h3 className="text-xl font-semibold text-gray-700 mb-2">
        No Booked Classes
      </h3>
      <p className="text-gray-500 text-center">
        You haven't booked any classes yet. Explore our available classes and
        book one to get started!
      </p>
    </div>
  );
};

export default NoBookedClasses;
