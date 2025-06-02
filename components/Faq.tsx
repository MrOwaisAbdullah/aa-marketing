import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import FadeInSection from "./FadeInSection";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

interface FaqSectionProps {
  title: string;
  headingHighlight: string;
  faqs: FAQItem[];
}

export default function FaqSection({ title, headingHighlight, faqs }: FaqSectionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <FadeInSection>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 font-montserrat text-text">
              {title} <span className="text-accent">{headingHighlight}</span>
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={`faq-${index}`}
                  value={`item-${index}`}
                  className="border border-border rounded-lg overflow-hidden bg-background"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-primary/10 transition-all text-text">
                    <span className="text-left text-lg font-montserrat">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-text/80 font-poppins">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
}