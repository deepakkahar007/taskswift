import prisma from "@/db/prisma";
import { NextResponse } from "next/server";

export const GET = async () => {
  const allUser = await prisma.user.findMany();

  return NextResponse.json({ count: allUser.length, users: allUser });
};
