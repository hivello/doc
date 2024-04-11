import { listFAQ } from "@/constants";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div>
      <Accordion type="single" collapsible>
        {listFAQ.map((item) => (
          <AccordionItem key={item.title} value={item.title}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.desc}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
