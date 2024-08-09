import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "../ui/button";
import { useDispatch } from "react-redux";
import { setStaffTimer } from "@/store/slices/appSlice";
import { formatDuration } from "@/utils/formatTime";
import { motion } from "framer-motion";

const BookNowButton = ({
  userId,
  timerDuration,
}: {
  userId: number;
  timerDuration: number;
}) => {
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
      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        disabled={timerDuration < 1}
        onClick={handleBookNow}
        className=" py-4 px-2  flex justify-start items-center "
      >
        <div
          className={`${
            timerDuration < 1 ? "opacity-50 bg-gray-200" : "bg-white"
          }  rounded-lg py-2 px-4 text-black border `}
        >
          <div className="flex justify-center items-center gap-2 font-semibold">
            {timerDuration < 1 ? "Book later" : "Book now"}
          </div>
        </div>
      </motion.button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-bold text-2xl">
              Are you sure ?
            </DialogTitle>
            <DialogDescription className="text-lg font-semibold">
              The class will start within {formatDuration(timerDuration)} time
            </DialogDescription>
          </DialogHeader>
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
