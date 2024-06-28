"use server";

import { revalidateTag } from "next/cache";
import prisma from "@/db/prisma";

export const createTask = async (formdata: FormData) => {
  console.log(formdata.get("date"));
  console.log(Date.UTC(2023));
  return;
};

export const updateTaskByUser = async (form: FormData) => {
  const status = form.get("status");
  const id = form.get("update");

  const checkStatus = (status: string) => {
    if (status === "COMPLETED") return "COMPLETED";
    if (status === "IN_PROGRESS") return "IN_PROGRESS";
    return "PENDING";
  };

  const updateTaskById = await prisma.task.update({
    where: {
      id: parseInt(id),
    },
    data: {
      status: checkStatus(status as string),
    },
  });

  return;
};
