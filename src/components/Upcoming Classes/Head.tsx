import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { setStaffDetails } from "@/store/slices/appSlice";
import StaffDetails from "@/interfaces/iClassData";

const Head = () => {
  const { staffDetails } = useSelector((state: RootState) => state.appData);
  const [checked, setChecked] = useState(false);
  const [originalStaffDetails, setOriginalStaffDetails] = useState<StaffDetails[]>([]);
  const dispatch = useDispatch();
  const handleBookedFilter = () => {
    setChecked(!checked);

    if (!checked) {
      setOriginalStaffDetails(staffDetails);

      const filteredStaffDetails = staffDetails.filter(
        (staff) => staff.isLive || staff.isBooked
      );

      dispatch(setStaffDetails(filteredStaffDetails));
    } else {
      dispatch(setStaffDetails(originalStaffDetails));
    }
  };

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

        <Checkbox
          onClick={handleBookedFilter}
          className="rounded-md p-3 border border-gray-300 bg-transparent"
        />
      </div>
    </div>
  );
};

export default Head;
