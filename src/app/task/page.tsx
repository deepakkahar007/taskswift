import { TaskCards } from "@/components";
import { allTasksById } from "@/lib/dbQueries";
import { Separator } from "@/components/ui/separator";

const page = async () => {
  const { progressTasks, pendingTasks } = await allTasksById();

  return (
    <div>
      <h1 className="text-xl uppercase">in-progress</h1>
      <Separator orientation="horizontal" className="my-2" />
      <div className="grid grid-cols-4 justify-center gap-4">
        {progressTasks.length != 0 ? (
          progressTasks.map((c) => (
            <TaskCards
              key={c.id}
              title={c.title}
              description={c.description}
              priority={c.priority}
              status={c.status}
              due_Date={c.due_Date}
              created_At={c.created_At}
              updated_At={c.updated_At}
              created_By={c.created_By}
            />
          ))
        ) : (
          <h1>no task found for you</h1>
        )}
      </div>

      <Separator orientation="horizontal" className="my-4 h-2" />

      <h1 className="text-xl uppercase">Pending</h1>
      <Separator orientation="horizontal" className="my-2" />
      <div className="grid grid-cols-4 justify-center gap-4">
        {pendingTasks.length != 0 ? (
          pendingTasks.map((c) => (
            <TaskCards
              key={c.id}
              title={c.title}
              description={c.description}
              priority={c.priority}
              status={c.status}
              due_Date={c.due_Date}
              created_At={c.created_At}
              updated_At={c.updated_At}
              created_By={c.created_By}
            />
          ))
        ) : (
          <h1>no task found for you</h1>
        )}
      </div>
    </div>
  );
};

export default page;
