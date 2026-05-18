import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const faqs = [
  {
    question: "What is a resume summary?",
    answer: "A <strong className='text-amber-600'>resume summary</strong> (or professional summary) is a brief section at the top of your resume that showcases your most relevant skills and qualifications. It is essential for catching the recruiter's eye in under 6 seconds.",
  },
  {
    question: "How long should a professional summary for resume be?",
    answer: "The ideal length for a <strong className='text-amber-600'>professional summary for resume</strong> is 2 to 4 sentences. It should be concise, focusing on impact-driven results and key technical competencies.",
  },
  {
    question: "What is the best resume summary for fresher students?",
    answer: "The <strong className='text-amber-600'>best resume summary for fresher</strong> candidates focuses on educational achievements, relevant projects, and foundational skills. Use our tool to generate a summary that highlights your potential even without work experience.",
  },
  {
    question: "Is this AI resume summary generator free?",
    answer: "Yes, ResumeTool provides a completely <strong className='text-amber-600'>free resume summary generator</strong> powered by AI. No sign-up is required to generate ATS-friendly summaries.",
  },
  {
    question: "Resume Objective vs Resume Summary: Which is better?",
    answer: "A <strong className='text-amber-600'>resume objective</strong> is traditionally for entry-level applicants, but a <strong className='text-amber-600'>professional summary</strong> is now preferred as it focuses on what you bring to the table rather than what you want from the job.",
  },
];

function FAQItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between py-4 text-left focus:outline-none"
      >
        <span className="text-lg font-semibold text-slate-900 pr-8">{question}</span>
        {isOpen ? <Minus className="h-5 w-5 text-amber-600 flex-shrink-0" /> : <Plus className="h-5 w-5 text-slate-400 flex-shrink-0" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p 
              className="pb-6 text-slate-600 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about resume summaries.
          </p>
        </div>

        <div className="divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <div key={index}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
