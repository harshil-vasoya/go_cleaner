"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type FAQItem = {
  question: string
  answer: string
}

type FAQAccordionProps = {
  items: FAQItem[]
  className?: string
}

export default function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={cn("grid gap-4", className)}>
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-gray-50 rounded-lg overflow-hidden hover-float hover-glow transition-all duration-300"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full p-6 flex justify-between items-center text-left focus:outline-none"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <h3 className="text-lg font-bold">{item.question}</h3>
            <ChevronDown
              className={cn("text-primary transition-transform duration-300", openIndex === index ? "rotate-180" : "")}
              size={20}
            />
          </button>
          <div
            id={`faq-answer-${index}`}
            className={cn(
              "overflow-hidden transition-all duration-300",
              openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
            )}
          >
            <p className="text-gray-600 p-6 pt-0">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

