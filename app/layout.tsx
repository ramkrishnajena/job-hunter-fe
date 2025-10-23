import React from "react";
import "./globals.css";

export const metadata = {
  title: "Job Hunter",
  description: "Remote job board powered by Playwright crawler",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <main className="max-w-6xl mx-auto py-8 px-4">{children}</main>
      </body>
    </html>
  );
}
