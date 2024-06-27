import prisma from "@/db/prisma";
import { isAuthenticated } from "./utils";

export const allTasksById = async () => {
  const session = await isAuthenticated();
  const progressTasks = await prisma.task.findMany({
    where: {
      status: "IN_PROGRESS",
    },
    include: {
      tasks: {
        where: {
          id: {
            equals: session?.user.id,
          },
        },
      },
    },
  });
  const pendingTasks = await prisma.task.findMany({
    where: {
      status: "PENDING",
    },
    include: {
      tasks: {
        where: {
          id: {
            equals: session?.user.id,
          },
        },
      },
    },
  });

  return { progressTasks, pendingTasks };
};

export const inProgressTasks = async () => {
  const session = await isAuthenticated();
  const tasks = await prisma?.task.findMany({
    where: {
      status: "IN_PROGRESS",
    },
    include: {
      tasks: {
        where: {
          id: {
            equals: session?.user.id,
          },
        },
      },
    },
    take: 3,
  });
  return tasks;
};

export const pendingTasks = async () =>
  await prisma?.task.findMany({
    where: { status: "PENDING" },
    select: { title: true, description: true },
    take: 3,
  });
