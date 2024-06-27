"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { signOut, signIn } from "next-auth/react";

type NavBarLinks = {
  title: string;
  url: string;
  icon?: React.ReactNode;
}[];

const Nav: NavBarLinks = [
  { title: "home", url: "/" },
  { title: "tasks", url: "/task" },
  { title: "teams", url: "/team" },
];

const Navbar = () => {
  const session = true;
  return (
    <header className="flex items-center justify-between p-4 shadow shadow-blue-600">
      <div>
        {/* {image} */}
        <h1>TaskSwift</h1>
      </div>
      <nav className="flex items-center justify-center space-x-4">
        {Nav.map(({ title, url, icon }) => {
          return (
            <span key={title} className="text-md flex items-center space-x-4">
              <Separator
                orientation="vertical"
                className="mx-2 h-6 w-[0.090rem] bg-white text-white"
              />
              <Link
                href={url}
                className={
                  url === usePathname()
                    ? "font-bold uppercase underline decoration-blue-600 underline-offset-8"
                    : "uppercase decoration-blue-600 underline-offset-8 hover:font-bold hover:underline"
                }
              >
                {icon ?? <span>{icon}</span>}
                {title}
              </Link>
            </span>
          );
        })}
        <Separator
          orientation="vertical"
          className="mx-2 h-6 w-[0.090rem] bg-white text-white"
        />
      </nav>

      {session === null ? (
        <Button onClick={() => signOut()}>Log Out</Button>
      ) : (
        <Button onClick={() => signIn()}>Log In</Button>
      )}
      <Button onClick={() => signOut()}>Log Out</Button>
    </header>
  );
};
export default Navbar;
{
  /* <Dialog>
          <DialogTrigger>
            <Button>Trigger Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <form action={createTask}>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter Tasks" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="description">Description</Label>
                  <Textarea placeholder="Enter task description" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="priority">Priority</Label>
                  <Select>
                    <SelectTrigger id="priority">
                      <SelectValue placeholder="priority" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="HIGH">High</SelectItem>
                      <SelectItem value="LOW">Low</SelectItem>
                      <SelectItem value="MEDIUM">Medium</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="date"
                    name="date"
                    className="rounded-md border shadow"
                  />
                </div>
              </div>

              <Button>Deploy</Button>
            </form>
            <DialogFooter className="mt-2 flex justify-between">
              <DialogClose>
                <Button variant="outline">Cancel</Button>
              </DialogClose>{" "}
            </DialogFooter>
          </DialogContent>
        </Dialog> */
}
