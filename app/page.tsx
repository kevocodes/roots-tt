import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full min-h-[100dvh] flex items-center justify-center p-4 flex-col">
      <section className="p-8 flex w-full flex-col justify-center items-center text-center space-y-4 max-w-2xl">
        
        <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
          Roots <AuroraText>Home</AuroraText>
        </h1>
        <p className="text-muted-foreground">
          Task management system for technical assessment.
        </p>

        <section className="flex gap-4 sm:flex-row flex-col w-full">
          <Button className="flex-1">
            <Link href="/tasks">View Tasks</Link>
          </Button>
          <Button variant="outline" className="flex-1">
            <Link href="/list">View Lists</Link>
          </Button>
        </section>

      </section>
    </main>
  );
}
