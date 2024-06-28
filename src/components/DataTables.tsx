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

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { allTasksById, getUserName } from "@/lib/dbQueries";
import { updateTaskByUser } from "@/lib/serverActions";

export async function TableDemo() {
  const { progressTasks } = await allTasksById();

  return (
    <>
      <Table>
        <TableCaption>List of all Tasks</TableCaption>
        <TableHeader>
          <TableRow className="text-md font-bold uppercase">
            <TableHead className="w-[100px]">Assigned By</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Due Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <Dialog>
            {progressTasks.map(async (task) => {
              const name = await getUserName(task.created_By);
              return (
                <TableRow key={task.id} className="cursor-pointer">
                  <TableCell className="font-medium">{name?.name}</TableCell>
                  <TableCell>{task.status}</TableCell>
                  <DialogTrigger>
                    <TableCell>{task.title}</TableCell>
                  </DialogTrigger>
                  <TableCell className="text-right">
                    {task.due_Date.toString().trim().slice(0, 15)}
                  </TableCell>
                  <DialogContent>
                    <span className="text-md flex justify-around text-left text-slate-400">
                      <p>{name?.name}</p>
                      <p>{task.created_At.toString().slice(0, 15)}</p>
                    </span>
                    <h1 className="text-center text-lg font-bold capitalize underline underline-offset-4">
                      {task.title}
                    </h1>
                    <p className="text-justify text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Facilis dolore expedita, eaque libero accusamus,
                      asperiores odio suscipit sunt praesentium atque repellat
                      dolorum aliquid. Adipisci error dolor repudiandae nulla
                      ipsam necessitatibus nostrum temporibus impedit, amet
                      corporis vitae odit sit omnis accusantium.
                    </p>

                    <form action={updateTaskByUser}>
                      <section className="my-2 flex items-center justify-around">
                        <Label>Status</Label>
                        <Label>Priority</Label>
                        <Label>Last Date</Label>
                      </section>
                      <section className="my-2 flex items-center justify-around">
                        <Select name="status">
                          <SelectTrigger className="max-w-32">
                            <SelectValue placeholder={task.status} />
                          </SelectTrigger>
                          <SelectContent position="popper">
                            <SelectItem value="COMPLETED">Completed</SelectItem>
                            <SelectItem value="IN-PROGRESS">
                              In-Progress
                            </SelectItem>
                            <SelectItem value="PENDING">Pending</SelectItem>
                          </SelectContent>
                        </Select>
                        <span>{task.priority}</span>
                        <span>{task.due_Date.toString().slice(0, 15)}</span>
                      </section>

                      <DialogFooter className="my-2">
                        <Button
                          variant={"secondary"}
                          name="update"
                          value={JSON.stringify(task.id)}
                        >
                          update
                        </Button>
                        <Button className="">Mark as Completed</Button>
                      </DialogFooter>
                    </form>
                  </DialogContent>
                </TableRow>
              );
            })}
          </Dialog>
        </TableBody>
      </Table>
    </>
  );
}
