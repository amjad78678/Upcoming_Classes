interface StaffDetails {
  id: number;
  className: string;
  staffName: string;
  isBooked: boolean;
  timerEndTime: number; // Timestamp in milliseconds
  timeRemaining: number; // Time remaining in seconds
  isLive: boolean;
  classStartTime: number; // Timestamp in milliseconds
  timeLive: number; // Time live in seconds
  staffImage: string;
  classTime: Date | string;
}

export default StaffDetails;
