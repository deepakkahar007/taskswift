"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

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
      <Button>create</Button>
    </header>
  );
};
export default Navbar;
