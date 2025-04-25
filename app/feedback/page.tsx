"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Button from "@/components/CustomButton";
import { House, MessageSquare, MessagesSquare, SquarePlus } from "lucide-react";
import { ChatBubbleLeftRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FeedbackTable } from "@/components/FeedbackTable";
import { useFeedbackList } from "@/hooks/useFeedback";

function Feedback() {
  const router = useRouter();
  const { data } = useFeedbackList();
  return (
    <div>
      <div className="flex justify-between">
        <div className="shadow h-[44px] flex items-center px-4 rounded bg-white gap-x-3">
          <div>
            <House size={23} className="text-panglima-foreground" />
          </div>
          <div>/</div>
          <Link href="/feedback">
            <div className="flex items-center gap-x-2">
              <MessagesSquare size={23} className="text-panglima-foreground" />
              <span>Feedback</span>
            </div>
          </Link>
        </div>

        <Button
          onClick={() => router.push("/feedback/create")}
          leftIcon={<SquarePlus size={18} className="text-white" />}
          size="sm"
          className="h-[44px]"
        >
          Buat Feedback
        </Button>
      </div>

      <div className="my-5 border border-[#287C3E] h-[180px] rounded-md bg-white p-4">
        <div className="flex items-center gap-x-3 mt-1">
          <ChatBubbleLeftRightIcon className="w-7 h-7 text-panglima-foreground" />
          <span className="text-panglima-foreground font-semibold text-lg">
            Jangan Lupa Untuk Memberi Ulasan!
          </span>
        </div>

        <p className="my-6 text-[#71717A] text-sm font-normal">
          Sepertinya Anda belum memberikan ulasan untuk Feedback yang sudah
          selesai di bawah ini
        </p>

        <div className="flex flex-row gap-x-3">
          <Button
            onClick={() => router.push("/feedback/create")}
            leftIcon={<MessageSquare size={18} className="text-white" />}
            size="sm"
            className="h-[44px]"
          >
            A12-75-111124
          </Button>

          <Button
            onClick={() => router.push("/feedback/create")}
            leftIcon={<MessageSquare size={18} className="text-white" />}
            size="sm"
            className="h-[44px]"
          >
            A12-75-111120
          </Button>
        </div>
      </div>

      <div className="list-feedback flex flex-row justify-between items-center">
        <p className="text-panglima-foreground font-semibold text-lg">
          Daftar Feedback
        </p>
      </div>

      {data && <FeedbackTable data={data} />}
    </div>
  );
}

export default Feedback;
