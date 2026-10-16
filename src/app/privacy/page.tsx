export default function PrivacyPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <section id="home" className="relative isolate text-center p-5 pt-16 bg-slate-50 border-b border-slate-200">
        <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Privacy Policy</h1>
      </section>

      <section className="mx-auto max-w-3xl px-5 py-12 sm:px-8 sm:py-16 text-slate-600 leading-relaxed">
        <div className="space-y-8">
          
          <div>
            <p>
              This project is a purely private, non-commercial website for a hobby project. <br />
              I do not actively collect, store, or process any personal data from visitors of this website.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">1. Hosting & Server Log Files</h2>
            <p className="mb-3">
              This website is hosted using <strong>GitHub Pages</strong> (provided by GitHub, Inc).
            </p>
            <p className="mb-3">
              When you visit this site, your browser automatically transmits certain technical data to GitHub&apos;s servers to ensure web security and stability. This data is stored in server log files and includes:
            </p>
            <ul className="list-disc list-inside space-y-1 pl-2 mb-3">
              <li>IP address of the accessing device</li>
              <li>Date and time of the request</li>
              <li>URL of the accessed page</li>
              <li>Website from which the request was made (referrer)</li>
              <li>Browser type and operating system used</li>
            </ul>
            <p>
              I do not have access to this data, nor do I combine it with other data sources. The data processing is performed solely by GitHub to provide the hosting infrastructure. For more details, please refer to the <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noreferrer noopener" className="text-blue-600 hover:underline">GitHub General Privacy Statement</a>.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-3">2. Cookies</h2>
            <p>
              This website does not use cookies, tracking pixels, or any analytical tools (like Google Analytics). 
            </p>
          </div>

        </div>
      </section>

      {/* Minimaler Footer für die Privacy-Seite */}
      <footer className="border-t border-slate-200 bg-slate-50 py-6 text-center text-xs text-slate-400">
        <p><a href="/" className="hover:text-slate-600 transition-colors">← Back to Main Page</a></p>
      </footer>
    </main>
  );
}
