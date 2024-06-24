"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
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
import { Input } from "./ui/input";
import { CardWithForm } from "./CreateTask";

import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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
  return (
    <header className="flex items-center justify-between p-4 shadow shadow-blue-600">
      <div>
        {/* {image} */}
        <h1>TaskSwift</h1>
      </div>
      <nav className="flex items-center justify-center space-x-4">
        {Nav.map(({ title, url, icon }) => {
          return (
            <span key={title} className="flex items-center space-x-4 text-md ">
              <Separator
                orientation="vertical"
                className="mx-2 text-white bg-white h-6 w-[0.090rem]"
              />
              <Link
                href={url}
                className={
                  url === usePathname()
                    ? "uppercase underline underline-offset-8 decoration-blue-600 font-bold"
                    : "uppercase hover:underline underline-offset-8 decoration-blue-600 hover:font-bold"
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
          className="mx-2 text-white bg-white h-6 w-[0.090rem]"
        />
      </nav>

      <Dialog>
        <DialogTrigger>
          <Button>Trigger Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          {/* <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
          </DialogHeader>
          <DialogDescription>Dialog opened by clicked</DialogDescription>
          name
          <Input type="text" placeholder="enter your name" />
          description
          <Input type="text" placeholder="enter your name" />
          email
          <Input type="text" placeholder="enter your name" />
          <DialogFooter>
            <DialogClose>
              <Button variant={"destructive"}>Cancel</Button>
            </DialogClose>
          </DialogFooter> */}
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
          <DialogFooter className="flex justify-between">
            <Button variant="outline">Cancel</Button>
            <Button>Deploy</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </header>
  );
};
export default Navbar;
