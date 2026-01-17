import BlurText from "@/components/BlurText";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <BlurText
          text="blurry!"
          delay={150}
          animateBy="words"
          direction="top"
          className="text-2xl mb-8"
        />
        <h1 className="text-4xl font-bold font-display">Work In Progress :)</h1>
        <p className="font-sans">A really fun website, by rokybeast!</p>
      </main>
    </div>
  );
}
