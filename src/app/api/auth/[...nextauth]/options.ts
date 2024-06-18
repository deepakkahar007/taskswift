import prisma from "@/db/prisma";
import type { NextAuthOptions } from "next-auth";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { GithubProfile } from "next-auth/providers/github";

const options: NextAuthOptions = {
  providers: [
    Github({
      profile(profile: GithubProfile) {
        return {
          ...profile,
          role: profile.role ?? "USER",
          id: profile.id.toString(),
          image: profile.avatar_url,
        };
      },
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email:",
          type: "text",
          placeholder: "Enter Your Email ...",
        },
        password: {
          label: "Password:",
          type: "password",
          placeholder: "Enter Your Password",
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findFirst({
          where: { email: credentials?.email },
          select: {
            email: true,
            password: true,
            id: true,
            name: true,
            role: true,
          },
        });
        if (!user) return "no user";
        if (
          credentials?.email === user.email &&
          credentials?.password === user.password
        )
          return user;
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },
    async session({ session, token }) {
      if (session.user) session.user.role = token.role;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default options;
