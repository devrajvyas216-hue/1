export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 container mx-auto px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
      <div className="prose prose-slate max-w-none space-y-6 text-slate-600">
        <p>Last Updated: May 2026</p>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
          <p>Welcome to ResumeTool. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you about how we look after your personal data when you visit our website.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Data We Collect</h2>
          <p>We do not require any personal identification or account creation to use our Resume Summary Generator. The data you input (Job Role, Skills, Experience) is processed in real-time to generate your summary and is not stored permanently on our servers.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Use of AI</h2>
          <p>Our tool uses Google's Gemini AI to generate content. By using this tool, you acknowledge that the input you provide is sent to AI models for processing. We recommend not entering sensitive or private information.</p>
        </section>
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies</h2>
          <p>We may use essential cookies to ensure the website functions correctly. We do not use tracking or advertising cookies.</p>
        </section>
      </div>
    </div>
  );
}
