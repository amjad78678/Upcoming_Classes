import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

const Head = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="font-semibold text-2xl">Upcoming classes</h1>
        <p className="text-gray-500">For next 7 days</p>
      </div>

      <div className="flex justify-center items-center">
        <h1 className="mx-3 text-lg text-gray-700 font-semibold inline-block">
          Booked only
        </h1>

        <input
          className="appearance-none w-5 h-5 rounded border border-gray-300"
          type="checkbox"
          name=""
          id=""
        />
       {/* <Checkbox id="terms1" /> */}
      </div>
    </div>
  );
};

export default Head;
