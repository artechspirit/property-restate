"use client";
import { ChevronLeft, CircleUser, MessagesSquare } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const FeedbackLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  return (
    <div className="flex flex-row">
      <nav className="w-[266px] h-screen border-r border-[#E4E4E7]">
        <div className="flex flex-col justify-center px-4 border-b border-[#E4E4E7] h-[84px]">
          <Image src="/images/logo.svg" width={156} height={84} alt="logo" />
        </div>

        <div className="nav-menu p-3">
          <Link href="/feedback">
            <div className="bg-panglima-green px-3 py-2.5 rounded-sm hover:bg-[#349D52] flex items-center">
              <MessagesSquare color="#fff" size={18} />

              <span className="font-medium text-sm ml-2 text-white">
                Feedback
              </span>
            </div>
          </Link>
        </div>
      </nav>
      <main className="w-full">
        <div className="main__nav h-[84px] border-b border-[#E4E4E7] flex justify-between items-center px-5">
          <div
            className="w-8 h-8 flex items-center justify-center rounded-md hover:shadow-lg cursor-pointer"
            onClick={() => router.back()}
          >
            <ChevronLeft size={25} className="text-panglima-orange" />
          </div>
          <div className="flex items-center">
            <CircleUser size={25} className="text-panglima-orange" />
            <span className="text-panglima-orange ml-2">Nama User</span>
          </div>
        </div>
        <div
          className="p-5 bg-[#F4F4F5] pb-18"
          style={{ height: "calc(100vh - 84px)", overflowY: "auto" }}
        >
          {children}
        </div>
      </main>
    </div>
  );
};

export default FeedbackLayout;
