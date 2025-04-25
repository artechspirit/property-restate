"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { reviews } from "@/constants";
import Image from "next/image";
import { Star } from "lucide-react";

const Review = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="bg-[#E4E4E7] pt-14 ">
      <div className="container">
        <h2 className="text-[#09090B] text-[24px] font-semibold">
          Ulasan dari Konsumen
        </h2>

        <div className="py-10">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full max-w-screen-xl mx-auto"
          >
            <CarouselContent>
              {reviews.map((item, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 "
                >
                  <Card className="min-h-[344px] rounded-md shadow-none">
                    <CardHeader className="flex items-center">
                      <Image
                        src={item.image}
                        alt="Avatar"
                        width={56}
                        height={56}
                        objectFit="contain"
                      />

                      <h3 className="ml-3 text-panglima-foreground font-semibold text-lg">
                        {item.name}
                      </h3>
                    </CardHeader>
                    <CardContent className="h-full">
                      <div className="flex gap-x-2 my-3 flex-row">
                        {[...Array(item?.rating)].map((_, index) => (
                          <Star
                            key={index}
                            className="text-panglima-orange"
                            fill="#FA9500"
                            size={18}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-[#71717A] font-normal leading-[20px]">
                        {item.text}
                      </span>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom dots */}
          <div className="flex justify-center mt-9 space-x-3 ">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={cn(
                  "h-4 w-4 rounded-full  border-2 border-[#CDCDCD] transition-all",
                  index === selectedIndex &&
                    "bg-panglima-green border-panglima-green"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
