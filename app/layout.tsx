import type { Metadata } from "next";
import "./globals.css";
import { gowunBatang, spaceMono } from "./fonts";
import NextAuthSessionProvider from "./_providers/NextAuthSessionProvider";

export const metadata: Metadata = {
  title: "node-connection",
  description: "node-connection",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ko" className={`${spaceMono.variable} ${gowunBatang.variable}`}>
      <body className="font-spaceMono box-border h-full w-full bg-white">
        <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default RootLayout;
