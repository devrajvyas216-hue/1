import { motion } from "motion/react";
import { Zap, Target, Layout, ShieldCheck, Smartphone } from "lucide-react";

const features = [
  {
    title: "AI Resume Summary Builder",
    description: "Get a high-quality <strong class='text-slate-900'>professional summary</strong> generated in seconds using advanced language models.",
    icon: Zap,
  },
  {
    title: "ATS-Optimized Summary",
    description: "Our generator ensures your <strong class='text-slate-900'>resume objective</strong> or summary is fully readable by hiring bots.",
    icon: Target,
  },
  {
    title: "Professional Summary Examples",
    description: "Access a variety of <strong class='text-slate-900'>resume summary examples</strong> for freshers and experienced roles.",
    icon: Layout,
  },
  {
    title: "Free Resume Tool",
    description: "Use the <strong class='text-slate-900'>best resume summary generator</strong> online without paying a single cent.",
    icon: ShieldCheck,
  },
  {
    title: "Career Summary Designer",
    description: "Craft a compelling <strong class='text-slate-900'>career summary</strong> that highlights your unique value proposition effectively.",
    icon: Smartphone,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Choose Our AI Summary Generator?
          </h2>
          <p className="text-lg text-slate-600">
            Stand out from the competition with high-quality, impact-driven summaries tailored to your profile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p 
                className="text-slate-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: feature.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
