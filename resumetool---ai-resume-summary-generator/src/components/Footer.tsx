import { FileText } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-amber-600 p-2 rounded-lg">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">ResumeTool</span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-6">
              Free Resume Summary Generator Tool for Freshers and Professionals. Helping job seekers craft the perfect introduction for their career journey.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="/#generate" className="hover:text-amber-500 transition-colors">Generator</a></li>
              <li><a href="/#features" className="hover:text-amber-500 transition-colors">Features</a></li>
              <li><a href="/#examples" className="hover:text-amber-500 transition-colors">Examples</a></li>
              <li><a href="/#how-to-use" className="hover:text-amber-500 transition-colors">How to Use</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">SEO Keywords</h4>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>Resume summary generator</li>
              <li>Resume summary for fresher</li>
              <li>Professional summary examples</li>
              <li>AI resume summary generator</li>
              <li>Resume objective generator</li>
              <li>Career summary templates</li>
              <li>ATS-friendly resume summary</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} ResumeTool. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
