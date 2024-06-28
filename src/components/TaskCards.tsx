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
  function priority_Color(priority: string) {
    if (priority === "HIGH") return "border-red-600";
    if (priority === "MEDIUM") return "border-yellow-600";
  }

  return (
    <Dialog>
      <DialogTrigger>
        <Card
          className={`cursor-pointer items-center hover:border-blue-600 ${priority_Color(priority!)}`}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardFooter>
            <p className="text-sm text-slate-400">
              {due_Date?.toISOString().split("T")[0]}
            </p>
          </CardFooter>
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <DialogDescription>
          <p>{description}</p>
          <span>Priority - {priority}</span>
          <p>
            {due_Date?.getDay()} {due_Date?.toISOString().split("T")[0]}
          </p>
        </DialogDescription>
        <DialogFooter>
          <Button>Mark as Completed</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default TaskCards;
