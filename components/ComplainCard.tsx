import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import {
  CalendarDays,
  Check,
  ImageOff,
  LayoutGrid,
  LayoutList,
  MessageSquareDashed,
  Image as ImageL,
  Star,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import { complaints } from "@/constants";
import Link from "next/link";

export default function ComplaintCard() {
  return (
    <div className="grid grid-cols-3 gap-5 mt-6">
      {complaints.map((item, index) => (
        <Card key={index} className="p-0 shadow-xs ">
          {item.image ? (
            <div className="p-4 pb-0 relative">
              <Image
                src={item.image}
                alt="Preview"
                width={330}
                className="rounded-md w-full h-[180px] object-cover"
                height={180}
              />
              {item.additionalImages > 0 && (
                <div className="absolute flex gap-x-1 py-3  bottom-5 font-semibold right-8 bg-white text-panglima-foreground  text-sm px-3 rounded-md z-40">
                  <ImageL size={20} /> +{item.additionalImages}
                </div>
              )}
            </div>
          ) : (
            <div className="p-4 pb-0">
              <div className="h-[180px] bg-[#F4F4F5] rounded-md relative">
                <ImageOff
                  size={55}
                  className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
          )}

          <CardContent className="space-y-3 p-4 pt-0 m">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-base md:text-base font-bold mb-1">
                  {item.code}

                  <Link
                    className="text-sm font-normal text-panglima-orange hover:underline flex"
                    href={`/feedback/${item.code}`}
                  >
                    Lihat Detail <ArrowUpRight size={18} />
                  </Link>
                </h2>
                <Badge
                  variant="secondary"
                  className="mt-1 pt-1 pb-1 font-medium text-xs rounded-full text-panglima-green bg-[#eaf2ec] border border-panglima-green"
                >
                  {item.block}
                </Badge>
              </div>
              <Badge className="bg-[#fafafa] border border-[#E4E4E7] rounded-full text-green-700 pt-1 pb-1 font-medium ">
                <Check size={14} className="text-panglima-green" />
                {item.status}
              </Badge>
            </div>

            <div className="flex items-center text-muted-foreground text-sm gap-2">
              <CalendarDays className="w-4 h-4" />
              <span className="text-[#18181B] font-normal">{item.date}</span>
            </div>

            <div className="text-muted-foreground text-sm flex items-center gap-2">
              <LayoutGrid className="w-4 h-4" />
              <span className="text-[#71717A]">Kategori</span>
            </div>
            <div className="text-sm font-medium">{item.category}</div>

            <div className="text-muted-foreground text-sm flex items-center gap-2">
              <LayoutList className="w-4 h-4" />
              <span className="text-[#71717A]">Sub Kategori</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.subcategories.slice(0, 2).map((sub, idx) => (
                <Badge
                  variant="outline"
                  key={idx}
                  className="text-xs text-panglima-foreground"
                >
                  {sub}
                </Badge>
              ))}
              {item.subcategories.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{item.subcategories.length - 2}
                </Badge>
              )}
            </div>

            <div className="border p-3 rounded-md bg-muted/50 min-h-[97px]">
              <div className="text-sm  text-[#71717A] font-medium flex gap-x-2 mb-2">
                <MessageSquareDashed size={20} /> Keluhan
              </div>
              <p className="text-sm line-clamp-2 text-foreground">
                {item.complaintText}
              </p>
            </div>

            <div>
              <div className="border border-panglima-orange rounded-md p-3">
                <div className="text-sm  text-[#71717A] font-medium flex gap-x-2 mb-2 w-full">
                  <Star size={20} /> Rating
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {Object.entries(item.rating).map(([key, value], idx) => (
                    <div key={idx} className="space-y-1">
                      <div className="font-normal text-sm">{key}</div>
                      <div className="flex text-panglima-orange gap-1">
                        {Array.from({ length: value }).map((_, i) => (
                          <span key={i}>
                            <Star size={16} fill="#fa9500" />
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
