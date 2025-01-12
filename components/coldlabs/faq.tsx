import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

interface Props {
    question: string;
    answer: string;
  }

const faqs: Props[] = [
  {
    question: "What services does your company offer?",
    answer: "We provide comprehensive digital solutions including web development, mobile app development, cloud services, and digital transformation consulting. Our team specializes in creating custom solutions tailored to each client's unique needs."
  },
  {
    question: "How do I get started with your services?",
    answer: "Getting started is easy! Simply reach out through our contact form or schedule a free consultation. Our team will discuss your needs, provide a detailed proposal, and outline the next steps for your project."
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary depending on scope and complexity. Typically, small projects take 4-6 weeks, while larger projects may take 3-6 months. We'll provide a detailed timeline during the initial consultation based on your specific requirements."
  },
  {
    question: "Do you offer support after project completion?",
    answer: "Yes, we provide comprehensive post-launch support and maintenance. Our support packages include regular updates, security patches, performance monitoring, and technical assistance to ensure your solution continues to run smoothly."
  },
  {
    question: "What is your pricing structure?",
    answer: "We offer flexible pricing models including project-based, hourly rates, and retainer options. Each quote is customized based on your specific needs, project scope, and requirements. Contact us for a detailed pricing proposal."
  },
  {
    question: "Do you work with clients internationally?",
    answer: "Yes, we work with clients globally! Our team is experienced in remote collaboration and uses modern tools to ensure smooth communication across different time zones. We've successfully delivered projects for clients across North America, Europe, and Asia."
  },
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web and mobile technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We stay updated with the latest tech trends to provide cutting-edge solutions."
  }
];

export default function FAQ() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Find answers to common questions about our services, process, and company.
            </p>
          </div>
        </div>
        
        <div className="mx-auto max-w-[800px] mt-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 dark:text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>


        <div className="mx-auto max-w-[800px] mt-12">
        <p className="text-muted-foreground font-bold">Support</p>
          <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="support">
                <AccordionTrigger className="text-left hover:no-underline">
                  Do you offer technical support?
                </AccordionTrigger>
                <AccordionContent className="text-gray-500 dark:text-gray-400">
                  We do offer technical support. If you have any query, please contact with us throught available options and we will try to reach back to you as soon as possible.
                </AccordionContent>
              </AccordionItem>
          </Accordion>
        </div>
      </div>
      <p className="mt-8 text-center text-muted-foreground text-sm">
        Still have questions? Email us at 
        <Link href={"mailto:coldlabs.dev@gmail.com"} target="_blank" className="ml-1 underline">
          coldlabs.dev@gmail.com
        </Link>
      </p>
    </section>
  );
}