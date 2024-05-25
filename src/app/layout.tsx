import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Thrifo",
  description: "Get to know you trash car info",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={roboto.className}>
        <main className="max-w-md h-svh mx-auto border px-4">{children}</main>
      </body>
    </html>
  );
}
