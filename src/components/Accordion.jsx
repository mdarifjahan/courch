import { useState } from "react";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex justify-between items-center py-4 px-2 md:px-4 hover:bg-gray-100 transition-all"
      >
        <span className="font-medium text-gray-800">{question}</span>
        <svg
          className={`w-5 h-5 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        } px-2 md:px-4`}
      >
        <p className="py-2 text-gray-600 text-sm">{answer}</p>
      </div>
    </div>
  );
};

export default function Accordion() {
  const faqs = [
    {
      question: "What is Tailwind CSS?",
      answer:
        "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      question: "Is Tailwind good for React?",
      answer: "Yes! Tailwind works really well with React and speeds up your UI development.",
    },
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-md rounded-2xl p-4 md:p-6">
      {faqs.map((faq, index) => (
        <AccordionItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
}

