"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
const ProductDetailAccordion = () => {
  const [value, setValue] = useState<string[]>([]);

  return (
    <Accordion
      value={value}
      onValueChange={(newValue) => setValue(newValue)}
      className="w-full"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          <div className="uppercase subHeading tracking-[1px] ">
            description
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil
          accusamus repellendus vel aliquid numquam esse dolore, consectetur
          illo et voluptatibus fugiat veniam vitae animi earum aliquam, nemo
          quod magnam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          <div className="uppercase subHeading tracking-[1px] ">
            key benefits
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil
          accusamus repellendus vel aliquid numquam esse dolore, consectetur
          illo et voluptatibus fugiat veniam vitae animi earum aliquam, nemo
          quod magnam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          <div className="uppercase subHeading tracking-[1px] ">
            Ingredients
          </div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil
          accusamus repellendus vel aliquid numquam esse dolore, consectetur
          illo et voluptatibus fugiat veniam vitae animi earum aliquam, nemo
          quod magnam!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          <div className="uppercase subHeading tracking-[1px] ">FAQ's</div>
        </AccordionTrigger>
        <AccordionContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut nihil
          accusamus repellendus vel aliquid numquam esse dolore, consectetur
          illo et voluptatibus fugiat veniam vitae animi earum aliquam, nemo
          quod magnam!
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductDetailAccordion;
