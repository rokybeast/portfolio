
export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 bottom-0 left-8 sm:left-16 w-px bg-neutral-800/80" />
      <div className="absolute top-0 bottom-0 right-8 sm:right-16 w-px bg-neutral-800/80" />

      <div className="absolute left-0 right-0 top-8 sm:top-16 h-px bg-neutral-800/80" />
      <div className="absolute left-0 right-0 bottom-8 sm:bottom-16 h-px bg-neutral-800/80" />

      <main className="relative z-10 p-10 text-neutral-400">
        <h1 className="text-4xl font-bold font-display">Work in progress.</h1>
        <p className="text-lg">im making it, its gonna come soon.</p>
      </main>
    </div>
  );
}
