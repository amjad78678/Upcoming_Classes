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
    setStaffTimer: (state, action) => {
      const { classIndex, timerDuration } = action.payload;
      const currentTime = Date.now();
      const timerEndTime = currentTime + timerDuration * 1000;

      state.staffDetails[classIndex] = {
        ...state.staffDetails[classIndex],
        isBooked: true,
        timerEndTime,
        timeRemaining: timerDuration,
        isLive: false,
        classStartTime: 0,
        timeLive: 0,
      };
    },
    updateTimer: (state, action) => {
      const { classIndex, timeRemaining } = action.payload;
      const staff = state.staffDetails[classIndex];

      if (timeRemaining <= 0 && !staff.isLive) {
        // Timer has ended, starting the class as live
        staff.isBooked = false;
        staff.isLive = true;
        staff.classStartTime = Date.now();
        staff.timeRemaining = 0;
      } else if (!staff.isLive) {
        // Continue updating the remaining time if not live
        staff.timeRemaining = timeRemaining;
      }
    },
    updateLiveTime: (state, action) => {
      const { classIndex, timeLive } = action.payload;
      state.staffDetails[classIndex].timeLive = timeLive;
    },
  },
});

export const { setStaffTimer, updateTimer, updateLiveTime, setStaffDetails } = appSlice.actions;
export default appSlice.reducer;
