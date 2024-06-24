import { Button } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Todo = () => {
  return (
    <div className="min-h-screen">
      <Separator
        orientation="vertical"
        className="flex text-center justify-center w-[20rem] h-[0.250rem] bg-gray-400"
      />
      {[1, 2, 3].map((t) => {
        return (
          <div
            key={t}
            className="flex flex-col space-y-2 justify-center items-center mt-3"
          >
            <Card className="border border-blue-700 w-72 rounded-md p-1 ">
              <CardHeader>
                <CardTitle>{t}</CardTitle>
              </CardHeader>

              <CardContent>{t}</CardContent>

              <CardFooter className="flex flex-row space-x-2 items-end justify-end">
                <Button variant={"destructive"}>Delete</Button>
                <Button>create</Button>
              </CardFooter>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Todo;
