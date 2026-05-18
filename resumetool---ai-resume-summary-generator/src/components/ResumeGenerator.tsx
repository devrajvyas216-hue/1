import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Copy, Loader2, Check, Sparkles } from "lucide-react";

export default function ResumeGenerator() {
  const [jobRole, setJobRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("fresher");
  const [isGenerating, setIsGenerating] = useState(false);
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  const generateLocalSummary = (role: string, skills: string, level: string) => {
    const skillList = skills.split(",").map(s => s.trim()).filter(s => s.length > 0);
    const mainSkills = skillList.slice(0, 3).join(", ");
    const allSkills = skillList.join(", ");

    const templates: Record<string, string[]> = {
      fresher: [
        `Highly motivated and detail-oriented aspiring ${role} with a strong foundation in ${mainSkills}. Eager to leverage my technical skills and passion for problem-solving to contribute to a dynamic team. Committed to continuous learning and delivering high-quality results.`,
        `Recent graduate seeking an entry-level ${role} position. Proficient in ${mainSkills} with a proven ability to learn quickly and adapt to new challenges. Dedicated to excellence and looking to apply my academic knowledge to real-world projects.`,
        `Passionate and goal-driven student specializing in ${role}. Possessing a solid grasp of ${allSkills}, I am excited to start my professional journey. Strong communication skills and a collaborative mindset, ready to add value to your organization.`
      ],
      entry: [
        `Dynamic ${role} with 1-2 years of experience in the industry. Proven expertise in ${mainSkills}, with a focus on delivering efficient and scalable solutions. Adept at collaborating in team environments to achieve project milestones.`,
        `Results-oriented professional with a strong track record as a ${role}. Skilled in ${allSkills}, I have successfully contributed to multiple projects while maintaining high standards of performance. Seeking to grow further in a challenging environment.`,
        `Dedicated ${role} focused on continuous improvement and technical excellence. With a background in ${mainSkills}, I have developed a strong ability to solve complex problems and streamline processes for maximum impact.`
      ],
      mid: [
        `Accomplished ${role} with over 4 years of experience in ${mainSkills}. Expert at designing and implementing strategic initiatives that drive business growth. Strong leadership skills and a proven ability to manage multiple projects simultaneously.`,
        `Strategic-thinking ${role} with a deep understanding of ${allSkills}. Highly skilled in project management and team collaboration. Committed to delivering innovative solutions that meet and exceed organizational goals.`,
        `Proactive ${role} with a demonstrated history of excellence in the field. Specializing in ${mainSkills}, I bring a wealth of knowledge and a results-driven approach to every project I undertake.`
      ],
      senior: [
        `Visionary ${role} with more than 7 years of leadership experience. Expert in ${mainSkills} and architectural design. Proven ability to mentor teams, drive technological innovation, and deliver mission-critical solutions in fast-paced environments.`,
        `Seasoned ${role} professional with extensive expertise in ${allSkills}. Strategic leader focused on operational excellence and long-term business value. Expert at managing complex stakeholder relationships and delivering large-scale projects.`,
        `Distinguished ${role} with a career-long dedication to excellence and innovation. Deep proficiency in ${mainSkills}, coupled with a strong track record of leading high-performance teams to success.`
      ]
    };

    const levelTemplates = templates[level] || templates.fresher;
    return levelTemplates[Math.floor(Math.random() * levelTemplates.length)];
  };

  const handleGenerate = async () => {
    if (!jobRole || !skills) return;
    
    setIsGenerating(true);
    setSummary("");
    
    try {
      const response = await fetch("/api/generate-summary", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobRole, skills, experienceLevel }),
      });
      
      if (!response.ok) {
        throw new Error("API request failed");
      }
      
      const data = await response.json();
      if (data.summary) {
        setSummary(data.summary);
      } else {
        throw new Error("No summary in response");
      }
    } catch (error) {
      console.error("Error generating summary with AI:", error);
      // Fallback to local generation
      const generatedSummary = generateLocalSummary(jobRole, skills, experienceLevel);
      setSummary(generatedSummary);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="generate" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wide text-amber-600 uppercase bg-amber-50 rounded-full">
              Free AI Powered Tool
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              AI Resume Summary Generator <span className="text-amber-600">for Freshers</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
              Generate a high-quality <strong className="text-slate-900">resume summary</strong> or <strong className="text-slate-900">fresher resume summary</strong> instantly. Our tool creates <strong className="text-slate-900">ATS-friendly</strong> content that highlights your <strong className="text-slate-900">professional summary</strong> for maximum impact.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-amber-500/5 p-6 md:p-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-2">
              <label htmlFor="jobRole" className="text-sm font-medium text-slate-700">
                Target Job Role
              </label>
              <input
                id="jobRole"
                type="text"
                placeholder="e.g. Software Engineer"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="expLevel" className="text-sm font-medium text-slate-700">
                Experience Level
              </label>
              <select
                id="expLevel"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all bg-white"
                value={experienceLevel}
                onChange={(e) => setExperienceLevel(e.target.value)}
              >
                <option value="fresher">Fresher / Student</option>
                <option value="entry">Entry Level (1-2 years)</option>
                <option value="mid">Mid Level (3-5 years)</option>
                <option value="senior">Senior Level (5+ years)</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label htmlFor="skills" className="text-sm font-medium text-slate-700">
                Top Skills (comma separated)
              </label>
              <textarea
                id="skills"
                rows={3}
                placeholder="e.g. React, JavaScript, Node.js, Problem Solving"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all resize-none"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !jobRole || !skills}
            className="w-full bg-amber-600 hover:bg-amber-700 disabled:bg-slate-300 text-white font-semibold py-4 rounded-xl transition-all shadow-lg shadow-amber-600/20 flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin h-5 w-5" />
                Generating Summary...
              </>
            ) : (
              <>
                <Sparkles className="h-5 w-5" />
                Generate Professional Summary
              </>
            )}
          </button>

          <AnimatePresence>
            {summary && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-10 p-6 rounded-2xl bg-amber-50 border border-amber-100 relative group"
              >
                <button
                  onClick={handleCopy}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white shadow-sm border border-slate-200 hover:bg-amber-50 hover:text-amber-600 transition-all flex items-center gap-2 text-xs font-medium text-slate-600"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      Copy
                    </>
                  )}
                </button>
                <div className="pr-12">
                  <h3 className="text-sm font-semibold text-amber-900 mb-3 uppercase tracking-wider">
                    Generated Summary
                  </h3>
                  <p className="text-slate-800 leading-relaxed text-lg">
                    {summary}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
