import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

const Test = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Trigger Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Dialog open</DialogTitle>
        <DialogDescription>Dialog opened by clicked</DialogDescription>
      </DialogContent>

      <DialogClose>Close</DialogClose>
    </Dialog>
  );
};

export default Test;
