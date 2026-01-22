
export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 bottom-0 left-[0.5cm] w-px bg-neutral-800/80" />
      <div className="absolute top-0 bottom-0 right-[0.5cm] w-px bg-neutral-800/80" />

      <div className="absolute left-0 right-0 top-[0.5cm] h-px bg-neutral-800/80" />
      <div className="absolute left-0 right-0 bottom-[0.5cm] h-px bg-neutral-800/80" />

      <main className="relative z-10 p-10 text-neutral-400">
        <h1 className="text-4xl font-bold font-display">Work in progress.</h1>
        <p className="text-lg">im making it, its gonna come soon.</p>
      </main>
    </div>
  );
}
