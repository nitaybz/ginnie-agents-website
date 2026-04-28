import { Hero } from "./components/hero";
import { AgentTypes } from "./components/agent-types";
import { SetupDemo } from "./components/setup-demo";
import { Architecture } from "./components/architecture";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AgentTypes />
      <SetupDemo />
      <Architecture />
      <Footer />
    </main>
  );
}
