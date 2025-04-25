"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/constants";

const Faq = () => {
  return (
    <div className="pt-14 pb-10">
      <div className="container">
        <h2 className="text-[#09090B] text-[24px] font-semibold">
          Pertanyaan Umum
        </h2>

        <Accordion type="single" collapsible className="space-y-2 mt-8">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b-2 border-dashed border-[#E4E4E7] pb-4"
            >
              <AccordionTrigger className="group text-left text-lg font-semibold flex justify-between items-center hover:no-underline relative [&>svg]:hidden">
                {faq.question}
                <span className="ml-2 text-xl transition-all duration-300">
                  <span className="group-data-[state=open]:inline hidden text-2xl">
                    −
                  </span>
                  <span className="group-data-[state=open]:hidden inline text-2xl">
                    +
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="whitespace-pre-line text-sm text-[#71717A] leading-[28px]">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default Faq;
