import { photos } from "../data";

export default function Gallery() {
  return (
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 md:px-8">
      {photos.map((photo) => (
        <img
          key={photo}
          src={photo}
          alt=""
          className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition duration-300"
        />
      ))}
    </div>
  );
}