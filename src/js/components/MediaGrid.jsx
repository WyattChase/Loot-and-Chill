export default function MediaGrid() {
  return (
    <section id="games" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="aspect-video bg-gray-800">
          <img
            src={`/placeholder-${i + 1}.jpg`}
            alt="media"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </section>
  );
}
