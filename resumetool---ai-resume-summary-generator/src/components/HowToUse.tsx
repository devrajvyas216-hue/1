const steps = [
  {
    number: "01",
    title: "Enter Job Role",
    description: "Type the job title you're applying for to make the summary relevant.",
  },
  {
    number: "02",
    title: "Add Your Skills",
    description: "Input your top technical and soft skills to highlight your strengths.",
  },
  {
    number: "03",
    title: "Select Level",
    description: "Choose your experience level so our AI can tailor the tone correctly.",
  },
  {
    number: "04",
    title: "Click Generate",
    description: "Watch our AI craft a professional summary in under 3 seconds.",
  },
  {
    number: "05",
    title: "Copy & Use",
    description: "Copy the output and paste it directly into your resume's header.",
  },
];

export default function HowToUse() {
  return (
    <section id="how-to-use" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            How To Use ResumeTool
          </h2>
          <p className="text-lg text-slate-600">
            Generate your professional summary in 5 simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-5xl font-black text-slate-200 mb-6 group-hover:text-amber-100 transition-colors">
                {step.number}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {step.description}
              </p>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[100%] w-full border-t-2 border-dashed border-slate-200 h-1 -ml-4 z-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
