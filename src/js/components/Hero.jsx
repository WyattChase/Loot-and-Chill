import logo from "../../assests/logo.png";
import video from "../../assests/video.mp4";
export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* YouTube Background Video
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/GkNrXhY4OfM?autoplay=1&mute=1&loop=1&playlist=GkNrXhY4OfM&controls=0&showinfo=0&modestbranding=1"
          title="Loot and Chill Background Video"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div> */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        src={video}
      />

      {/* Overlay Content */}
      <section
        id="home"
        className="relative z-10 bg-purple-900/70 text-[#ffd700] text-center py-20 px-4 h-full flex flex-col justify-center items-center"
      >
        {/* <img
          src={logo}
          alt="Loot and Chill Logo"
          className="rounded-full aspect-square object-cover w-64 mb-6"
        /> */}
        <h1 className="text-4xl md:text-6xl font-bold font-roguelike">
          Loot and Chill
        </h1>
        <p className="mt-4 text-lg max-w-xl">
          Miami’s Premier Gaming Lounge – Where adventure meets relaxation.
        </p>
      </section>
    </div>
  );
}
