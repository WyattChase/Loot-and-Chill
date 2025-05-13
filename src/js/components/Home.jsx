import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import MediaGrid from "../components/MediaGrid.jsx";
import Membership from "../components/Membership.jsx";
import Footer from "../components/footer";
import Navbar from "./navbar.jsx";

export default function Home() {
  return (
    <>
      <main>
        <title>Loot and Chill</title>
        <meta name="description" content="Loot and Chill - Gaming Lounge" />
      </main>
      <main className="bg-[#1a1a1d] text-[#ffd700] font-roguelike">
        <Navbar />
        <Hero />
        <About />
        <MediaGrid />
        <Membership />
        <Footer />
      </main>
    </>
  );
}
