import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function AccordionPage() {
  const places = [
    {
      title: "The Burrow Cafe",
    },
    {
      title: "Pinto - Rizal Cafe",
    },
    {
      title: "Tahanan Bistro",
    },
  ];
  return (
    <div className="bg-white text-[#333] border border-gray-300 p-2 rounded-lg flex flex-col w-[90%] mx-auto min-w-[337px]">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Taguig</AccordionTrigger>
          {places.map((place) => (
            <AccordionContent key={place.title}>{place.title}</AccordionContent>
          ))}
        </AccordionItem>
      </Accordion>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default AccordionPage;
