import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Navbar } from "@/components";

export const metadata: Metadata = {
  title: "TaskSwift",
  description: "A Task Application in NextJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={""}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="container my-2 min-h-screen">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
