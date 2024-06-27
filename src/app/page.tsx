import Cards from "@/components/Cards";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { isAuthenticated } from "@/lib/utils";
import Link from "next/link";
import { Denied } from "@/components";
import { inProgressTasks as iPT, pendingTasks as pT } from "@/lib/dbQueries";

export default async function Home() {
  const session = await isAuthenticated();

  const inProgressTasks = await iPT();
  const pendingTasks = await pT();

  return (
    <div className="">
      {session != null ?? (
        <h1 className={`capitalize" bg-green-700 p-1 text-xl font-bold`}>
          Hello {session?.user.name}
        </h1>
      )}

      {session ? (
        <>
          <div className="my-2 rounded-md border border-blue-600 p-2">
            <div className="flex w-full">
              <div className="flex w-full justify-between">
                <h2 className="text-xl capitalize underline underline-offset-4">
                  In Progress tasks
                </h2>
                <Link href={"/task"}>
                  <Button variant={"link"} className="text-xl capitalize">
                    go to tasks
                  </Button>
                </Link>
              </div>
            </div>
            <Separator orientation="horizontal" className="bg-gray-500" />
            <section className="my-2 flex flex-row space-x-3">
              {inProgressTasks.length != 0 ? (
                inProgressTasks.map((c) => (
                  <Cards
                    key={c.title}
                    w={"330px"}
                    title={c.title}
                    content={c.content}
                    description={c.description}
                    footer={c.footer}
                  />
                ))
              ) : (
                <h1 className="justify-center text-center text-2xl text-white">
                  No task to do right now ...
                </h1>
              )}
            </section>
            <Separator orientation="horizontal" className="bg-gray-500" />
          </div>

          <div className="my-2 rounded-md border border-blue-600 p-2">
            <div className="flex w-full">
              <div className="flex w-full justify-between">
                <h2 className="text-xl capitalize underline underline-offset-4">
                  Pending tasks
                </h2>
                <Link href={"/task"}>
                  <Button variant={"link"} className="text-xl capitalize">
                    go to tasks
                  </Button>
                </Link>
              </div>
            </div>
            <Separator orientation="horizontal" className="bg-gray-500" />
            <section className="my-2 flex flex-row space-x-3">
              {pendingTasks.length != 0 ? (
                pendingTasks.map((c) => (
                  <Cards
                    key={c.title}
                    w={"330px"}
                    title={c.title}
                    content={c.content}
                    description={c.description}
                    footer={c.footer}
                  />
                ))
              ) : (
                <h1 className="justify-center text-center text-2xl text-white">
                  No task to do right now ...
                </h1>
              )}
            </section>
            <Separator orientation="horizontal" className="bg-gray-500" />
          </div>
        </>
      ) : (
        <Denied />
      )}
    </div>
  );
}
