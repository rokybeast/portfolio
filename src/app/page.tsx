import ShinyText from '@/components/ShinyText'

export default function Home() {
  return (
    <div className="bg-black min-h-screen w-full relative flex items-center justify-center overflow-hidden">
      <div className="absolute top-0 bottom-0 left-[0.5cm] w-px bg-neutral-800/80" />
      <div className="absolute top-0 bottom-0 right-[0.5cm] w-px bg-neutral-800/80" />

      <div className="absolute left-0 right-0 top-[0.5cm] h-px bg-neutral-800/80" />
      <div className="absolute left-0 right-0 bottom-[0.5cm] h-px bg-neutral-800/80" />

      <main className="flex items-center justify-center h-screen text-neutral-400">
      <h1 className="text-4xl font-bold font-display head">
      [rokybeast]
      </h1>
      <br>
      <ShinyText
        text="My Portfolio (nothing here tho)"
        speed={1}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
      />
      </main>
    </div>
  );
}
