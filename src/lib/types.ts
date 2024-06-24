import { z } from "zod";

export const createTask = z
  .object({
    title: z.string(),
    description: z.string(),
    due_Date: z.date().min(new Date()),
    created_By: z.string(),
  })
  .passthrough();

export type CreateTask = z.infer<typeof createTask>;
