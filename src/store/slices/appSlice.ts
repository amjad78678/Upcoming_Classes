import StaffDetails from "@/interfaces/iClassData";
import classData from "@/utils/classData";
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    staffDetails: classData,
  },
  reducers: {
    setStaffDetails: (state, action) => {
      state.staffDetails = action.payload;
    },
    //Updating the staff timer for a specific user.
    setStaffTimer: (state, action) => {
      const { userId, timerDuration } = action.payload;
      const currentTime = Date.now();
      const timerEndTime = currentTime + timerDuration * 1000;
      const staffIndex = state.staffDetails.findIndex(
        (staff: StaffDetails) => staff.id === userId
      );

      console.log("iam staffIndex", staffIndex);

      if (staffIndex !== -1) {
        state.staffDetails[staffIndex] = {
          ...state.staffDetails[staffIndex],
          isBooked: true,
          timerEndTime,
          timeRemaining: timerDuration,
          isLive: false,
          classStartTime: 0,
          timeLive: 0,
        };
      }
    },

    //For running the timer for a specific user.
    updateTimer: (state, action) => {
      const { userId, timeRemaining } = action.payload;
      const staffIndex = state.staffDetails.findIndex(
        (staff: StaffDetails) => staff.id === userId
      );
      const staff = state.staffDetails[staffIndex];

      if (timeRemaining <= 0 && !staff.isLive) {
        // Timer has ended, starting the class as live
        staff.isBooked = false;
        staff.isLive = true;
        staff.classStartTime = Date.now();
        staff.timeRemaining = 0;
      } else if (!staff.isLive) {
        staff.timeRemaining = timeRemaining;
      }
    },
    
    //For running the live time for a specific staff member.
    updateLiveTime: (state, action) => {
      const { userId, timeLive } = action.payload;
      const staffIndex = state.staffDetails.findIndex(
        (staff: StaffDetails) => staff.id === userId
      );
      state.staffDetails[staffIndex].timeLive = timeLive;
    },
  },
});

export const { setStaffTimer, updateTimer, updateLiveTime, setStaffDetails } =
  appSlice.actions;
export default appSlice.reducer;
