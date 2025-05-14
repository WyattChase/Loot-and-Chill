// Import all images statically at build time
const imageModules = import.meta.glob(
  "../../assests/MediaGrid/*.{jpg,jpeg,png,gif}",
  {
    eager: true,
    import: "default",
  }
);

const images = Object.values(imageModules);

export default function MediaGrid() {
  return (
    <section
      id="games"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8"
    >
      {images.map((src, i) => (
        <div key={i} className="aspect-video bg-gray-800">
          <img
            src={src}
            alt={`media-${i + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
}
