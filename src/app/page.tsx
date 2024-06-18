import Test from "@/components/Test";
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

import { isAuthenticated } from "@/lib/utils";
const tasks = [
  { title: "first", desc: "first task" },
  { title: "second", desc: "first task" },
];

export default async function Home() {
  const session = await isAuthenticated();
  console.log(session);
  return (
    <div className="grid grid-cols-3 text-center items-center">
      <h1 className="uppercase text-xl ">todo</h1>
      <h1 className="uppercase text-xl border-x-2 border-white">pending</h1>
      <h1 className="uppercase text-xl ">completed</h1>

      <div className="min-h-screen">
        <Separator
          orientation="vertical"
          className="flex text-center justify-center w-[20rem] h-[0.250rem] bg-gray-400"
        />
        {tasks.map((t) => {
          return (
            <div
              key={t.title}
              className="flex flex-col space-y-2 justify-center items-center mt-3"
            >
              <Card className="border border-blue-700 w-72 rounded-md p-1 ">
                <CardHeader>
                  <CardTitle>{t.title}</CardTitle>
                </CardHeader>

                <CardContent>{t.desc}</CardContent>

                <CardFooter className="flex flex-row space-x-2 items-end justify-end">
                  <Button variant={"destructive"}>Delete</Button>
                  <Button>create</Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      <div className="border-x-2 border-white min-h-screen">
        <Separator
          orientation="vertical"
          className="flex text-center justify-center w-[20rem] h-[0.250rem] bg-gray-400"
        />
        {tasks.map((t) => {
          return (
            <div
              key={t.title}
              className="flex flex-col space-y-2 justify-center items-center mt-3"
            >
              <Card className="border border-blue-700 w-72 rounded-md p-1 ">
                <CardHeader>
                  <CardTitle>{t.title}</CardTitle>
                </CardHeader>

                <CardContent>{t.desc}</CardContent>

                <CardFooter className="flex flex-row space-x-2 items-end justify-end">
                  <Button variant={"destructive"}>Delete</Button>
                  <Button>completed</Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
      <div className=" min-h-screen">
        <Separator
          orientation="vertical"
          className="flex text-center justify-center w-[20rem] h-[0.250rem] bg-gray-400"
        />
        {tasks.map((t) => {
          return (
            <div
              key={t.title}
              className="flex flex-col space-y-2 justify-center items-center mt-3"
            >
              <Card className="border border-blue-700 w-72 rounded-md p-1 ">
                <CardHeader>
                  <CardTitle>{t.title}</CardTitle>
                </CardHeader>

                <CardContent>{t.desc}</CardContent>

                <CardFooter className="flex flex-row space-x-2 items-end justify-end">
                  <Button variant={"destructive"}>Delete</Button>
                  <Button>completed</Button>
                </CardFooter>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
}
