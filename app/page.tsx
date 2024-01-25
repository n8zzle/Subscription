import Navbar from "./components/Navbar.tsx";
import Hero, { bricolage_Grotesque } from "./components/Hero.tsx";
import { Bricolage_Grotesque } from "next/font/google";
import HeroShapes from "./components/HeroShapes.tsx";

export const bricolage_grotesque = Bricolage_Grotesque({
  weight: ["300", "500", "800"],
  subsets: ["latin"],
});
export default function Home() {
  return (
    <main className={`${bricolage_grotesque.className} w-screen bg-white`}>
      <Navbar />
      <Hero />
      <HeroShapes />
    </main>
  );
}
