import { NextResponse } from "next/server";
import prisma from "@/db/prisma";
import { type CreateTask, createTask } from "@/lib/types";

export const GET = async () => {
  const allTasks = await prisma.task.findMany({
    include: {
      tasks: true,
    },
  });

  return NextResponse.json({ count: allTasks.length, tasks: allTasks });
};

export const DELETE = async (id: number) => {
  const delete_Task = await prisma.task.findFirst({
    where: {
      id: id,
    },
  });

  if (delete_Task === null)
    return NextResponse.json(
      { msg: `no task available with ${id} id` },
      { status: 404 }
    );
  return;
};

export const POST = async () => {
  const Task = {
    title: "created task 1",
    description: "created by prisma task 1",
    due_Date: new Date(),
    created_By: "clxr3hxaw0000eb8lc5h9gb5w",
  };

  const schema = createTask.safeParse(Task);

  if (schema.success) {
    await prisma.task.create({
      data: {
        ...schema.data,
      },
    });

    return NextResponse.json(
      { msg: "Task Created Successfully" },
      { status: 201 }
    );
  }
  return NextResponse.json({ error: schema.error }, { status: 500 });
};

export const PATCH = async () => {
  const id = 5;

  const Task = {
    title: "updated task 1",
    description: "updated by prisma task 1",
    due_Date: new Date(),
    created_By: "clxsjvo200001enl8devons0j",
  };

  const schema = createTask.safeParse(Task);

  // if (schema.success) {
  await prisma.task.update({
    where: { id: id },
    data: {
      ...Task,
      tasks: {
        set: [
          {
            id: "clxsjvo1x0000enl8nnt1yw1y",
            name: "name root",
            email: "root@gg.com",
            password: "root",
            role: "ROOT",
            emailVerified: null,
            image: null,
            createdAt: "2024-06-24T05:41:46.245Z",
            updatedAt: "2024-06-24T05:40:42.579Z",
          },
          {
            id: "clxskzwb00001h5vz5kudrybh",
            name: "name user1",
            email: "user1@gg.com",
            password: "user1",
            role: "USER",
            emailVerified: null,
            image: null,
            createdAt: "2024-06-24T05:41:46.245Z",
            updatedAt: "2024-06-24T05:40:44.113Z",
          },
        ],
      },
    },
  });
  return NextResponse.json({
    msg: `${id} updated succusfully`,
  });
  // }
  return NextResponse.json({ msg: schema.error });
};
