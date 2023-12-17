import { ChevronLeft, ChevronRight } from "lucide-react";
import { MusicCard } from "./components/MusicCard";
import { SmallMusicCard } from "./components/SmallMusicCard";

export function Main() {
  const musicData = [
    {
      src: "/album.jpg",
      title: "YESSIR - Phonk Remix",
      description: "Rarin, Maikubi, LXRY PXNK",
    },
    {
      src: "/album.jpg",
      title: "YESSIR - Phonk Remix",
      description: "Rarin, Maikubi, LXRY PXNK",
    },
    {
      src: "/album.jpg",
      title: "YESSIR - Phonk Remix",
      description: "Rarin, Maikubi, LXRY PXNK",
    },
    {
      src: "/album.jpg",
      title: "YESSIR - Phonk Remix",
      description: "Rarin, Maikubi, LXRY PXNK",
    },
    {
      src: "/album.jpg",
      title: "YESSIR - Phonk Remix",
      description: "Rarin, Maikubi, LXRY PXNK",
    },
    {
      src: "/album.jpg",
      title: "YESSIR - Phonk Remix",
      description: "Rarin, Maikubi, LXRY PXNK",
    },
  ];

  return (
    <main className="flex-1 p-6">
      <div className="flex items-center gap-3">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>
      
      <h1 className="font-semibold text-4xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {musicData.map((music, index) => (
          <MusicCard key={index} {...music} />
        ))}
      </div>

      <h2 className="font-semibold text-2xl mt-10">
        Made for Edilando Saturnino
      </h2>
      <div className="grid grid-cols-8 gap-4 mt-4">
        {musicData.map((music, index) => (
          <SmallMusicCard key={index} {...music} />
        ))}
      </div>
    </main>
  );
}
