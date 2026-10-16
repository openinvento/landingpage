import {
  ArrowDownTrayIcon,
  ArrowRightIcon,
  CheckIcon,
  CubeIcon,
  LockClosedIcon,
  QrCodeIcon,
  ServerStackIcon,
  Squares2X2Icon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const repositoryUrl = "https://github.com/openinvento/openinvento";

const features = [
  {
    icon: LockClosedIcon,
    title: "Your data stays yours",
    description:
      "Run OpenInvento on your own server. Your inventory and account data stay under your control, with no hosted service in the middle.",
    className: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: Squares2X2Icon,
    title: "Make it fit your workflow",
    description:
      "Flexible inventory management gives you room to organize things in a way that works for your home, workshop, or team.",
    className: "bg-violet-50 text-violet-700",
  },
  {
    icon: CubeIcon,
    title: "Track what matters to you",
    description:
      "Keep the articles you care about together in one inventory, from everyday supplies to equipment and collections.",
    className: "bg-amber-50 text-amber-700",
  },
  {
    icon: QrCodeIcon,
    title: "Scan and find things faster",
    description:
      "QR code and barcode support makes it easy to identify items and connect the physical world to your inventory.",
    className: "bg-sky-50 text-sky-700",
  },
  {
    icon: ServerStackIcon,
    title: "Self-host without the hassle",
    description:
      "Get started with a small Docker Compose setup and keep your installation on infrastructure you choose.",
    className: "bg-rose-50 text-rose-700",
  },
  {
    icon: UsersIcon,
    title: "Share inventories with people",
    description:
      "Multi-user support and shared inventories help households and teams stay on the same page.",
    className: "bg-indigo-50 text-indigo-700",
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden bg-white text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="OpenInvento home">
            <img src="icon.png" alt="OpenInvento logo" className="h-10 w-auto rounded-lg" />
            <span className="text-lg font-bold tracking-tight">OpenInvento</span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a className="transition" href="#features">Features</a>
            <a className="transition" href="#how-it-works">Get started</a>
            <a className="transition" href="#faq">FAQ</a>
            <a className="transition" href="#faq">Documentation</a>
          </nav>
          <a
            href={repositoryUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 sm:px-5"
          >
            <span>View on GitHub</span>
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section id="home" className="relative isolate">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/80 via-white to-white" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10 lg:pt-28">
          <div className="max-w-2xl">
            <h1 className="mt-7 text-5xl font-bold leading-[1.06] tracking-tight text-slate-950 sm:text-6xl lg:text-[4.25rem]">
              OpenInvento
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 sm:text-xl">
              OpenInvento is a flexible, self-hosted inventory manager for the things you want to keep track of. Organize items, scan codes, and share inventories with your people.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-700 px-6 py-3.5 text-base font-semibold text-white shadow-lg">
                Get started <ArrowRightIcon className="h-5 w-5" />
              </a>
              <a href="#features" className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50">
                Open documentation
              </a>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">
              <span className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-emerald-600" /> Self-hosted</span>
              <span className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-emerald-600" /> Docker Compose</span>
              <span className="inline-flex items-center gap-2"><CheckIcon className="h-4 w-4 text-emerald-600" /> Multi-user</span>
            </div>
          </div>

          <figure className="relative mx-auto w-full max-w-[820px] lg:ml-auto">
            <div aria-hidden="true" className="absolute -inset-8 rounded-[3rem]  blur-2xl" />
            <img
              src="https://raw.githubusercontent.com/openinvento/openinvento/main/assets/screenshots/start_screen.png"
              alt="OpenInvento inventory dashboard"
              className="relative block w-full rounded-2xl border border-slate-200 bg-white shadow-md shadow-indigo-900/10"
            />
            <figcaption className="relative mt-3 text-center text-xs text-slate-500">OpenInvento · Inventory overview</figcaption>
          </figure>
        </div>
      </section>

      <section id="features" className="scroll-mt-24 border-y border-slate-100 bg-slate-50/70 py-6 sm:py-12">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">Made for real life</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">An inventory that works your way</h2>
            <p className="mt-4 text-lg leading-7 text-slate-600">Simple to run, flexible to use, and ready to share with the people who need it.</p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description, className }) => (
              <article key={title} className="rounded-2xl border border-slate-200/80 bg-white p-7  hover:shadow-slate-200/60">
                <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${className}`}><Icon className="h-6 w-6" /></span>
                <h3 className="mt-5 text-lg font-bold tracking-tight">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">Your server, your setup</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Up and running with Docker Compose</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">No repository checkout is needed. Download the project’s Docker Compose file, add your environment settings beside it, then start the service.</p>
            <a href={`${repositoryUrl}/blob/main/docker-compose.yml`} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 font-semibold text-indigo-700 hover:text-indigo-900">
              Get docker-compose.yml <ArrowRightIcon className="h-4 w-4" />
            </a>
          </div>

          {/* Terminal style */}
          <div className="overflow-hidden rounded-2xl bg-slate-950 shadow-2xl shadow-indigo-950/15">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-rose-400"/><span className="h-2.5 w-2.5 rounded-full bg-amber-300"/><span className="h-2.5 w-2.5 rounded-full bg-emerald-400"/></div>
              <span className="text-xs text-slate-400">terminal</span>
              <ArrowDownTrayIcon className="h-4 w-4 text-slate-500" />
            </div>
            <div className="space-y-4 p-6 font-mono text-xs leading-6 sm:p-8 sm:text-sm">
              <p className="text-slate-500"># 1. Download docker-compose.yml from the project</p>
              <p className="text-slate-500"># 2. Configure env variables</p>
              <p className="pt-2 text-slate-500"># 3. Start OpenInvento</p>
              <p><span className="text-slate-400">$ </span><span className="text-sky-200">docker compose up -d</span></p>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 font-sans text-xs font-medium"><a className="text-indigo-300 hover:text-white" href="https://raw.githubusercontent.com/openinvento/openinvento/main/docker-compose.yml" target="_blank" rel="noreferrer">Download Compose file ↗</a><a className="text-indigo-300 hover:text-white" href="https://raw.githubusercontent.com/openinvento/openinvento/main/.env.example" target="_blank" rel="noreferrer">View .env example ↗</a></div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-indigo-900/20 bg-blue-800 py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 sm:px-8 md:flex-row md:items-center">
          <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-indigo-300">Open source · Self-hosted</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Take control of your inventory.</h2><p className="mt-3 text-indigo-100/80">Explore the code and see the setup</p></div>
          <a href={repositoryUrl} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-indigo-950 transition hover:bg-indigo-100">Explore the project <ArrowRightIcon className="h-5 w-5" /></a>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <div className="text-center"><p className="text-sm font-bold uppercase tracking-[0.18em] text-indigo-600">FAQ</p><h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">A few things you might be wondering</h2></div>
          <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">
            <details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"><span>Where does my inventory data live?</span><span className="text-xl text-indigo-600 transition group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-slate-600">OpenInvento is self-hosted, so you run it on infrastructure you control. Its Docker setup stores application data in the configured data directory.</p></details>
            <details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"><span>Can I share an inventory with other people?</span><span className="text-xl text-indigo-600 transition group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-slate-600">Yes. OpenInvento supports multiple users and shared inventories, so you can keep a household or team in sync.</p></details>
            <details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"><span>What kinds of things can I track?</span><span className="text-xl text-indigo-600 transition group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-slate-600">Use it for the articles that matter to you: supplies, tools, equipment, collections, and more. QR codes and barcodes help identify items.</p></details>
            <details className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold"><span>How do I get started?</span><span className="text-xl text-indigo-600 transition group-open:rotate-45">+</span></summary><p className="mt-3 pr-8 text-sm leading-6 text-slate-600">Follow the Docker Compose instructions in the repository. Configure the environment values, including your initial admin credentials, before starting the containers.</p></details>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-slate-500 sm:px-8 md:flex-row md:items-center md:justify-between">
          <a href="#home" className="flex items-center gap-2 font-bold text-slate-800">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white">
              <img src="icon.png" alt="OpenInvento logo" className="h-8 w-auto rounded-lg" />
            </span>OpenInvento
          </a>

          <p>© {new Date().getFullYear()} {"OpenInvento"}. This project is a private, non-commercial hobby project. </p>

          <div className="flex items-center gap-5">
            <a className="hover:text-indigo-700" href={`${repositoryUrl}#readme`} target="_blank" rel="noreferrer">Documentation</a>
            <a className="hover:text-indigo-700" href={repositoryUrl} target="_blank" rel="noreferrer">GitHub</a>
            <Link href="/privacy" className="">Privacy Policy</Link>
            </div>
        </div>
      </footer>
    </main>
  );
}
