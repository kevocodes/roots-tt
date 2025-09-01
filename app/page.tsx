import { AuroraText } from "@/components/magicui/aurora-text";

export default function Home() {
  return (
  <main className="w-full min-h-[100dvh] flex items-center justify-center p-4">
      <section className="p-8 rounded-lg shadow-md flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Roots <AuroraText>Tasks</AuroraText>
        </h1>
        <p className="text-muted-foreground">
          Task management system for technical assessment and interview processes.
        </p>
      </section>
    </main>
  );
}
