import logo from '../../assests/logo.png';
export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src="/placeholder-hero.mp4"
      />
   <section className="flex flex-col items-center justify-center text-center py-20 px-4 bg-[#2c003e]">
        <img src={logo} alt="Loot and Chill Logo" className="w-64 mb-6" />
        {/* <h1 className="text-4xl md:text-6xl font-bold">Loot & Chill</h1> */}
        <p className="mt-4 text-lg max-w-xl">Miami’s Premier Gaming Lounge – Where adventure meets relaxation.</p>
      </section>
    </div>
  );
}
