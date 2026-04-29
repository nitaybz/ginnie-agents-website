import { Hero } from "./components/hero";
import { AgentTypes } from "./components/agent-types";
import { Quickstart } from "./components/quickstart";
import { Auth } from "./components/auth";
import { Architecture } from "./components/architecture";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AgentTypes />
      <Quickstart />
      <Auth />
      <Architecture />
      <Footer />
    </main>
  );
}
