import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { AgentTypes } from "./components/agent-types";
import { Pillars } from "./components/pillars";
import { Quickstart } from "./components/quickstart";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="relative z-10">
      <Nav />
      <Hero />
      <AgentTypes />
      <Pillars />
      <Quickstart />
      <Footer />
    </main>
  );
}
