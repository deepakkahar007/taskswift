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

type CardsPropType = {
  title: string;
  description?: string;
  content?: string;
  footer?: string;
  w?: string;
  image?: string;
};

const Cards = ({ title, description, content, footer, w }: CardsPropType) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Card
          className={`w-[${w}] cursor-pointer items-center hover:border-blue-600`}
        >
          <CardHeader>
            <CardTitle>{title}</CardTitle>
          </CardHeader>

          <CardContent>
            {content}

            {description ?? (
              <CardDescription className="truncate">
                {description}
              </CardDescription>
            )}
          </CardContent>
          {footer ?? (
            <CardFooter>
              <p>{footer}</p>
            </CardFooter>
          )}
        </Card>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>

        <DialogFooter>{footer}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Cards;
