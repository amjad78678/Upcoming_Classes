import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setStaffTimer } from "@/store/slices/appSlice";

const BookNowButton = ({ userId, timerDuration }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const dispatch = useDispatch();
  const handleBookNow = () => {
    setIsDialogOpen(true);
  };

  const handleConfirm = () => {
    dispatch(setStaffTimer({ userId, timerDuration }));
    setIsDialogOpen(false);
  };

  const handleCancel = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <button
        disabled={timerDuration < 1}
        onClick={handleBookNow}
        className="py-4 px-2  flex justify-start items-center "
      >
        <div
          className={`${
            timerDuration < 1 ? "opacity-50 bg-gray-200" : "bg-white"
          }  rounded-lg py-2 px-4 text-black border `}
        >
          <div className="flex justify-center items-center gap-2 font-semibold">
            Book now
          </div>
        </div>
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader className="font-semibold text-2xl">
            Are you sure ?
          </DialogHeader>
          <p>The class will start in {timerDuration} seconds</p>
          <DialogFooter>
            <Button variant="secondary" onClick={handleCancel}>
              Cancel
            </Button>
            <Button className="bg-blue-500" onClick={handleConfirm}>
              Confirm
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BookNowButton;
