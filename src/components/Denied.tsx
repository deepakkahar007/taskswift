import Link from "next/link";
import { Button } from "./ui/button";

const Denied = () => {
  return (
    <div className="flex flex-col items-center justify-center text-3xl font-bold capitalize">
      please log in first to preview your tasks
      <Link href={"/api/auth/signin"}>
        <Button className="capitalize" variant={"link"}>
          go to log in page
        </Button>
      </Link>
    </div>
  );
};

export default Denied;
