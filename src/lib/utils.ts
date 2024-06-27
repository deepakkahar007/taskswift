import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// next auth
import { getServerSession } from "next-auth";
import options from "@/app/api/auth/[...nextauth]/options";

export const isAuthenticated = async () => {
  const session = await getServerSession(options);
  return session ? session : null;
};

// bcrypt js
// import { hash, compare } from "bcrypt";

// export const HashPassword = async (password: string) => {
//   return await hash(password, 10);
// };

// export const ComparePassword = async (
//   password: string,
//   hashedPassword: string
// ) => {
//   const isCorrect = await compare(password, hashedPassword);
//   return isCorrect ?? false;
// };
