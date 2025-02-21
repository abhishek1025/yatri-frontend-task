import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DesktopNavBar } from "@/components/navbar";
import StoreProvider from "@/store/StoreProvider";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yatri Blogs",
  description: "Explore insightful articles and stories from Yatri Blogs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster theme="dark" />
        <StoreProvider>
          <DesktopNavBar />
          <div className="w-[90%] mx-auto py-4">{children}</div>
        </StoreProvider>
      </body>
    </html>
  );
}
