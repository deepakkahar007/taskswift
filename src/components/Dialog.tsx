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
import { Input } from "./ui/input";

const Test = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Trigger Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Create User</DialogTitle>
        <DialogDescription>Dialog opened by clicked</DialogDescription>
        <Input type="text" placeholder="enter your name" />

        <DialogClose>
          <Button variant={"destructive"}>Cancel</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};

export default Test;
