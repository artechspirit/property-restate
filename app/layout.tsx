"use client";
import { Inter } from "next/font/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { getQueryClient } from "@/lib/react-query";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = getQueryClient();
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools />
          <Toaster />
        </QueryClientProvider>
      </body>
    </html>
  );
}
