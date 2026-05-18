import { ChevronRight } from "lucide-react";

const examples = [
  {
    role: "Software Engineer",
    summary: "Detail-oriented Software Engineering fresher with a strong foundation in JavaScript, React, and Python. Proven ability to build scalable web applications through academic projects and internships. Passionate about problem-solving and software optimization.",
  },
  {
    role: "Marketing Executive",
    summary: "Dynamic Marketing fresher with expertise in digital strategy, social media management, and content creation. Adept at leveraging data analytics to drive campaign performance. Strong communicator with a creative approach to brand building.",
  },
  {
    role: "Teacher",
    summary: "Dedicated and compassionate entry-level educator with a background in elementary education and curriculum planning. Skilled in fostering inclusive classroom environments and utilizing interactive learning tools to engage diverse student groups.",
  },
  {
    role: "Graphic Designer",
    summary: "Creative Graphic Designer with proficiency in Adobe Creative Suite and a focus on visual storytelling. Experienced in creating branding assets, social media graphics, and illustrations that align with client visions and market trends.",
  },
  {
    role: "Student",
    summary: "Motivated Undergraduate student with exceptional research, writing, and leadership skills. Successfully led student organizations and maintained high academic standards. Seeking to leverage analytical abilities in a challenging professional environment.",
  },
];

export default function Examples() {
  return (
    <section id="examples" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Resume Summary Examples
          </h2>
          <p className="text-lg text-slate-600">
            See how quality summaries look for different job roles.
          </p>
        </div>

        <div className="space-y-6">
          {examples.map((example, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:bg-amber-50/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="p-1 px-3 rounded-full bg-amber-600 text-white text-[10px] font-bold uppercase tracking-wider">
                  {example.role}
                </div>
                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-amber-400 transition-colors" />
              </div>
              <p className="text-slate-700 leading-relaxed font-medium">
                "{example.summary}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
