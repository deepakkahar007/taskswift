import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

type CardsPropType = {
  title: string;
  description?: string;
  priority?: string;
  status?: string;
  due_Date?: Date;
  created_At?: Date;
  updated_At?: Date;
  created_By?: string;
};

const TaskCards = ({
  title,
  description,
  priority,
  status,
  due_Date,
  created_At,
  updated_At,
  created_By,
}: CardsPropType) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card className={`cursor-pointer items-center hover:border-blue-600`}>
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent>
            {description}

            {description ?? (
              <CardDescription className="truncate">
                {description}
              </CardDescription>
            )}
          </CardContent>

          <CardFooter>
            <p>{due_Date?.toISOString().split("T")[0]}</p>
          </CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <Label>What to do</Label>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <Label>How to do</Label>
        <DialogDescription>{description}</DialogDescription>

        <DialogFooter>
          <p>
            {due_Date?.getDay()} {due_Date?.toISOString().split("T")[0]}
          </p>
          <Button>Mark as Completed</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCards;
