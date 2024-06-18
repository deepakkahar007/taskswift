import { z } from "zod";

const createTask = z.object({
  title: z.string(),
  description: z.string(),
  due_Date: z.date(),
});

export type CreateTask = z.infer<typeof createTask>;
